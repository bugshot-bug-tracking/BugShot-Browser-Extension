<template>
    <div id="attachments">
        <div class="header">
            <div class="title">Attachments</div>

            <label id="file-label">
                <input
                    type="file"
                    style="width: 0; height: 0"
                    multiple
                    @change="upload"
                />
            </label>
        </div>

        <div class="error" v-if="err != ''">
            <span style="white-space: pre-line">{{ err }}</span>
        </div>

        <div class="files">
            <div class="item" v-for="item in attachments" :key="item.id">
                <AttachmentItem
                    :item="item"
                    :isRemote="isRemote"
                    @download="downloadFile"
                    @delete="deleteFile"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import AttachmentItem from "./AttachmentItem.vue";
import State from "../state/State.vue";

export default {
    components: { AttachmentItem, State },
    name: "Attachments",
    props: {
        bug: Object,
        isRemote: Boolean, // this is intended to be used as a use-case flag, if the data is send to db directly or locally in RAM
    },
    emits: ["getLocal", "loading"],
    setup(props, context) {
        const files = ref([]);
        const attachments = ref([]);
        const err = ref("");

        const emitLoading = (value) => {
            context.emit("loading", value);
        };

        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        const upload = (event) => {
            emitLoading(true);

            files.value = event.target.files;
            err.value = "";

            let fileInfos = [];
            let errFlag = false;

            if (
                files.value.length > 10 ||
                attachments.value.length + files.value.length > 10
            ) {
                err.value = "You are limited to a maximum of 10 files";
                emitLoading(false);
                return;
            }

            Array.prototype.forEach.call(files.value, (file) => {
                // if the file is bigger than 5 MiB
                if (file.size > 5 * (1 << 20)) {
                    if (errFlag === false) {
                        errFlag = true;
                        err.value = "Following files are bigger than 5 MiB:\n";
                    }
                    err.value += ` - ${file.name}\n`;
                    return;
                }
                fileInfos.push(file);
            });

            emitLoading(false);

            if (errFlag == true) return;

            if (props.isRemote) uploadRemote(fileInfos);
            else uploadLocal(fileInfos);
        };

        const uploadRemote = (filesInfo) => {
            if (filesInfo.length > 0) {
                emitLoading(true);

                filesInfo.forEach((file) => {
                    try {
                        emitLoading(true);
                        toBase64(file).then((data64) => {
                            chrome.runtime.sendMessage(
                                {
                                    message: "saveAttachment",
                                    payload: {
                                        data: {
                                            name: file.name,
                                            data: data64,
                                        },
                                        bug_id: props.bug.id,
                                    },
                                },
                                (response) => {
                                    console.log(response);

                                    switch (response.message) {
                                        case "error":
                                            throw response.error;

                                        case "ok":
                                            emitLoading(false);

                                            updateAttachments();
                                            console.info(
                                                "Attachment Uploaded."
                                            );
                                            break;
                                    }
                                }
                            );
                        });
                    } catch (error) {
                        emitLoading(false);

                        err.value = error;
                        console.error(error);
                    }
                });
            }
        };

        const uploadLocal = (filesInfo) => {
            try {
                emitLoading(true);

                let filesPromises = filesInfo.map((file) => {
                    return new Promise((resolve) => {
                        resolve(toBase64(file));
                    });
                });

                Promise.all(filesPromises).then((files64) => {
                    for (let index = 0; index < files64.length; index++) {
                        attachments.value.push({
                            designation: filesInfo[index].name,
                            data: files64[index],
                        });
                    }

                    emitLoading(false);

                    context.emit("getLocal", attachments);
                });
            } catch (error) {
                emitLoading(false);

                console.error(error);
            }
        };

        const downloadFile = (item) => {
            chrome.runtime.sendMessage(
                {
                    message: "downloadAttachment",
                    payload: {
                        bug_id: props.bug.id,
                        data: item,
                    },
                },
                (response) => {
                    switch (response.message) {
                        case "ok":
                            console.info("Request download attachment: ok!");
                            break;

                        case "error":
                            err.value = response.error;
                            console.error(error);
                            break;

                        default:
                            console.warn(
                                "Request download attachment: not working?"
                            );
                            break;
                    }
                }
            );
        };

        const deleteFile = (item) => {
            if (props.isRemote) deleteRemote(item);
            else deleteLocal(item);
        };

        const deleteRemote = (item) => {
            emitLoading(true);

            chrome.runtime.sendMessage(
                {
                    message: "deleteAttachment",
                    payload: {
                        bug_id: props.bug.id,
                        data: item,
                    },
                },
                (response) => {
                    emitLoading(false);

                    switch (response.message) {
                        case "ok":
                            console.info("Request delete attachment: ok!");
                            updateAttachments();
                            break;

                        case "error":
                            err.value = response.error;
                            console.error(error);
                            break;

                        default:
                            console.warn(
                                "Request delete attachment: not working?"
                            );
                            break;
                    }
                }
            );
        };

        const deleteLocal = (item) => {
            attachments.value.splice(attachments.value.indexOf(item), 1);
        };

        const updateAttachments = () => {
            err.value = "";

            if (props.isRemote === false) return;

            emitLoading(true);

            chrome.runtime.sendMessage(
                {
                    message: "getAttachment",
                    payload: {
                        bug_id: props.bug.id,
                    },
                },
                (response) => {
                    emitLoading(false);

                    switch (response.message) {
                        case "ok":
                            console.info("Request get attachments: ok!");
                            attachments.value = response.payload;
                            break;

                        case "error":
                            err.value = response.error;
                            console.error(error);
                            break;

                        default:
                            console.warn(
                                "Request get attachments: not working?"
                            );
                            break;
                    }
                }
            );
        };

        onMounted(() => {
            if (props.isRemote) updateAttachments();
        });

        watch(props, updateAttachments);

        return {
            files,
            attachments,
            err,
            upload,
            downloadFile,
            deleteFile,
        };
    },
};
</script>


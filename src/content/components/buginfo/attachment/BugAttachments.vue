<template>
    <div id="attachments">
        <div class="header">
            <div class="title">Attachments</div>
            <label for="file" id="file-label">
                <input type="file" id="file" multiple @change="upload" />
            </label>
        </div>

        <div class="error" v-if="err != ''">{{ err }}</div>

        <div class="files">
            <div class="item" v-for="item in attachments" :key="item.id">
                <Attachment
                    :item="item"
                    @download="downloadFile"
                    @delete="deleteFile"
                ></Attachment>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import Attachment from "./Attachment.vue";

export default {
    components: { Attachment },
    name: "BugAttachment",
    props: ["bug"],
    setup(props) {
        const files = ref([]);
        const attachments = ref([]);
        const err = ref("");

        const upload = (event) => {
            files.value = event.target.files;

            const toBase64 = (file) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });

            Array.prototype.forEach.call(files.value, (file) => {
                try {
                    // if the file is bigger than 5 MiB
                    if (file.size > 5 * (1 << 20))
                        throw "Error: file is bigger than 5 MiB";

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
                                        updateAttachments();
                                        console.info("Attachment Uploaded.");
                                        break;
                                }
                            }
                        );
                    });
                } catch (error) {
                    err.value = error;
                    console.error(error);
                }
            });
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
            chrome.runtime.sendMessage(
                {
                    message: "deleteAttachment",
                    payload: {
                        bug_id: props.bug.id,
                        data: item,
                    },
                },
                (response) => {
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

        const updateAttachments = () => {
            chrome.runtime.sendMessage(
                {
                    message: "getAttachment",
                    payload: {
                        bug_id: props.bug.id,
                    },
                },
                (response) => {
                    switch (response.message) {
                        case "ok":
                            console.info("Request get attachments: ok!");
                            attachments.value = response.payload.data;
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
            updateAttachments();
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


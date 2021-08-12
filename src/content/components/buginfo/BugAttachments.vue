<template>
    <div>
        <div class="header">
            <div class="title">Attachments</div>
            <input type="file" id="file" multiple @change="upload" />
            <div id=" btn attach" />
        </div>

        <div v-if="err != ''">{{ err }}</div>

        <div class="attachments">
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
            attachments.value = files.value;
            console.log(files);

            const toBase64 = (file) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });

            Array.prototype.forEach.call(files.value, (file) => {
                console.log(file);

                // if the file is bigger than 5 MiB
                if (file.size > 5 * (1 << 20)) {
                    console.log("Error, file bigger than 5 MiB");
                    return;
                }
                try {
                    toBase64(file).then((data64) => {
                        console.log(data64);
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
                                updateAttachments();

                                switch (response.message) {
                                    case "error":
                                        throw response.error;

                                    case "ok":
                                        console.log(response.payload);
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
            console.log(item);
            let con = new FormData();
            con.append("file", item);
            console.log(con);
        };

        const deleteFile = (item) => {
            console.log(item);
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
                    attachments.value = response.payload.data;
                    console.log(response);
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


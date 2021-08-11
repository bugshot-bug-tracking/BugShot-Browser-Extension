<template>
    <div>
        <div class="header">
            <div class="title">Attachments</div>
            <input type="file" id="file" multiple @change="upload" />
            <div id=" btn attach" />
        </div>

        <div class="attachments">
            <div class="item" v-for="item in attachments" :key="item.name">
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
import { ref } from "vue";
import Attachment from "./Attachment.vue";

export default {
    components: { Attachment },
    name: "BugAttachment",
    props: ["bug"],
    setup(props) {
        const files = ref([]);
        const attachments = ref([]);

        const upload = (event) => {
            files.value = event.target.files;
            attachments.value = files.value;
            console.log(files);
        };

        const downloadFile = (item) => {
            console.log(item);
        };

        const deleteFile = (item) => {
            console.log(item);
        };

        return {
            files,
            attachments,
            upload,
            downloadFile,
            deleteFile,
        };
    },
};
</script>


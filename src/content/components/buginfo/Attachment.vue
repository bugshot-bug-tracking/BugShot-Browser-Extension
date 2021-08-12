<template>
    <div class="file-name">{{ item.designation }}</div>
    <div class="btn download" @click="download" />
    <div class="btn delete" @click="deleteFile" />
</template>


<script>
export default {
    name: "Attachment",
    props: ["item"],
    emits: ["download", "delete"],
    setup(props, context) {
        const download = () => {
            context.emit("download", props.item);
        };

        const deleteFile = () => {
            context.emit("delete", props.item);
        };

        return {
            download,
            deleteFile,
        };
    },
};
</script>
<template>
    <div class="file-name">{{ item.designation }}</div>
    <div class="controls">
        <div
            v-if="isRemote"
            class="btn download"
            @click="$emit('download', item)"
        />
        <div class="btn delete" @click="$emit('delete', item)" />
    </div>
</template>


<script>
export default {
    name: "AttachmentItem",
    props: {
        item: Object,
        isRemote: Boolean,
    },
    emits: ["download", "delete"],
};
</script>
<template>
    <div class="state-wraper" v-if="show">
        <div class="state" :class="state">
            <div class="logo" />
            <div class="message" />
        </div>
    </div>
</template>

<script>
export default {
    name: "State",
    props: {
        state: String,
        show: Boolean,
    },
};
</script>
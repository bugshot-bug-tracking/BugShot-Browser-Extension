<template>
    <div class="state" :class="state">
        <div class="logo"></div>
        <div class="message"></div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "State",
    props: ["state"],
    setup(props) {},
};
</script>
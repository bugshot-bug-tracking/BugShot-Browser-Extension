<template>
    <div class="bug-group">
        <div class="group-name">{{ name }}</div>

        <div class="group-bugs">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "BugGroup",
    props: ["name"],
};
</script>
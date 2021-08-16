<template>
    <div class="bug-card">
        <div class="card">
            <div class="card-header bug-title" @click="info">
                {{ bugInfo.designation }}
            </div>

            <div class="card-body">
                <div class="card-text d-flex justify-content-between">
                    <div class="bug-deadline">
                        {{ bugInfo.deadline }}
                    </div>
                    <div
                        class="bug priority"
                        :class="'p' + bugInfo.priority_id"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "BugCard",
    props: ["bug"],
    emits: ["info"],
    setup(props, context) {
        const bugInfo = ref(props.bug);

        const info = () => {
            context.emit("info", props.bug);
        };

        return {
            bugInfo,
            info,
        };
    },
};
</script>
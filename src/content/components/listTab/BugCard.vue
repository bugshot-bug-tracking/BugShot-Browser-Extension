<template>
    <div class="bug-card">
        <div class="card">
            <div class="card-header bug-title" @click="$emit('info', bug)">
                {{ bug.designation }}
            </div>

            <div class="card-body">
                <div class="card-text d-flex justify-content-between">
                    <div class="bug-deadline">
                        {{ bug.deadline }}
                    </div>
                    <div
                        class="bug priority"
                        :class="'p' + bug.priority_id"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BugCard",
    props: { bug: Object },
    emits: ["info"],
};
</script>
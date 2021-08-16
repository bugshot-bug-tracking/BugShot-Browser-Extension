<template>
    <Tab>
        <Container>
            <Info :bug="bug" />
        </Container>

        <Container>
            <BugAttachments :bug="bug" />
        </Container>

        <Container>
            <Comments />
        </Container>
    </Tab>

    <div id="bug-info">
        <div class="details d-flex flex-column no-wrap">
            <div class="header d-flex justify-content-between no-wrap">
                <div class="details title">{{ bug.designation }}</div>
                <div
                    id="bug-info-close-button"
                    class="btn btn-dark"
                    @click="close"
                >
                    <span>X</span>
                </div>
            </div>

            <div class="details id">{{ bug.id }}</div>

            <div class="d-flex justify-content-between no-wrap">
                <div class="details creator">{{ bug.user_id }}</div>
                <div class="details date-created">{{ bug.created_at }}</div>
            </div>

            <div class="details screenshot"></div>
            <div class="details url">{{ bug.url }}</div>
            <div class="details description">{{ bug.description }}</div>

            <div class="d-flex justify-content-between no-wrap">
                <div class="details technical-info"></div>
                <div class="arrow">^</div>
            </div>

            <div id="technical-info-container">
                <div class="details os">{{ bug.operating_system }}</div>
                <div class="details browser">{{ bug.browser }}</div>
                <div class="details selector">{{ bug.selector }}</div>
                <div class="details resolution">{{ bug.resolution }}</div>
            </div>

            <div class="d-inline-flex">
                <div class="details-priority d-inline-flex">
                    <div class="priority" :class="'p' + bug.priority_id"></div>
                </div>
                <div class="details status d-inline-flex"></div>
            </div>

            <div class="details deadline">{{ bug.deadline }}</div>
        </div>

        <div class="details attach">
            <BugAttachments :bug="bug"></BugAttachments>
        </div>
        <div class="details comments"></div>
    </div>
</template>

<script>
import Tab from "../global/Tab.vue";
import Container from "../global/Container.vue";
import Info from "./info/Info.vue";
import BugAttachments from "./attachment/BugAttachments.vue";
import Comments from "./comments/Comments.vue";

export default {
    components: { Tab, Container, Info, BugAttachments, Comments },
    name: "InfoTab",
    props: ["bug"],
    emits: ["close"],
    setup(props, context) {
        const close = () => {
            context.emit("close");
        };
        return {
            close,
        };
    },
};
</script>
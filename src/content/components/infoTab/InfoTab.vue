<template>
    <Tab>
        <Container>
            <Info :bug="bug" @close="close" />
        </Container>

        <Container>
            <BugAttachments :bug="bug" />
        </Container>

        <Container>
            <Comments />
        </Container>
    </Tab>
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
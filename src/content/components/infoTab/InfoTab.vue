<template>
    <Tab>
        <Container>
            <Info :bug="bug" @close="close" />
        </Container>

        <Container>
            <Attachments :bug="bug" :isRemote="true" />
        </Container>

        <!-- <Container>
            <Comments :bug="bug" />
        </Container> -->
    </Tab>
</template>

<script>
import Tab from "../global/Tab.vue";
import Container from "../global/Container.vue";
import Info from "./info/Info.vue";
import Attachments from "../global/attachment/Attachments.vue";
import Comments from "./comments/Comments.vue";

export default {
    components: { Tab, Container, Info, Attachments, Comments },
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
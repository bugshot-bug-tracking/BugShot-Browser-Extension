<template>
    <Tab>
        <State :state="'loading'" :show="isLoading" />

        <Container>
            <Info :bug="bug" @close="$emit('close')" @loading="infoLoading" />
        </Container>

        <Container>
            <Attachments :bug="bug" :isRemote="true" />
        </Container>

        <div v-if="false">
            <!-- 
				<Container>
					<Comments :bug="bug"/>
				</Container> 
			-->
        </div>
    </Tab>
</template>

<script>
import { ref } from "@vue/reactivity";

import Tab from "../global/tab/Tab.vue";
import Container from "../global/container/Container.vue";
import Info from "./info/Info.vue";
import Attachments from "../global/attachment/Attachments.vue";
import State from "../global/state/State.vue";

export default {
    components: { Tab, Container, Info, Attachments, State },
    name: "InfoTab",
    props: { bug: Object },
    emits: ["close"],
    setup() {
        const isLoading = ref(false);

        const infoLoading = (value) => {
            isLoading.value = value;
        };

        return {
            isLoading,
            infoLoading,
        };
    },
};
</script>
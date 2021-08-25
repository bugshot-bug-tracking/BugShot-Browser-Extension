<template>
    <transition :duration="100" name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-wrapper" @click.self="$emit('close')">
                <div class="modal-container">
                    <button
                        class="btn btn-modal-close"
                        @click="$emit('close')"
                    />
                    <div class="modal-content">
                        <slot />
                    </div>
                    <slot name="extra" />
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
export default {
    name: "Modal",
    emits: ["close"],
    props: {
        show: Boolean,
    },
};
</script>
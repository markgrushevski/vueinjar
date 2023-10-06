<script setup lang="ts">
withDefaults(defineProps<{ modelValue?: boolean }>(), { modelValue: false });

defineEmits<{ (event: 'update:modelValue', value: boolean): void }>();
</script>

<template>
    <aside :class="{ aside: true, aside_open: modelValue }" @click.self="$emit('update:modelValue', false)">
        <div class="anchors">123</div>
    </aside>
</template>

<style scoped>
.aside {
    visibility: hidden;
    position: fixed;

    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition: all 0.225s ease-out;
    background-color: transparent;
}

.aside_open {
    visibility: visible;
    background-color: hsl(0deg 0% 0% / 50%);
}

.anchors {
    width: min-content;
    height: 100%;
    padding: 16px 32px 32px;
    transform: translateX(-90%);

    transition: all 0.125s ease-in;
    opacity: 1;

    background-color: var(--color-bg);
}

.aside_open .anchors {
    transform: translateX(0);
}
</style>

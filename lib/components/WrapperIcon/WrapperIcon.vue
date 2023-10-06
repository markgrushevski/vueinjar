<script lang="ts" setup>
import { computed } from 'vue';

const p = withDefaults(defineProps<{ size?: string; width?: string; height?: string }>(), {
    size: undefined,
    width: '1.5em',
    height: '1.5em'
});

const s = computed(() => {
    if (p.size) {
        return {
            w: p.size,
            h: p.size
        };
    }

    return { w: p.width, h: p.height };
});
</script>

<template>
    <div :class="$style.wrapper"><slot /></div>
</template>

<style module>
.wrapper {
    display: inline-block;
    width: v-bind('s.w');
    height: v-bind('s.h');
}

.wrapper svg {
    width: 100%;
    height: 100%;
}
</style>

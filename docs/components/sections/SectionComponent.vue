<script setup lang="ts">
import { computed } from 'vue';

const p = defineProps<{ title: string }>();

const href = computed(() => p.title.toLowerCase().replaceAll(' ', '_'));
</script>

<template>
    <section>
        <h4 :id="href" class="heading">
            <a :href="'#' + href">{{ title }}</a>
        </h4>
        <div class="content">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
.content {
    width: 330px;
    max-height: 75vh;

    padding: 24px 12px;

    overflow-y: auto;
    border-radius: 8px;

    outline: 2px solid var(--color-glass);

    text-align: center;
}
</style>

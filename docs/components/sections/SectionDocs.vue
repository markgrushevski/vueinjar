<script setup lang="ts">
import { computed } from 'vue';

const p = defineProps<{ title: string }>();

const href = computed(() => p.title.toLowerCase().replaceAll(' ', '_'));
</script>

<template>
    <article>
        <h2 :id="href" class="heading">
            <a :href="'#' + href">{{ title }}</a>
        </h2>
        <slot></slot>
    </article>
</template>

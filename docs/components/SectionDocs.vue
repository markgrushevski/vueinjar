<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
    <h2>{{ title }}</h2>
    <slot></slot>
</template>

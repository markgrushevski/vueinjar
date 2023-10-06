<script setup lang="ts"></script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="page-icon">
        <slot></slot>
    </svg>
</template>

<style>
.page-icon {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}

:root.light .page-icon {
    fill: var(--color-cookie);
}

:root.dark .page-icon {
    fill: #ffffff;
}
</style>

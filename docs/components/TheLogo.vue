<script setup lang="ts"></script>

<template>
    <h1 class="heading logo">
        <slot name="prepend"></slot>

        <a href="/">
            <span style="color: var(--color-cookie)">vue</span>
            <span style="color: var(--color-glass)">in</span>
            <span style="color: var(--color-lid)">jar</span>
        </a>

        <slot name="append"></slot>
    </h1>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 90vw;
    font-variant-caps: all-small-caps;
}
</style>

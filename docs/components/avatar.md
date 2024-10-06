---
next:
    text: 'Button'
    link: '/components/button'
---

<script setup>
import { VAvatar } from '@lib';

const imageLink = '/docs/image-example.jpg';
</script>

# Avatar

Base element for avatar image

## Import and Usage

```vue {2}
<script setup>
import { VAvatar } from 'vueinjar';

const imageLink = '...';
</script>

<template>
    <v-avatar />
    <v-avatar text="Some name" />
    <v-avatar :src="imageLink" />
</template>
```

:::info Output

<div class="vij flex">
    <v-avatar />
    <v-avatar text="Some name" />
    <v-avatar :src="imageLink" />
</div>

:::

## Titled

```vue {2}
<script setup>
import { VAvatar } from 'vueinjar';

const imageLink = '...';
</script>

<template>
    <v-avatar
        text="Marcus Tullius Cicero"
        title="Marcus Tullius Cicero"
        subtitle="statesman · lawyer · writer · orator"
        size="xxl"
    />
</template>
```

:::info Output

<div class="vij flex">
    <v-avatar 
        text="Marcus Tullius Cicero"
        title="Marcus Tullius Cicero" 
        subtitle="statesman · lawyer · writer · orator" 
        size="xxl"
    />
</div>

:::

## Colors

```vue {2}
<script setup>
import { VAvatar } from 'vueinjar';
</script>

<template>
    <v-avatar text="Some name" />
    <v-avatar text="Some name" color="primary" />
    <v-avatar text="Some name" color="secondary" />
    <v-avatar text="Some name" color="surface" />
    <v-avatar text="Some name" color="background" />
    <v-avatar text="Some name" color="success" />
    <v-avatar text="Some name" color="warn" />
    <v-avatar text="Some name" color="danger" />
    <v-avatar text="Some name" color="info" />
</template>
```

:::info Output

<div class="vij flex column center">
    <v-avatar text="Some name" />
    <v-avatar text="Some name" color="primary" />
    <v-avatar text="Some name" color="secondary" />
    <v-avatar text="Some name" color="surface" />
    <v-avatar text="Some name" color="background" />
    <v-avatar text="Some name" color="success" />
    <v-avatar text="Some name" color="warn" />
    <v-avatar text="Some name" color="danger" />
    <v-avatar text="Some name" color="info" />
</div>

:::
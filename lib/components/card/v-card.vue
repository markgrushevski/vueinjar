<script lang="ts" setup>
import { type RadiusSize, type ThemeColor, type Variant, VAvatar, VIcon } from '@lib';

withDefaults(
    defineProps<{
        prependAvatar?: string;
        prependIcon?: string;
        appendAvatar?: string;
        appendIcon?: string;
        image?: string;
        icon?: string;
        /** @default "primary" */
        color?: ThemeColor;
        disabled?: boolean;
        fluid?: boolean;
        loading?: boolean;
        /** @default "rounded" */
        radius?: RadiusSize;
        subtitle?: string;
        text?: string;
        title?: string;
        /** @default "fill" */
        variant?: Variant;
    }>(),
    {
        color: 'surface',
        radius: 'lg',
        variant: 'fill'
    }
);
</script>

<template>
    <div
        :class="[
            'v-card',
            {
                'v-card_icon': !text,
                'v-card_fluid': fluid,
                [`v-size-radius v-size-radius_${radius}`]: radius,
                [`v-variant v-variant_${variant}`]: variant,
                [`v-color v-color_${color}`]: color,
                'v-loading': loading,
                'v-disabled': disabled
            }
        ]"
    >
        <slot>
            <div v-if="$slots['actions-prepend']" class="v-card__actions">
                <slot name="actions-prepend"></slot>
            </div>
            <div class="v-card__header">
                <div class="v-card__header-prepend">
                    <slot name="header-prepend">
                        <v-avatar v-if="prependAvatar" :src="prependAvatar" />
                        <v-icon v-if="prependIcon" :icon="prependIcon" size="sm" />
                    </slot>
                </div>
                <div class="v-card__headline">
                    <div class="v-card__title">
                        <slot name="title">{{ title }}</slot>
                    </div>
                    <div class="v-card__subtitle">
                        <slot name="subtitle">{{ subtitle }}</slot>
                    </div>
                </div>
                <div class="v-card__header-append">
                    <slot name="header-append">
                        <v-avatar v-if="appendAvatar" :src="appendAvatar" />
                        <v-icon v-if="appendIcon" :icon="appendIcon" size="sm" />
                    </slot>
                </div>
            </div>
            <div class="v-card__body">
                <slot name="body">{{ text }}</slot>
            </div>
            <div v-if="$slots['actions-append']" class="v-card__actions">
                <slot name="actions-append"></slot>
            </div>
        </slot>
    </div>
</template>

<style>
.v-card {
    min-width: min-content;
    min-height: min-content;

    padding: var(--v-size-gap_xl);
    overflow: hidden;

    transition:
        opacity 0.15s ease-out,
        background-color 0.15s ease-out,
        color 0.15s ease-out,
        border-color 0.15s ease-out;

    border: 1px solid var(--v-variant-border-color);
    border-radius: var(--v-size-radius);

    opacity: var(--v-variant-opacity);

    background-color: var(--v-variant-bg-color);
    color: currentcolor;

    font-size: 1rem;
    overflow-wrap: break-word;
}

.v-card.v-card_fluid {
    width: 100%;
}

.v-card.v-card_icon-position_top {
    flex-direction: column;
}

.v-card.v-card_icon-position_right {
    flex-direction: row-reverse;
}

.v-card.v-card_icon-position_bottom {
    flex-direction: column-reverse;
}

.v-card.v-card_icon-position_left {
    flex-direction: row;
}

.v-card .v-card__header {
    display: flex;
    align-items: center;
    justify-content: stretch;
    gap: calc(var(--v-size-gap) * 1.5);
}

.v-card .v-card__headline {
    flex-grow: 1;
}

.v-card .v-card__title {
    font-size: 1.25rem;
    font-weight: bolder;
}

.v-card .v-card__subtitle {
    opacity: 0.8;
    font-size: 0.875rem;
}

.v-card > .v-card__actions:not(:last-child),
.v-card > .v-card__header:not(:last-child),
.v-card > .v-card__body:not(:last-child) {
    margin-bottom: var(--v-size-gap);
}
</style>

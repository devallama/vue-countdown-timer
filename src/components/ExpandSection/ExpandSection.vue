<template>
    <div class="expand-section">
        <button
            class="toggle-button"
            :class="{ isOpen }" 
            @click="toggleState"
        />
        <div
            class="content"
            :class="{ visible: isOpen }"
        >
            <div class="content-inner">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExpandSection',
    data: () => ({ 
        isOpen: false
    }),
    methods: {
        toggleState() {
            const { isOpen } = this;

            this.isOpen = !isOpen;
        }
    }
};
</script>

<style lang="scss" scoped>
    .expand-section {
        position: relative;
    }

    .toggle-button {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        background-color: white;
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
        border: none;
        cursor: pointer;

        &:before, &:after {
            content: '';
            width: 3.5rem;
            height: 0.25rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: $theme_primary;
            transition: transform 0.3s ease;
        }

        &:after {
            transform: translate(-50%, -50%) rotate(90deg);
        }

        &.isOpen {
            &:before {
                transform: translate(-50%, -50%) rotate(225deg);
            }

            &:after {
                transform: translate(-50%, -50%) rotate(315deg);
            }
        }
    }

    .content {
        background-color: $theme_colorOne;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;

        &.visible {
            max-height: 50vh;
        }
    }

    .content-inner {
        padding: 2.5rem 0 4.5rem;
    }
</style>

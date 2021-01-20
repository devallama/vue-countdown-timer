<template>
    <button
        class="button"
        :type="type"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'button'
        }
    }
};
</script>

<style lang="scss" scoped>
    .button {
        background-color: $theme_primary;
        color: white;
        padding: 1.125rem calc(2.5rem + 2.5rem + 1rem) 1.125rem 2.5rem;
        font-size: 1.25rem;
        border: none;
        border-radius: 0.125rem;
        cursor: pointer;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            right: 2.5rem;
            top: 50%;
            transform: translateY(-50%);
            width: 2rem;
            height: 2rem;
            background-image: url(svgIcon('plus', 'circle-white'));
            background-size: contain;
            background-position: center center;
        }
    }
</style>

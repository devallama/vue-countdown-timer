<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Global'
};
</script>

<style lang="scss">
    body {
        padding: 0;
        margin: 0;
        color: $theme_primary;
        font-family: Segoe UI, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input {
        color: $theme_primary;
    }

    h2 {
        color: $theme_primary;
        font-size: 2.375rem;
        font-weight: 400;
    }
</style>

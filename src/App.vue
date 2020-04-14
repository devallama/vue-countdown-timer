<template>
    <Global id="app">
        <slot />
    </Global>
</template>

<script>
import Global from './global/Global';

export default {
    name: 'App',
    components: {
        Global
    }
};
</script>

<style lang="scss" scoped>
    #app {
        background-color: $theme_secondary;
    }
</style>

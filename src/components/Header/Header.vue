<template>
    <header class="header">
        <h1 class="title">
            COUNT TIMULAR
        </h1>
        <img
            src="/assets/images/svg/count/count.svg"
            alt="Count timular logo"
            class="logo"
        >
    </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style lang="scss" scoped>
    .header {
        background-color: $theme_primary;
        overflow: hidden;
        color: white;
        height: 21.75rem;
        position: relative;
    }

    .title {
        width: auto;
        font-weight: 200;
        font-size: 3.875rem;
        position: absolute;
        bottom: 0.5rem;
        left: calc(37.5% - 28.75rem);
        margin: 0;
    }

    .logo {
        position: absolute;
        width: 18.75rem;
        height: auto;
        top: 1.5rem;
        left: 37.5%;
    }
</style>

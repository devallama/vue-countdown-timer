<template>
    <div
        class="container"
        @click="openPicker"
    >
        <input
            v-model="value"
            class="input"
            :class="{ hasError }"
            type="color"
            @input="handleInput"
            @blur="handleBlur"
        >
        <span
            class="color"
        >
            {{ value }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'ColorPicker',
    props: {
        required: {
            type: Boolean,
            default: false
        },
        onInputFnc: {
            type: Function,
            default: () => {}
        }
    },
    data: () => ({
        value: '#60B7BE',
        hasError: false
    }),
    methods: {
        handleInput(event) {
            const { onInputFnc } = this;

            if (typeof onInputFnc === 'function') {
                onInputFnc(event.target.value);
            }
        },
        handleBlur(event) {
            this.hasError = !event.target.validity.valid;
        },
        openPicker(event) {
            event.currentTarget.children[0].click();
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../_field.base.scss';

    .container {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 0.125rem;
        border: 0.0625rem solid $theme_primary;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .input {
        height: 3.25rem;
        width: 3.25rem;
        border: none;
        padding: 0 0.125rem;
    }

    .color {
        padding: 0 1rem;
        line-height: normal;
        text-align: center;
        flex: 1 1 auto;
    }
</style>

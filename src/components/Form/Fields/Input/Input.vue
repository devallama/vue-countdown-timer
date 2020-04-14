<template>
    <input
        v-model="value"
        class="input"
        :class="{ hasError }"
        :type="type"
        :required="required"
        @input="handleInput"
        @blur="handleBlur"
    >
</template>

<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text',
            validator (value) {
                return ['text'].some(allowed => allowed === value);
            }
        },
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
        value: '',
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
        }
    }
};
</script>

<style lang="scss" scoped>
    .input {
        font-size: 1.0625rem;
        font-weight: 300;
        padding: 1rem;
        border: 0.0625rem solid $theme_primary;
        border-radius: 0.125rem;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.6);

        &.hasError {
            border-color: red;
        }
    }
</style>

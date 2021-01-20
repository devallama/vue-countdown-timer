<template>
    <span class="checkbox-container">
        <input
            :id="id"
            v-model="value"
            class="input checkbox"
            type="checkbox"
        >
        <label
            :for="id"
            class="label"
        >{{ label }}</label>
    </span>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'Checkbox',
    props: {
        label: {
            type: String,
            default: 'Label'
        },
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: uuidv4()
        }
    },
    data: () => ({
        value: '',
        checked: false,
        hasError: false
    }),
    methods: {
        handleCheck(event) {
            const { value, checked: isChecked } = event.target;

            if (isChecked) {
                this.checkedValues.push(value);
            } else {
                this.checkedValues = this.checkedValues.filter(checkedValue => checkedValue !== value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../_field.base.scss';

    .checkbox-container {
        display: flex;
        align-items: center;
    }

    .checkbox {
        height: 1.625rem;
        width: 1.625rem;
    }

    .label {
        margin-left: 0.875rem;
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 300;
    }
</style>

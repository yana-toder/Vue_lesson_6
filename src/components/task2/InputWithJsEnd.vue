<template>
    <h2>Task 2</h2>
    <label>
        Введіть шлях до файлу js
        <input type="text" v-model="currentURL" :style="{ backgroundColor: isErrorColor }" />
        <div v-if="isErrorColor">Введіть дані, які закінчуються на '.js'</div>
    </label>
</template>

<script>
export default {
    name: 'InputWithJsEnd',

    props: {
        modelValue: {
            type: String,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },

    data() {
        return {
            isErrorColor: null,
        }
    },

    computed: {
        currentURL: {
            get() {
                return this.modelValue
            },
            set(val) {
                const inputVal = val.toLowerCase()

                if (this.modelModifiers.checkPath) {
                    if (inputVal.endsWith('.js')) this.isErrorColor = null
                    else this.isErrorColor = 'red'
                }

                this.$emit('update:modelValue', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 50px;
}
</style>

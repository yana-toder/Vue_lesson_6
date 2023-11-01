<template>
    <h2>Task 3</h2>
    <label>
        Введіть email
        <input type="email" v-model="currentEmail" @blur="addDomain" :style="{ backgroundColor: errorColor }" />
    </label>
</template>

<script>
export default {
    name: 'EmailInput',

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
            errorColor: null,
            domain: '@inv.mn.edu',
        }
    },

    computed: {
        currentEmail: {
            get() {
                return this.modelValue
            },
            set(val) {
                if (this.modelModifiers.check) {
                    if (val && !val.endsWith(this.domain)) {
                        this.errorColor = 'red'
                    } else this.errorColor = null
                }
                this.$emit('update:modelValue', val)
            },
        },
    },
    methods: {
        addDomain() {
            if (!this.currentEmail.endsWith(this.domain)) {
                this.currentEmail += this.domain
            }
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 50px;
}
</style>

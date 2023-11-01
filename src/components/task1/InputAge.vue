<template>
    <h2>Task 1</h2>
    <label>
        Введіть вік
        <input
            type="number"
            v-model="currentValue"
            :style="{ backgroundColor: activeColor }"
            @input="clearActiveColor"
        />
    </label>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
</template>

<script>
export default {
    name: 'InputAge',
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
            activeColor: null,
            errorMessage: null,
        }
    },
    computed: {
        currentValue: {
            get() {
                return this.modelValue
            },
            set(val) {
                //check
                if (this.modelModifiers.check) {
                    if (val > 150) {
                        val = null
                        this.errorMessage = 'Введіть вік від 0 до 150'
                    } else this.errorMessage = null
                }
                //setColor
                if (this.modelModifiers.setColor) {
                    if (val && val < 10) this.activeColor = 'green'
                    else if (val < 21) this.activeColor = 'yellow'
                    else this.activeColor = 'orange'
                }

                this.$emit('update:modelValue', val)
            },
        },
    },
    methods: {
        clearActiveColor() {
            if (!this.currentValue) {
                this.activeColor = null
            }
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 50px;
}
.error {
    color: red;
    margin-top: 10px;
}
</style>

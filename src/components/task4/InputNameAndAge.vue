<template>
    <h2>Task4</h2>
    <label>
        Iм’я користувача
        <input type="text" v-model="currentUserName" :style="{ backgroundColor: errorNameColor }" @blur="clearInput" />
    </label>
    <label>
        Вік користувача
        <input type="number" v-model="currentUserAge" :style="{ backgroundColor: ageColor }" @blur="clearInput" />
    </label>
</template>

<script>
export default {
    name: 'InputNameAndAge',

    props: {
        name: {
            type: String,
            default: '',
        },
        nameModifiers: {
            default: () => ({}),
        },
        age: {
            type: Number,
        },
        ageModifiers: {
            default: () => ({}),
        },
    },

    data() {
        return {
            errorNameColor: null,
            ageColor: null,
        }
    },

    computed: {
        currentUserName: {
            get() {
                return this.name
            },
            set(val) {
                if (this.nameModifiers.nameIsEmpty) {
                    if (!val) this.errorNameColor = 'red'
                    else this.errorNameColor = null
                }
                this.$emit('update:name', val)
            },
        },
        currentUserAge: {
            get() {
                return this.age
            },
            set(val) {
                if (this.ageModifiers.checkAge) {
                    if (val < 18) this.ageColor = 'red'
                    else if (val > 18) this.ageColor = 'green'
                    else this.ageColor = null
                }
                this.$emit('update:age', val)
            },
        },
    },
    methods: {
        clearInput() {
            if (!this.currentUserName) this.errorNameColor = null
            if (!this.currentUserAge) this.ageColor = null
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 50px;
}
</style>

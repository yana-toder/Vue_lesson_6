<template>
    <h2>Task 6</h2>
    <div class="container">
        <label class="card-number">
            CARD NUMBER
            <input type="text" maxlength="19" v-model="cardNum" />
        </label>
        <div class="code-wrap">
            <label>
                EXPIRY DATE
                <input type="text" maxlength="5" placeholder="mm / yy" v-model="expDate" />
            </label>
            <label>
                SECURE CODE
                <input type="text" maxlength="3" v-model="secureCodeNum" />
            </label>
        </div>
    </div>
</template>

<script>
import { getFormattedNumber } from '@/utils/formats.js'
export default {
    name: 'CardDataInput',

    props: {
        cardVal: {
            type: String,
        },
        cardValModifiers: {
            default: () => ({}),
        },
        expDateVal: {
            type: String,
        },
        secureCodeVal: {
            type: String,
        },
    },
    data() {
        return {
            getFormattedNumber,
        }
    },
    computed: {
        cardNum: {
            get() {
                return this.cardVal
            },
            set(val) {
                if (this.cardValModifiers.divideDigits) {
                    val = val.replace(/\D/g, '')
                    val = getFormattedNumber(val)
                }
                this.$emit('update:cardVal', val)
            },
        },
        expDate: {
            get() {
                return this.expDateVal
            },
            set(val) {
                val = val.replace(/(\d{2})(\d{2})/, '$1/$2')
                this.$emit('update:expDateVal', val)
            },
        },
        secureCodeNum: {
            get() {
                return this.secureCodeVal
            },
            set(val) {
                this.$emit('update:secureCodeVal', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 40px;
}
.card-number {
    input {
        margin-left: 10px;
    }
}
.code-wrap {
    margin-top: 15px;
    input {
        width: 50px;
    }
}
</style>

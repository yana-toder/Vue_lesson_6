<template>
    <input-age v-model.check.setColor="myValue" />
    <input-with-js-end v-model.checkPath="valueURL" />
    <email-input v-model.check="emailValue" />
    <input-name-and-age v-model:name.nameIsEmpty="nameValue" v-model:age.checkAge="ageValue" />
    <product-manager :product-list="productsData" />
    <card-data-input
        v-model:cardVal.divideDigits="card"
        v-model:expDateVal="expiryDate"
        v-model:secureCodeVal="secureCode"
    />
</template>

<script>
import InputAge from './components/task1/InputAge.vue'
import InputWithJsEnd from './components/task2/InputWithJsEnd.vue'
import EmailInput from './components/task3/EmailInput.vue'
import InputNameAndAge from './components/task4/InputNameAndAge.vue'
import ProductManager from './components/task5/ProductManager.vue'
import CardDataInput from './components/task6/CardDataInput.vue'
import { productsData } from '@/constants/products'
export default {
    name: 'App',
    components: {
        InputAge,
        InputWithJsEnd,
        EmailInput,
        InputNameAndAge,
        ProductManager,
        CardDataInput,
    },

    data() {
        return {
            productsData,
            myValue: null,
            valueURL: null,
            emailValue: null,
            nameValue: null,
            ageValue: null,
            card: null,
            expiryDate: null,
            secureCode: null,
        }
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin-top: 60px;
}
</style>

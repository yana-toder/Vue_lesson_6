<template>
    <div class="container">
        <div v-for="product in productsList" :key="product.id" class="container-item">
            <a :href="product.link">
                <img :src="product.image" alt="img" />
            </a>
            <a :href="product.link">
                <h3>{{ product.name }}</h3>
            </a>
            <div>{{ product.price }} ₴</div>
        </div>
        <div v-if="isEmpty">Список порожній</div>
    </div>
</template>

<script>
export default {
    name: 'ProductList',

    props: {
        productsList: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        isEmpty() {
            return this.productsList.length === 0
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
.container-item {
    max-width: 400px;
    margin: 15px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
    img {
        width: 350px;
        height: 250px;
    }
    h3 {
        color: #0c474e;
    }
    a {
        text-decoration: none;
    }
}
</style>

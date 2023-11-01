<template>
    <h2>Task 5</h2>
    <div class="container">
        <div class="filters">
            <product-filters
                :product-list="productsData"
                v-model:brand.check="filteredBrand"
                v-model:seller.check="filteredSeller"
            />
        </div>
        <product-list :products-list="filteredProducts" />
    </div>
</template>

<script>
import ProductFilters from './ProductFilters.vue'
import ProductList from './ProductList.vue'
import { productsData } from '@/constants/products'

export default {
    name: 'ProductManager',
    components: {
        ProductFilters,
        ProductList,
    },
    props: {
        productList: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            productsData,
            filteredBrand: [],
            filteredSeller: [],
        }
    },
    computed: {
        filteredProducts() {
            if (this.filteredBrand.length === 0 && this.filteredSeller.length === 0) {
                return this.productsData
            }

            return this.productsData.filter((product) => {
                const isBrandMatch = this.filteredBrand.length === 0 || this.filteredBrand.includes(product.brand)
                const isSellerMatch = this.filteredSeller.length === 0 || this.filteredSeller.includes(product.seller)
                return isBrandMatch && isSellerMatch
            })
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 50px;
}
.container {
    display: flex;
}
.filters {
    max-width: 500px;
    flex-shrink: 0;
}
</style>

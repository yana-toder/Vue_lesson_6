<template>
    <div>
        <ul :style="{ border: addBorderSeller }">
            <h3>Виберіть продавця:</h3>
            <li v-for="seller in sellersOption" :key="seller">
                <input type="checkbox" v-model="selectedSeller" :value="seller" />
                {{ seller }}
            </li>
        </ul>
    </div>
    <div>
        <ul :style="{ border: addBorderBrand }">
            <h3>Виберіть бренд:</h3>
            <li v-for="brand in brandsOption" :key="brand">
                <input type="checkbox" v-model="selectedBrand" :value="brand" />
                {{ brand }}
            </li>
        </ul>
    </div>
</template>

<script>
import { productsData } from '@/constants/products'

export default {
    name: 'ProductFilters',

    props: {
        productList: {
            type: Array,
            required: true,
        },
        brand: {
            type: Array,
            required: true,
        },
        brandModifiers: {
            default: () => ({}),
        },
        seller: {
            type: Array,
            required: true,
        },
        sellerModifiers: {
            default: () => ({}),
        },
    },
    data() {
        return {
            productsData,
        }
    },

    computed: {
        brandsOption() {
            const brandsList = productsData.reduce((uniqueBrands, product) => {
                if (!uniqueBrands.includes(product.brand)) {
                    uniqueBrands.push(product.brand)
                }
                return uniqueBrands
            }, [])

            return brandsList
        },
        sellersOption() {
            const sellersList = productsData.reduce((uniqueSellers, product) => {
                if (!uniqueSellers.includes(product.seller)) {
                    uniqueSellers.push(product.seller)
                }
                return uniqueSellers
            }, [])
            return sellersList
        },
        selectedBrand: {
            get() {
                return this.brand
            },
            set(val) {
                this.$emit('update:brand', val)
            },
        },
        selectedSeller: {
            get() {
                return this.seller
            },
            set(val) {
                this.$emit('update:seller', val)
            },
        },
        addBorderBrand() {
            if (this.brandModifiers.check) {
                if (this.selectedBrand.length === 0) {
                    return '3px solid green'
                }
            }
            return null
        },
        addBorderSeller() {
            if (this.sellerModifiers.check) {
                if (this.selectedSeller.length === 0) {
                    return '3px solid green'
                }
            }
            return null
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>

<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
    name: "AppRestaurantCard",
    props: ['restaurantId'],
    data() {
        return {
            store,
            addedToCartMap: {}
        }
    },
    mounted() {
        this.findProducts();
    },
    methods: {
        findProducts() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantId}/products`)
                .then(response => {
                    this.store.productsArray = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addToCart(product) {
            this.store.cartItems.push({ ...product, quantity: 1 });
            this.addedToCartMap[product.id] = true;
            localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
        },
        removeFromCart(product) {
            const index = this.store.cartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.store.cartItems.splice(index, 1);
                delete this.addedToCartMap[product.id]; // Rimuovi l'elemento dall'addedToCartMap
                localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
            }
        }
    }
}
</script>

<template>
    <section class="cont">
        <div class="d-flex align-items-center flex-wrap wrap">
            <div v-for="product in store.productsArray" :key="product.id" class="card-measure">
                <div class="__area text-center">
                    <a href="#" class="__card">
                        <button class="__favorit"><i class="fa-regular fa-heart"></i></button>
                        <img :src="product.image" class="img-fluid __img" />
                        <div class="__card_detail text-left">
                            <h4>{{ product.name }}</h4>
                            <p>{{ product.ingredients }}</p>
                            <p>{{ product.description }}</p>
                            <p>Prezzo: {{ product.price }}€</p>
                            <div class="__detail d-flex flex-column">
                                <button v-if="!addedToCartMap[product.id]" type="button" class="btn btn-primary"
                                    @click="addToCart(product)">
                                    Aggiungi al carrello
                                </button>
                                <button v-else type="button" class="btn btn-danger" @click="removeFromCart(product)">
                                    Rimuovi dal carrello
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.cont {
    padding: 1rem;

    background-size: contain;
    height: calc(100vh - 80px);

}

.card-measure {
    width: calc(100% / 4);

}

.wrap {
    width: 80%;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.321);
    border-radius: 10px;
}

.__area {
    margin: 2rem;
    color: #7c7671;

}

.__card {
    max-width: 350px;

    cursor: pointer;
    position: relative;
    display: inline-block;
    color: unset;
    text-decoration: none;
}

.__card:hover {
    color: unset;
    text-decoration: none;
}

.__img {
    border-radius: 10px;
}

.__favorit {
    background-color: #fff;
    border-radius: 8px;
    color: #fc9d52;
    position: absolute;
    right: 15px;
    top: 8px;
    padding: 3px 4px;
    font-size: 22px;
    line-height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    border: 0;
}

.__favorit:hover {
    background-color: #fc9d52;
    color: #fff;
    text-decoration: none;
}

.__card_detail {
    box-shadow: 0 4px 15px rgba(175, 77, 0, 0.13);
    padding: 13px;
    border-radius: 8px;
    margin: -30px 10px 0;
    position: relative;
    z-index: 2;
    background-color: #fff;
}

.__card_detail h4 {
    color: #474340;
    line-height: 100%;
    font-weight: bold;
}

.__card_detail p {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0.4rem;
}

.__type span {
    background-color: #feefe3;
    padding: 5px 10px 7px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    color: #fc9d52;
    font-weight: bold;
    line-height: 100%;
}

.__detail {
    margin-top: 5px;
}

.__detail i {
    font-size: 21px;
    display: inline-block;
    vertical-align: middle;
}

.__detail i:nth-child(3) {
    margin-left: 15px;
}

.__detail span {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 2px;
}
</style>
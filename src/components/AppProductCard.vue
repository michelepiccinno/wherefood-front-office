<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "AppRestaurantCard",
    props: ['restaurantId'],
    data() {
        return {
            store,
        }
    },
    mounted() {
        this.findProducts()
    },
    methods: {
        findProducts() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantId}/products`)
                .then(risultato => {
                    this.store.productsArray = risultato.data.results;
                    console.log(risultato);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addToCart(product) {
            this.store.cartItems.push({ ...product, quantity: 1 });
            localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
        },
    }
}
</script>

<template>
    <div class="d-flex align-items-center flex-wrap">
        <div v-for=" product in this.store.productsArray" :key="product.id">
            <div class="__area text-center">
                <a href="#" class="__card">
                    <button class="__favorit"><i class="fa-regular fa-heart"></i></button>
                    <img :src=product.image class="img-fluid __img" />
                    <div class="__card_detail text-left">
                        <h4>{{ product.name }}</h4>
                        <p>
                            {{ product.ingredients }}
                        </p>
                        <p>
                            {{ product.description }}
                        </p>
                        <p>
                            Prezzo: {{ product.price }}€
                        </p>
                        <div class="__detail d-flex flex-column">
                            <button type="button" class="btn btn-primary" @click="addToCart(product)">Aggiungi al
                                carrello</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 80%;
    margin: auto;
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
<script>
import { store } from "../store.js" //state management

export default {
    name: "AppRestaurantCard",
    props: {
        restaurant: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getFullImagePath(imagePath) {
            return 'http://127.0.0.1:8000/storage/' + imagePath;
        },
        showMenu(restaurantId) {

            this.$router.push({ name: 'products', params: { restaurantId } })
        },
        findProducts() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurant.id}/products`)
                .then(risultato => {
                    this.store.productsArray = risultato.data.results;
                    console.log(risultato);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>

<template>
    <div class="__area text-center">
        <a href="#" class="__card">
            <!-- <button class="__favorit"><i class="fa-regular fa-heart"></i></button> -->
            <div class="img-wrap">
                <img :src="getFullImagePath(restaurant.image)" class="img-fluid __img" />

            </div>
            <div class="__card_detail text-left">
                <h4>{{ restaurant.name }}</h4>
                <p>
                    {{ restaurant.address }}
                </p>
                <span>
                    P.IVA: {{ restaurant.PIVA }}
                </span>
                <div class="__type">
                    <span v-for="(category, index) in restaurant.categories" :key="index" href="">{{
                        category.name }}</span>
                </div>
                <div class="__detail">
                    <button class="btn btn-primary" @click="showMenu(restaurant.id)">Menu</button>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped lang="scss">
img {
    height: 100%;
    width: 100%;
}

.img-wrap {
    width: 350px;
    height: 200px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
}

.wrapper {
    width: 80%;
    margin: auto;
}

.__area {
    margin: 2rem;
    color: #6f6f6f;


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
    background-color: #000000;
    border-radius: 8px;
    color: #a2ff64;
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
    background-color: #000000a7;
    color: #ffffff;
    text-decoration: none;
}

.__card_detail {
    box-shadow: 0 4px 15px rgba(175, 77, 0, 0.13);
    padding: 13px;
    border-radius: 8px;
    margin: -30px 10px 0;
    position: relative;
    z-index: 2;
    background-color: #000000;
}

.__card_detail h4 {
    color: #c6c6c6;
    line-height: 100%;
    font-weight: bold;
    font-size: 18px;
}

.__card_detail p {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 0.4rem;
}

.__type span {
    background-color: #5a5a5a72;
    padding: 5px 10px 7px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    color: #a8ff62;
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

.btn {
    background-color: #000000;
    border-color: #a2ff64;
    margin-top: 0.25rem;
}
</style>
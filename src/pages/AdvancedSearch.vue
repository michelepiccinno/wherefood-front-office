<script>
import axios from 'axios'; //importo Axios
import { store } from "../store.js"
import AppRestaurantCard from '../components/AppRestaurantCard.vue';
import AppCat from "../components/AppCat.vue";

export default {
    name: "AdvancedSearch",
    props: {
        restaurant: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            store
        };
    },
    components: {
        AppRestaurantCard,
        AppCat
    },
    methods: {
        filterRestaurant() {
            console.log("entrato");
            //Recupera i ristoranti filtrati per categoria
            let filteredRestaurantUrl = this.store.apiUrl + this.store.apiRestaurants + this.store.apiCategories + this.store.selectedCategories;

            axios.get(filteredRestaurantUrl).then(risultato => {
                this.store.restaurantsArray = risultato.data.results;

                console.log(risultato);
            }).catch(errore => {
                console.error(errore);
            });
        }
    }
}
</script>
<template>
    <section>
        <AppCat :filterRestaurant="filterRestaurant" />
    </section>
    <div class="wrapper d-flex align-items-center flex-wrap">
        <AppRestaurantCard v-for="(restaurant, index) in this.store.restaurantsArray" :restaurant="restaurant">
        </AppRestaurantCard>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 80%;
    margin: auto;
}
</style>
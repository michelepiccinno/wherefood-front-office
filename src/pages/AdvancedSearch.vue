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
            const restaurantsArray = [];

            for (let i = 0; i < this.store.selectedCategories.length; i++) {
                const element = this.store.selectedCategories[i];
                const filteredRestaurantUrl = this.store.apiUrl + this.store.apiRestaurants + this.store.apiCategories + element;

                axios.get(filteredRestaurantUrl)
                    .then(response => {

                        restaurantsArray.push(...response.data.results);

                        if (i === this.store.selectedCategories.length - 1) {
                            this.store.restaurantsArray = restaurantsArray;
                            console.log("Risultati combinati:", this.store.restaurantsArray);
                        }
                    })
                    .catch(error => {
                        console.error("Errore durante la richiesta per l'ID", element, ":", error);
                    });
            }
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
<script>
import { store } from "../store.js"
import AppRestaurantCard from '../components/AppRestaurantCard.vue';

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
        AppRestaurantCard
    },
    setup() {
        return {

        };
    },
}
</script>
<template>
    <section>
        <h2 class="text-center">RISULTATI PER</h2>
        <div class="d-flex justify-content-around">

            <div class="cat-wrapper">
                CATEGORIE
            </div>
            <div class="wrapper d-flex align-items-center flex-wrap justify-content-between">

                <AppRestaurantCard v-for="(restaurant, index) in this.store.restaurantsArray" :key="index"
                    :restaurant="restaurant">
                </AppRestaurantCard>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
section {
    background-image: url(search-bg.jpg);
    background-size: cover;
    padding: 0 5rem 3rem;

}

.wrapper {
    height: 100%;
    width: 60%;
    border-radius: 10px;
    overflow-y: auto;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.800);
    overflow-y: auto;
}



.cat-wrapper {
    height: 400px;
    width: 30%;
    background-color: rgba(0, 0, 0, 0.800);
    border-radius: 10px;
}
</style>
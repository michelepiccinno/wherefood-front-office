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
        AppRestaurantCard // Assicurati di registrare il componente della carta
    },
    setup() {
        return {

        };
    },
}
</script>
<template>
    <div class="wrapper d-flex align-items-center flex-wrap">
        <AppRestaurantCard v-for="(restaurant, index) in this.store.restaurantsArray" :key="index" :restaurant="restaurant">
        </AppRestaurantCard>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 80%;
    margin: auto;
}
</style>
<script>
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
    mounted() {
    },
    components: {
        AppRestaurantCard,
        AppCat
    },
    setup() {
        return {

        };
    },
}
</script>
<template>
    <section>
        <AppCat />
    </section>
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
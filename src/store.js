import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api/",
    apiRestaurants: "restaurants/",
    apiCategories: "categories/",
    apiOrders: "orders/",
    restaurantsArray: [],
    filteredRestaurants: [],
    categoriesArray: [],
    selectedCategories: [],
    productsArray: [],
    cartItems: [],

});
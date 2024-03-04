<script>

import axios from 'axios'; //importo Axios
import { store } from "../store.js"

export default {
    name: "AppCat",
    data() {



        return {

            store
        }
    }, methods: {
        addCategory(category) {
            this.store.selectedCategories.push(category);
            this.$router.push({ name: 'search' })
            this.filteredRestaurant;
        },

        filteredRestaurant() {
            this.store.selectedCategories.forEach(selectedCategory => {
                let restaurantsUrl = this.store.apiUrl + this.store.apiRestaurants + this.store.apiCategories + selectedCategory;
                axios.get(restaurantsUrl).then(risultato => {
                    this.store.restaurantsArray += risultato.data.results;

                    console.log(risultato);
                }).catch(errore => {
                    console.error(errore);
                });

            })
        }
    },

    mounted() {
        this.$nextTick(() => {
            const scrollContainer = document.querySelector(".wrapper");

            if (scrollContainer) {
                scrollContainer.addEventListener("wheel", (evt) => {
                    evt.preventDefault();
                    scrollContainer.scrollLeft += evt.deltaY * 3;
                }, { passive: false });
            } else {
                console.error("Element with class 'wrapper' not found");
            }
        });
    }
}
</script>

<template>
    <div class="template">
        <div class="bg-cat">
            <div class="up-wrapper">

                <h3>Categories</h3>
            </div>

            <div class="wrapper  justify-space-between align-items-center">
                <div v-for="(category, index) in this.store.categoriesArray" :key="index"
                    class="cat-wrap d-flex flex-column align-items-center">
                    <button @click=addCategory(category.id)>

                        <div class="img-wrap">

                        </div>
                        <div class="title-wrap">
                            <div class="cat-name">
                                <p>{{ category.name }}</p>

                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.template {
    color: black;
}

.section-title {
    margin: auto;
    width: 100%;
    text-align: center;

}

.bg-cat {
    width: 100%;

    //background-image: url(menus.webp);
    background-image: url(black-tile.jpg);

    background-size: cover;
    background-position: center;




    h3 {
        text-align: center;
        margin: 0;
        font-family: "Playfair Display", serif;
        font-weight: 800;
        font-size: 35px;
        font-style: italic;

    }
}

.up-wrapper {
    background-color: rgba(0, 0, 0, 0.500);
    margin: 0;
}

.wrapper {
    background-color: rgba(0, 0, 0, 0.500);
    margin: 0 auto;
    min-height: 25vh;
    display: flex;
    scroll-behavior: smooth;
    overflow-x: hidden;
    padding: 0 1rem;
    position: relative;


}

.img-wrap {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);

}

.cat-wrap {
    margin: 0 1rem;
}

.title-wrap {
    background-color: rgb(59, 59, 59);
    font-family: "Playfair Display", serif;
    font-style: italic;
    color: rgb(255, 255, 255);
    position: absolute;
    font-size: 14px;

    vertical-align: middle;
    text-align: center;

    bottom: 25px;


    .cat-name {
        margin: 0 13px;
        margin-bottom: 0 !important;
    }
}
</style>
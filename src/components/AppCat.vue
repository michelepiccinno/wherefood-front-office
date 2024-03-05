<script>

import axios from 'axios'; //importo Axios
import { store } from "../store.js"

export default {
    name: "AppCat",
    props: {
        filterRestaurant: {
            type: Function,
            required: true
        },
    },
    data() {
        return {

            store
        }
    }, methods: {
        addCategory(category) {
            this.store.selectedCategories.push(category);
            console.log("ciao")
            this.filterRestaurant();
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

                <!-- <h3>Categories</h3> -->
            </div>

            <div class="wrapper  justify-space-between align-items-center horizontal-scrollbar">
                <div v-for="(category, index) in this.store.categoriesArray" :key="index" href=""
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
    position: relative;
}

.section-title {
    margin: auto;
    width: 100%;
    text-align: center;

}

.bg-cat {
    width: 100%;

    //background-image: url(menus.webp);
    background-image: url(menus.jpg);
    background-size: contain;







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
    background-color: rgba(0, 0, 0, 0.429);
    margin: 0;
}

.wrapper {
    background-color: rgba(0, 0, 0, 0);
    margin: 0 auto;
    min-height: 40vh;
    display: flex;
    scroll-behavior: smooth;
    // overflow-x: hidden;
    padding: 0 1rem;
    position: relative;



}

.img-wrap {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);

}

.cat-wrap {
    margin: 0 1rem;
}

.title-wrap {
    background-color: #911710;
    font-family: "Playfair Display", serif;
    font-style: italic;
    color: rgb(255, 255, 255);
    position: absolute;
    font-size: 14px;
    font-weight: 800;
    vertical-align: middle;
    text-align: center;

    bottom: 25px;


    .cat-name {
        margin: 0 13px;
        margin-bottom: 0 !important;

        border-radius: 10px !important;
    }
}





.horizontal-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 14px;

    background-color: #000000;
    border: 2px solid #000000;



}

.horizontal-scrollbar::-webkit-scrollbar-thumb:horizontal {
    background: #26FF56;
    border-top: 0.5px solid #000000;
    border-bottom: 0.5px solid #000000;
    border-radius: 5px;
    width: 100px;


}

.horizontal-scrollbar {


    overflow: auto;
    height: 120px;

}
</style>
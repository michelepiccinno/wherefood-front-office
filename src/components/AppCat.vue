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

    }
}
</script>

<template>
    <div class="template">
        <div class="bg-cat">
            <div class="up-wrapper">

                <h3>Categorie</h3>
            </div>

            <div class="wrapper d-flex justify-space-between align-items-center">
                <div class="cat-wrap d-flex flex-column align-items-center">
                    <div class="img-wrap">

                    </div>
                    <div class="title-wrap">
                        <p>categoria</p>
                    </div>
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

    background-image: url(menus.webp);
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
    background-color: rgba(49, 39, 4, 0.829);
    margin: 0;
}

.wrapper {
    background-color: rgba(49, 39, 4, 0.829);
    margin: 0 auto;
    height: 20vh;
}

.img-wrap {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: aqua;
}
</style>
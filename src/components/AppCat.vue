<script>
import axios from 'axios';
import { store } from "../store.js";

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
    },
    methods: {
        getFullImagePath(imagePath) {
            return 'http://127.0.0.1:8000/storage/' + imagePath;
        },
        toggleCategory(categoryId) {
            const index = this.store.selectedCategories.indexOf(categoryId);
            if (index !== -1) {
                this.store.selectedCategories.splice(index, 1); // Rimuovi categoria se presente
            } else {
                this.store.selectedCategories.push(categoryId); // Aggiungi categoria se assente
            }
            this.filterRestaurant();
        },
        isCategorySelected(categoryId) {
            return this.store.selectedCategories.includes(categoryId);
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div class="template">
        <div class="bg-cat">
            <div class="up-wrapper">
            </div>
            <div class="wrapper  justify-space-between align-items-center horizontal-scrollbar">
                <div v-for="(category, index) in store.categoriesArray" :key="index" href=""
                    class="cat-wrap d-flex flex-column align-items-center">
                    <button @click="toggleCategory(category.id)" :class="{ active: isCategorySelected(category.id) }">
                        <div class="img-wrap">
                            <img :src="getFullImagePath(category.image)" />
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

button {
    background: none;
    border: none;
}

.section-title {
    margin: auto;
    width: 100%;
    text-align: center;

}

.bg-cat {
    width: 100%;

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
    min-height: 30vh;
    display: flex;
    scroll-behavior: smooth;

    padding: 0 1rem;
    position: relative;



}

.img-wrap {
    height: 150px;
    width: 150px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

}

.cat-wrap {
    margin: 0 1rem;
}

.title-wrap {
    background-color: #911710;
    font-family: "Playfair Display", serif;
    font-style: italic;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 800;
    vertical-align: middle;
    text-align: center;
    border-radius: 8px;
    bottom: 25px;


    .cat-name {
        margin: 0 13px;
        margin-bottom: 0 !important;

        border-radius: 10px !important;
    }
}





.horizontal-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 5px;

    background-color: #000000;
    border: 2px solid #000000;



}

.horizontal-scrollbar::-webkit-scrollbar-thumb:horizontal {
    background: #26FF56;
    border-top: 0.5px solid #000000;
    border-bottom: 0.5px solid #000000;
    border-radius: 5px;



}

.horizontal-scrollbar {

    width: 70%;
    overflow: auto;
    height: 120px;

}

button {
    background: none;
    border: none;
}

@media screen and (max-width: 768px) {
    .img-wrap {
        height: 80px;
        width: 80px;
    }

    .wrapper {
        max-height: 100px !important;
        padding: 0 !important;

    }

    .horizontal-scrollbar {
        height: 100px;
        width: 90%;

    }

    .title-wrap {
        bottom: 10px;
        border-radius: 10px;
        font-size: 12px;
        padding: 0.15rem;
        margin-bottom: 0.5;
        height: 25px;

        p {
            margin: 0 !important;
        }
    }

    .horizontal-scrollbar::-webkit-scrollbar {

        height: 3px !important;
        padding-top: 0.5rem;
        background-color: #496E91 !important;
        border: 1px solid #496E91 !important;



    }

    .horizontal-scrollbar::-webkit-scrollbar-thumb:horizontal {
        border-top: 0.5px solid #00000000;
        border-bottom: 0.5px solid #00000000;
        border-radius: 5px;
        width: 100px;
        background: #26FF56;


    }

    .cat-wrap {
        margin-bottom: 0.7rem;
    }

    .bg-cat {
        background-size: cover;
    }


    @media screen and (max-width : 1200px) {

        .up-wrapper {
            background-color: rgba(0, 0, 0, 0.429);
            margin: 0;
        }

        .wrapper {
            background-color: rgba(0, 0, 0, 0);
            margin: 0 auto;
            height: 30vh !important;
            display: flex;
            scroll-behavior: smooth;
            // overflow-x: hidden;
            padding: 0 1rem;
            position: relative;



        }

        .img-wrap {

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
            border-radius: 8px;
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
            border-top: 0.5px solid #000000;
            border-bottom: 0.5px solid #000000;
            border-radius: 5px;
            width: 100px;

            background: #26FF56;

        }

        .horizontal-scrollbar {


            overflow: auto;


        }

        button {
            background: none;
            border: none;
        }



    }
}
</style>
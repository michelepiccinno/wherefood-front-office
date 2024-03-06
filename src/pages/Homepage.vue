<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import AppCat from "../components/AppCat.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/general.scss';

// import Swiper core and required modules
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import AppRestaurantCard from "../components/AppRestaurantCard.vue";

export default {
    name: "Homepage",
    props: {
        restaurant: {
            type: Object,
            required: false
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        AppCat,
        AppRestaurantCard
    },
    data() {
        return {
            store,
            searchRestaurant: '',
        }
    },

    methods: {
        filterRestaurants() {
            console.log("Filtraggio dei ristoranti");
            const filteredRestaurants = this.store.restaurantsArray.filter(restaurant => {
                // primo filtro per stringa di ricerca
                const matchesSearch = this.searchRestaurant === '' || restaurant.name.toLowerCase().includes(this.searchRestaurant.toLowerCase());
                // verifica se il ristorante ha tutte le categorie selezionate
                const matchesCategories = this.store.selectedCategories.length === 0 || this.store.selectedCategories.every(selectedCategory =>
                    restaurant.categories.some(category => category.id === selectedCategory)
                );
                return matchesSearch && matchesCategories;
            });
            this.store.filteredRestaurants = filteredRestaurants;
            console.log("Ristoranti filtrati:", this.store.filteredRestaurants);
        }
    },

    watch: {
        searchRestaurant(newValue, oldValue) {
            this.filterRestaurants(); // Chiamata alla funzione di filtro quando cambia la ricerca
        },
        'store.selectedCategories': function (newVal, oldVal) {
            this.filterRestaurants(); // Chiamata alla funzione di filtro quando cambiano le categorie selezionate
        }
    },

    setup() {
        return {
            modules: [Autoplay, Navigation],
        };
    },
    computed: {
        restaurantsToShow: function () {
            return this.store.filteredRestaurants.length > 0 ? this.store.filteredRestaurants : '';
        }
    },
}

</script>

<template>
    <section class="jumbo-section">
        <div class="middle-cont">
            <img src="Where.png" alt="">
            <p class="playfair-display"> &ldquo;I piatti dei ristoranti che ami e la spesa, a domicilio&rdquo;
            </p>
        </div>
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: false,
        }" :navigation="false" :modules="modules" class="mySwiper">
            <swiper-slide class="opacity burger-bg"></swiper-slide>
            <swiper-slide class="opacity pizza-bg"></swiper-slide>
            <swiper-slide class="opacity jap-bg"></swiper-slide>
        </swiper>

    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="1"
            d="M0,288L21.8,245.3C43.6,203,87,117,131,117.3C174.5,117,218,203,262,245.3C305.5,288,349,288,393,245.3C436.4,203,480,117,524,122.7C567.3,128,611,224,655,240C698.2,256,742,192,785,181.3C829.1,171,873,213,916,234.7C960,256,1004,256,1047,240C1090.9,224,1135,192,1178,165.3C1221.8,139,1265,117,1309,138.7C1352.7,160,1396,224,1418,256L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
        </path>
    </svg>
    <section>
        <h1 class="text-center">Seleziona una categoria</h1>
        <AppCat :filterRestaurant="filterRestaurants" />
        <div class="search__container d-flex justify-content-center mb-3">
            <input v-model="searchRestaurant" class="search__input bg-secondary-subtle" type="text"
                placeholder="Filtra per nome ristorante">
        </div>
    </section>
    <section>
        <h1 class="text-center">Ristoranti</h1>
        <div class="wrapper d-flex align-items-center justify-content-center flex-wrap">
            <template v-if="restaurantsToShow.length > 0">
                <AppRestaurantCard v-for="(restaurant, index) in restaurantsToShow" :restaurant="restaurant">
                </AppRestaurantCard>
            </template>

            <template v-else>
                <p>Nessun ristorante disponibile per i criteri di ricerca richiesti</p>
            </template>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    position: relative;

    //background: rgb(0, 0, 0);
    //background: linear-gradient(90deg, rgba(0, 0, 0, 0.8436624649859944) 40%, rgba(255, 30, 30, 0) 82%);

    .middle-cont {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;

        img {
            display: block;
            width: 350px;
            position: relative;
        }

        p {
            padding: 1rem 2rem;
            line-height: 50px;
            font-family: "Playfair Display", serif;
            font-style: italic;
            font-size: 50px;

        }

    }
}

.search_input{
    border: 2px solid #26ff56;
}

.opacity {
    opacity: 0.3;
}


.mySwiper {
    height: calc(100vh - 80px);
    position: relative;

}

.burger-bg {

    background-image: url(cee452e7a99c5571c6ce793f80090c29.jpg);
    background-size: cover;
    background-position: bottom;

}

.pizza-bg {
    background-image: url(AdobeStock_636302609-1.webp);


    background-size: cover;
    background-position: bottom;

}

.jap-bg {
    background-image: url(wallpaper-japanese-food-photography-sushi.jpg);
    background-size: cover;
    background-position: center;

}

@media screen and (max-width: 768px) {
    .jumbo-section {
        width: 100% !important;
        height: 150px !important;

        background-image: url(cee452e7a99c5571c6ce793f80090c29.jpg) !important;
        background-size: cover;
        background-position: bottom;
        background-color: black;



    }

    .swiper {
        display: none;
    }

    .middle-cont {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.29);

        p {
            display: none !important;
        }

        img {
            text-align: center !important;
            width: 130px !important;

            margin-left: 45px;
        }
    }
}

@media screen and (max-width : 1200px) {
    .mySwiper {
        height: 400px !important;
    }

    .middle-cont {


        p {
            font-size: 30px !important;
            line-height: 30px !important;
            padding: 0 !important;
        }


    }
}
</style>
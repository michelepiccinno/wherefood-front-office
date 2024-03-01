<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/general.scss';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



export default {
    name: "AppJumbo",
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store,


        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};

</script>

<template>
    <section>
        <div class="middle-cont">
            <img src="Where.png" alt="">
            <p class="playfair-display"> &ldquo;I piatti dei ristoranti che ami e la spesa, a domicilio&rdquo;
            </p>
        </div>

        <swiper :navigation="true" :modules="modules" class="mySwiper">

            <swiper-slide class="opacity burger-bg"></swiper-slide>
            <swiper-slide class="opacity pizza-bg"></swiper-slide>
            <swiper-slide class="opacity jap-bg"></swiper-slide>

        </swiper>
    </section>
</template>

<style scoped lang="scss">
section {


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



.opacity {
    opacity: 0.3;
}


.mySwiper {
    height: calc(100vh - 80px);
    position: relative;




    .burger-bg {

        // background-image: url(cee452e7a99c5571c6ce793f80090c29.jpg);
        background-image: url(best-twink-4k-blowjob-compilation-video.jpg);
        background-size: cover;
        background-position: bottom;

    }

    .pizza-bg {
        //background-image: url(AdobeStock_636302609-1.webp);
        background-image: url(gaybun.jpg);

        background-size: cover;
        background-position: bottom;

    }

    .jap-bg {
        background-image: url(wallpaper-japanese-food-photography-sushi.jpg);
        background-size: cover;
        background-position: center;

    }


}
</style>
<script>
import axios from 'axios'; //importo Axios
import { store } from "../store.js"

export default {
    name: "AppFooter",
    data() {
        return {

            store
        }
    }, methods: {

    }
}

</script>

<template>
    <div class="footer-h">
        <div class="d-flex justify-content-between wrapper">
            <div class="f-wrapper">
                <ul>
                    <li class="title">Scopri Wherefood</li>
                    <li>Investitori</li>
                    <li>Chi siamo</li>
                    <li>Ristoranti</li>
                    <li>Altro</li>
                    <li>Programmazione</li>
                    <li>Design</li>
                    <li>Lavora con noi</li>
                    <li>Diventa nostro partner</li>
                </ul>
            </div>
            <div class="f-wrapper">
                <ul>
                    <li class="title">Note legali</li>
                    <li>Termini & condizioni</li>
                    <li>Informativa sulla privacy</li>
                    <li>Cookies</li>
                    <li>Richieste da parte delle Autorità Pubbliche</li>

                </ul>
            </div>
            <div class="f-wrapper">
                <ul>
                    <li class="title">Aiuto</li>
                    <li>Contatti</li>
                    <li>FAQ</li>
                    <li>Tipi di cucina</li>

                </ul>
            </div>
            <div class="f-wrapper">
                <p class="title">Porta Wherefood con te</p>
                <img src="appStore.svg.png" alt="">
                <img src="google-play-badge.png" alt="">

            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.footer-h {
    width: 100%;
    height: 50vh;
    background-image: url(footer-background.jpg);



}

ul li {
    list-style: none;
    color: rgb(118, 118, 118);
    font-size: 14px;
    padding: 0;
}

.wrapper {
    padding: 1rem 5rem;
    margin: 0 auto;
}

.f-wrapper {
    height: 250px;
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    margin: 1rem;
    background-color: rgba(0, 0, 0, 0.393);
    padding: 1rem;
    border-radius: 15px;

}

img {
    width: 50%;
    margin-top: 1rem;
}

.title {
    font-size: 20px;
    font-weight: 800;
    color: #53fc5b;
    margin-bottom: 1rem;
}

p {
    font-size: 20px;
    font-weight: 800;
}
</style>
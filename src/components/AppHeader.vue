<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="nav d-flex justify-content-between align-items-center">
        <div>
            <img src="WHEREFOOD.png" alt="">
        </div>
        <div>

            <div class="search__container d-flex">


                <input class="search__input" type="text" placeholder="Cerca per nome" @keyup.enter="">

            </div>





        </div>
        <div>
            <button><i class="fa-regular fa-user"><span></span></i></button>
            <button><i class="fa-solid fa-right-to-bracket"><span></span></i></button>
            <button><i class="fa-solid fa-cart-shopping"><span></span></i></button>

        </div>




    </div>
</template>

<style scoped lang="scss">
.nav {
    height: 80px;
    width: 100%;
    padding: 0 5%;
    background-color: #00000000;

    button {
        border-style: none;
        border: none;
        background: none;



    }

    i {
        color: #575756;
        font-size: 15px;
        padding: 0.5rem;


    }

    i:hover {
        color: #53fc5b;
    }

    span {

        line-height: 25px;
        font-size: 8px;
        padding: 0.5rem;
        color: white;


    }


}

img {
    height: 50px;
}

.searchBar {
    background-color: rgba(75, 252, 113, 0);
    border-color: #ffffff;
    opacity: 0.5;
    border-radius: 10px;
    min-width: 500px;
    height: 40px;


}

.searchBar:hover {
    opacity: 1;
}

.searchBtn {
    i {

        font-size: 20px !important;
    }
}






::placeholder {
    color: #646464;
    opacity: 0.5;
    text-align: center;
    font-size: 14px;
}



.search {




    &__input {
        width: 100%;
        padding: 12px 24px;


        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;

        color: #575756;
        background-color: transparent;
        background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);


        border-radius: 50px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;

        &::placeholder {
            color: color(#575756 a(0.8));
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        &:hover,
        &:focus {

            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #53fc5b;
            border-radius: 0;
            background-position: 100% center;
        }
    }
}

.search-btn {
    padding-left: 1rem;

    color: #646464;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;

    .search-btn:hover {
        color: #53fc5b !important;
        border-bottom: 1px solid #53fc5b !important;
    }
}

.offcanvas-body {
    background-color: #000000;
}

.offcanvas-header {
    background-color: #000000;
}

.round-img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #53fc5b;
}
</style>
<script>
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      isCartOpen: false,
      store
    }
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(product) {
      if (this.isInCart(product)) {
        this.updateCart(product, product.quantity);
      } else {
        this.store.cartItems.push(product);
      }

      localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
    },
    removeFromCart(index) {
      if (this.store.cartItems[index].quantity <= 1) {
        this.store.cartItems.splice(index, 1);
      } else {
        this.store.cartItems[index].quantity--;
      }

      localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
    },
    updateCart(product, quantity) {
      const index = this.store.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.store.cartItems[index].quantity += quantity;
      }
    },
    isInCart(product) {
      return this.store.cartItems.some(item => item.id === product.id);
    },
    incrementQuantity(index) {
      this.store.cartItems[index].quantity++;
      localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
    },
    decrementQuantity(index) {
      if (this.store.cartItems[index].quantity > 1) {
        this.store.cartItems[index].quantity--;
        localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
      }
    },
  },
  computed: {
    totalCartItems() {
      return this.store.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
  }
}
</script>

<template>
  <div class="nav d-flex justify-content-between align-items-center">
    <router-link :to="{ name: 'home' }">
      <img src="WHEREFOOD.png" alt="">
    </router-link>
    <div>
      <div class="search__container">
        <input class="search__input" type="text" placeholder="Cerca">
      </div>
    </div>
    <div>
      <button class="header-btn"><i class="fa-regular fa-user"><span>Account</span></i></button>
      <button class="header-btn"><i class="fa-solid fa-right-to-bracket"><span>Log in</span></i></button>
      <button class="header-btn" @click="toggleCart">
        <i class="fa-solid fa-cart-shopping"><span>Carrello</span></i>
        <span class="StyleCount" v-if="store.cartItems.length > 0">({{ totalCartItems }})</span>
      </button>
      <div class="offcanvas offcanvas-end custom-offcanvas" style="width: 500px;" :class="{ 'show': isCartOpen }"
        id="cartOffcanvas" tabindex="-1">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Il tuo carrello</h5>
          <button @click="toggleCart" type="button" class="btn-close" data-bs-dismiss="offcanvas"
            aria-label="Close">X</button>
        </div>
        <div class="offcanvas-body">
          <ul v-if="store.cartItems.length > 0">
            <li class="listyle" v-for="(item, index) in store.cartItems" :key="index">
              {{ item.name }} - {{ item.price }} € x {{ item.quantity }}
              <button class="increase-button" @click="incrementQuantity(index)">+</button>
              <button class="decrease-button" @click="decrementQuantity(index)">-</button>
            </li>
          </ul>
          <p v-else>Il carrello è vuoto</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.remove-button {
  background-color: transparent;
  color: #333;
  border: 2px solid #333;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button:hover {
  background-color: #333;
  color: #fff;
}

.nav {
  height: 80px;
  width: 100%;
  padding: 0 5%;
  background-color: #000000;




  i {
    color: #575756;
    font-size: 15px;
    padding: 0.5rem;


  }

  i:hover {
    color: #53fc5b;
    transition: all 0.3s ease-in-out;
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

    border-bottom: 1px solid #53fc5b !important;
  }
}


.offcanvas-body {
  background-color: #575756;
  opacity: 0.5;
  color: white;
}

.offcanvas-header {
  background-color: #575756;
  color: white;

  .offcanvas-title {
    color: white;

  }

  .btn-close {
    color: white;
  }
}

.round-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #53fc5b;
}

.header-btn {
  border-radius: 10px;
  border-style: none;
  background: #64646421;
  margin: 0 0.25rem;
  color: color(#575756 a(0.8));
  width: 165px;


  span {
    padding-left: 0.5rem
  }
}

.header-btn:hover {
  background: none;
  transition: all 0.5s ease-in-out;
  border: 1px solid #646464;

  span {
    color: #646464;
  }
}

@media screen and (max-width: 768px) {
  .nav {
    height: 50px !important;

    img {
      height: 20px !important;
    }

    span {
      display: none !important;
    }
  }
}

@media screen and (max-width : 1200px) {
  .nav {
    height: 60px;

    img {
      height: 50px;
    }

    span {
      display: none;
    }
  }
}
</style>
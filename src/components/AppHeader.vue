<script>
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      isCartOpen: false,
      store
    };
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(product) {
      const cartProduct = this.store.cartItems.find(item => item.id === product.id);
      if (cartProduct) {
        // Se il prodotto è già nel carrello, rimuovilo
        this.removeFromCart(cartProduct.id);
      } else {
        // Altrimenti, aggiungi il prodotto al carrello
        product.quantity = 1;
        this.store.cartItems.push(product);
        product.isAdded = true;
      }

      localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
    },
    removeFromCart(productId) {
      const index = this.store.cartItems.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.store.cartItems.splice(index, 1);
        const product = this.store.products.find(product => product.id === productId);
        if (product) {
          product.isAdded = false;
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
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
    emptyCart() {
      if (this.store.cartItems.length > 1) {
        this.store.cartItems = [];
        localStorage.clear();
      }
    },
  },
  computed: {
    totalCartItems() {
      return this.store.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalOrderPrice() {
      return (index) => (this.store.cartItems[index].price * this.store.cartItems[index].quantity).toFixed(2);
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
      <button class="header-btn"><i class="fa-regular fa-user"></i></button>
      <span class="head-w">Account</span>
      <button class="header-btn"><i class="fa-solid fa-right-to-bracket"></i></button>
      <span class="head-w">Log in</span>
      <button class="header-btn cart-btn" @click="toggleCart">
        <i class="fa-solid fa-cart-shopping"></i>
        
      </button>
      <span class="head-w">Carrello</span>
      <span class="cart-icon" v-show="store.cartItems.length > 0">
          <p class="StyleCount">{{ totalCartItems }}</p>

        </span>
      
      <div class="offcanvas offcanvas-end custom-offcanvas" style="width: 600px;" :class="{ 'show': isCartOpen }"
        id="cartOffcanvas" tabindex="-1">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Il Tuo Carrello</h5>
          <button @click="toggleCart" type="button" class="btn-close" data-bs-dismiss="offcanvas"
            aria-label="Close">X</button>
        </div>
        <div class="offcanvas-body">
          <div class="row">
            <div class="col-12 d-flex">
              <div class="EmptyCart text-center" v-if="store.cartItems.length === 0">Il carrello è vuoto</div>
              <div v-else>
                <div class="d-flex">
                  <div class="ProdottoStyle">
                    Prodotto
                  </div>
                  <div class="PrezzoStyle">
                    Prezzo
                  </div>
                  <div class="QuantitaStyle">
                    Quantità
                  </div>
                </div>
                <ul class="" v-if="store.cartItems.length > 0">
                  <li class="d-flex align-items-center" v-for="(item, index) in store.cartItems" :key="index">
                    <div class="d-flex align-items-center liststyle">
                      <div class="NameStyle">
                        {{ item.name }}
                      </div>
                      <div class="PriceStyle">
                        {{ totalOrderPrice(index) }}€
                      </div>
                    </div>
                    <div>
                      <div class="ButtonContainer">
                        <div class="QuantityStyle ">
                          {{ item.quantity }}
                        </div>
                        <button class="increase-button m-2" @click="incrementQuantity(index)">+</button>
                        <button class="decrease-button m-2" @click="decrementQuantity(index)">-</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="EmptyCart text-center" v-if="store.cartItems.length === 0">Il carrello è vuoto</div>
                <div class="div d-flex justify-content-center">
                  <router-link :to="{ name: 'checkout' }">
                    <button class="ProdottoStyle" @click="">CHECKOUT</button>
                  </router-link>
                  <button class="ProdottoStyle" @click="emptyCart()">SVUOTA CARRELLO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<style scoped lang="scss">
.cart-icon {
  display: inline-block !important;
  top: 18px;
  right: 45px !important;
  width: 20px;
  height: 20px;
  background-color: rgb(217, 0, 0);
  color: white;
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  margin-left: 3px;

  p {
    font-size: 12px;
    margin: 0 !important;
    line-height: 10px;
    font-weight: 800;

  }
}
.head-w{
  color: #333;
}
.header-btn:hover + .head-w {
  color: #53fc5b;
  transition: all 0.5s ease-in-out;
}


.ProdottoStyle {
  margin: 0px 5px 10px 20px;
  padding: 8px 10px;
  color: #41b60b;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px
}

.totalpriceStyle {
  margin: 0px 5px 10px 20px;
  padding: 8px 10px;
  color: #41b60b;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px
}

.PrezzoStyle {
  margin: 0px 20px 10px 22px;
  padding: 8px 10px;
  color: #41b60b;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px
}

.QuantitaStyle {
  margin: 0px 20px 10px 25px;
  padding: 8px 10px;
  color: #41b60b;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px
}

.PrezzoTotaleStyle {
  margin: 0px 10px 10px 25px;
  padding: 8px 10px;
  color: #41b60b;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px
}

.QuantityStyle {

  color: #41b60b;
  border: 2px solid #333;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 41px;
  margin-left: 17px;
  margin-right: 35px;

}

.EmptyCart {
  font-weight: bold;
  font-size: 30px;
}

.priceStyle {
  margin-left: 30px;
}

.liststyle {
  width: 250px;
}

.NameStyle {
  width: 120px;
}

.ButtonContainer {
  display: flex;
  width: 200px;
  align-items: center;
}

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
  height: 41px;
}

.decrease-button {
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
  height: 41px;
}

.increase-button {
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
  height: 41px;
}

.decrease-button:hover,
.increase-button:hover {
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
  i:hover > span{
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

    border-bottom: 1px solid #53fc5b !important;
  }
}


.offcanvas-body {
  background-color: #000000;

  color: white;
}

.offcanvas-header {
  background-color: #000000;
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
  .cart-icon {
    display: inline-block !important;
    top: 5px;
    right: 23px !important;
    width: 15px;
    height: 15px;
    background-color: rgb(217, 0, 0);
    color: white;
    border-radius: 50%;
    padding: 5px;
    text-align: center;

    p {
      font-size: 8px;
      margin: 0 !important;
      line-height: 7px;
      font-weight: 600;

    }
  }

  .nav {
    height: 50px !important;

    img {
      height: 20px !important;
    }

    .head-w {
      display: none !important;
    }
  }
}

@media screen and (min-width : 1200px) {
  .cart-icon {
    display: inline-block !important;
    top: 5px;
    right: 57px !important;
    width: 15px;
    height: 15px;
    background-color: rgb(217, 0, 0);
    color: white;
    border-radius: 50%;
    padding: 5px;
    text-align: center;

    p {
      font-size: 10px;
      margin: 0 !important;
      line-height: 5px;

    }
  }

  .nav {
    height: 60px;

    img {
      height: 50px;
    }

    span {
      display: inline-block;
    }
  }
}
</style>
<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
  name: "AppCheckout",
  data() {
    return {
      store,
      orderData: {
        customer_name: '',
        customer_surname: '',
        customer_address: '',
        customer_number: '',
        total_order: '100',
        state_payment: 1,
      },
    }
  },
  methods: {
    async submitOrder() {
      try {
        const response = await axios.post(this.store.apiUrl + this.store.apiOrders, this.orderData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <form @submit.prevent="submitOrder" method="POST">

          <div class="mb-3">
            <label for="customer_name" class="form-label">Nome</label>
            <input v-model="orderData.customer_name" type="text" class="form-control" id="customer_name">
          </div>

          <div class="mb-3">
            <label for="customer_surname" class="form-label">Cognome</label>
            <input v-model="orderData.customer_surname" type="text" class="form-control" id="customer_surname">
          </div>

          <div class="mb-3">
            <label for="customer_address" class="form-label">Indirizzo del cliente</label>
            <input v-model="orderData.customer_address" type="text" class="form-control" id="customer_address">
          </div>

          <div class="mb-3">
            <label for="customer_number" class="form-label">Telefono del cliente</label>
            <input v-model="orderData.customer_number" type="text" class="form-control" id="customer_number">
          </div>

          <div class="mb-3">
            <label for="credit_card" class="form-label">CARTA DI CREDITO</label>
            <input type="text" class="form-control" id="customer_number">
          </div>

          <button type="submit" class="btn btn-primary">
            INVIA
          </button>

          <div class="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">ORDINE INVIATO</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">chiudi</button>
                  <!--   <button type="button" class="btn btn-primary">Invia</button> -->
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

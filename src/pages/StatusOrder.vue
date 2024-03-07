<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "StatusOrder",
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {
    },
}
</script>

<template>
    <h1>Ordine completato correttamente</h1>
    <router-link :to="{ name: 'home' }">
        <button @click="emptyCart()" type="submit" class="btn btn-primary">
            Torna alla homepage
        </button>

    </router-link>
</template>

<script scoped lang="scss">
</script>
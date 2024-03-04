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
        ciao
    </div>
</template>


<style scoped lang="scss">
.footer-h {
    width: 100%;
    height: 30vh;
    background-color: rgb(77, 77, 77);
}
</style>
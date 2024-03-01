<script>

import AppHeader from "./components/AppHeader.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management




export default {
	components: {

		AppHeader,


	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<header>
		<AppHeader />

	</header>
	<router-view>

	</router-view>
	<footer>

	</footer>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
header {
	background: rgba(0, 0, 0, 0.678);


}


main {
	padding: 1rem;
}
</style>
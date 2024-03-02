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

		//RestaurantsApi to restaurantsArray on store
		let restaurantsUrl = this.store.apiUrl + this.store.apiRestaurants;

		axios.get(restaurantsUrl).then(risultato => {
			this.store.restaurantsArray = risultato.data.results;

			console.log(risultato);
		}).catch(errore => {
			console.error(errore);
		});

		//RestaurantsApi to restaurantsArray on store
		let categoriesUrl = this.store.apiUrl + this.store.apiCategories;

		axios.get(categoriesUrl).then(risultato => {
			this.store.categoriesArray = risultato.data.results;

			console.log(risultato);
		}).catch(errore => {
			console.error(errore);
		});
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
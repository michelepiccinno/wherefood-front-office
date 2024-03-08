import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


// importo bootstrap (js)
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { router } from './router';


/* add icons to the library */


window.vue = {};
window.vue.App = createApp(App)
    .use(router)
    .use(Toast)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');


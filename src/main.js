import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router' //On inclue le router

createApp(App).use(router).mount('#app') //On utilise le routeur et on monte l'app

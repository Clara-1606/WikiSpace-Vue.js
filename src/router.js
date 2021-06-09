import {
    createWebHistory,
    createRouter //on créer le routeur
} from 'vue-router'

//On importe nos pages
import Astronautes from './pages/Astronautes.vue'
import Vaisseaux from './pages/Vaisseaux.vue'
import Evenements from './pages/Evenements.vue'
import AstronauteInfo from './pages/AstronauteInfo.vue'
import VaisseauInfo from './pages/VaisseauInfo.vue'
import EvenementInfo from './pages/EvenementInfo.vue'



const router = createRouter({
    history: createWebHistory(),
    //On défini nos routes (l'ordre est important)
    routes: [
        { path: '/', component: Astronautes},
        { path: '/vaisseaux', component: Vaisseaux,},
        { path: '/evenements', component: Evenements,},
        { path: '/astronautes', component: Astronautes},
        { path: '/vaisseaux/:id', component: VaisseauInfo},
        { path: '/astronautes/:id', component: AstronauteInfo},
        { path: '/evenements/:id', component: EvenementInfo},
    ]
})

export default router //On exporte le routeur
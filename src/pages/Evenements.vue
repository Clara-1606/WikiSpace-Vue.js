<template>
<main class="container-fluid mb-4" >
  <section class="row">
      <div class="col-12 col-md-6 col-lg-3 carte" v-for="evenement in info" :key="evenement.id">
       <!-- S'il n'y a pas d'image on en met une par défaut -->
       <img v-if="evenement.feature_image!=null" :src="evenement.feature_image" alt="">
       <img v-else src="../images/photo.png" alt="">
      <p class="name">{{ evenement.name }}</p>
      <br/>
      <button class="btn btn-info" @click="voirPlus(evenement.id)"> Voir plus</button>
      
      </div>
  </section>

  <!-- S'il n'y a pas de précédent on désactive le bouton -->
   <button v-if="prevUrl==null" class="btn btn-primary" disabled @click="prev"> Prev</button>
   <button v-else class="btn btn-primary" @click="prev"> Prev</button>
 
 <!-- S'il n'y a pas de prochain on désactive le bouton -->
  <button v-if="nextUrl==null" class="btn btn-primary" disabled @click="next"> Next</button>
  <button v-else class="btn btn-primary" @click="next"> Next</button>
</main>
</template>

<script>
import axios from 'axios';//on importe axios pour appeller l'api

export default {
  name: 'App',

//Variables
 data () {
    return {
      info: null,
      nextUrl: null,
      prevUrl : null,
    }
  },

  //Fonction pour appeler l'API
  async mounted () {
    let resultat = await axios.get ('https://spacelaunchnow.me/api/3.3.0/event/?limit=30')
    
    //On récupère les informations de l'api
    this.info = resultat.data.results
    this.prevUrl = resultat.data.previous
    this.nextUrl = resultat.data.next

    //On vérifie que ca ne soit pas nulle, et on remplace http par https pour que l'api fonctionne
    if(this.prevUrl!=null){
    this.prevUrl=this.prevUrl.replace('http','https');
    }
    if(this.nextUrl!=null){
    this.nextUrl=this.nextUrl.replace('http','https');
    }
  },

  methods:{
    //Fonction pour appeller le reste des vaisseaux avec la pagination
  async next() {
    let resultat = await axios.get(this.nextUrl)
    this.info = resultat.data.results
    this.prevUrl = resultat.data.previous
    this.nextUrl = resultat.data.next

    //On vérifie que ca ne soit pas nulle et on remplace http par https pour que l'api fonctionne
    if(this.prevUrl!=null){
    this.prevUrl=this.prevUrl.replace('http','https');
    }
    if(this.nextUrl!=null){
    this.nextUrl=this.nextUrl.replace('http','https');
    }
},

//Fonction revenir sur les vaisseaux précédent avec la pagination
async prev() {
    let resultat = await axios.get(this.prevUrl)
    this.info = resultat.data.results
    this.prevUrl = resultat.data.previous
    this.nextUrl = resultat.data.next

    //On vérifie que ca ne soit pas nulle et on remplace http par https pour que l'api fonctionne
    if(this.prevUrl!=null){
    this.prevUrl=this.prevUrl.replace('http','https');
    }
    if(this.nextUrl!=null){
    this.nextUrl=this.nextUrl.replace('http','https');
    }
},

//Fonction pour voir plus d'information sur un evenement
voirPlus(id){
  this.$router.push({ path:`/evenements/${id}`});//Emmene vers la bonne url pour avoir les informations du bon evenement
}
}
}

</script>

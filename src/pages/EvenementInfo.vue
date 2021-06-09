<template>
<main v-if="info">
<div>
  <br/>
  <!-- S'il n'y a pas d'image on en met une par défaut -->
  <div> <img v-if="info.feature_image !=null" :src="info.feature_image" alt="">
       <img v-else src="../images/photo.png" alt=""> 
   </div>
  <div> <span class="nom">{{info.name}}</span></div>
  <br/>
  <div class="separation"> Date : {{info.date}}</div>
  <div class="separation"> Type : {{info.type.name}}</div>
  <div class="separation"> Lieu : {{info.location}}</div>
  <div class="separation"> Description : {{info.description}}</div>
  <br />

  <button class="btn btn-primary" @click="retour()"> Retour</button>
</div>
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
    }
  },

   //Fonction pour appeler l'API
  async mounted () {
    //On appelle l'api selon l'id en paramètre
    let resultat = await axios.get (`https://spacelaunchnow.me/api/3.3.0/event/${this.$route.params.id}`)
    
    //On récupère les informations de l'api
    this.info = resultat.data
    
  },

  methods:{
retour(){
  this.$router.push({ path:`/evenements/`});//Emmene vers tous les evenements
}
}
}

</script>

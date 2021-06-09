<template>
<!-- On attend bien que les informations soient chargées -->
<main v-if="info"> 
<div>
  <br/>

      <!-- S'il n'y a pas d'image on en met une par défaut -->
  <div> <img v-if="info.spacecraft_config.image_url !=null" :src="info.spacecraft_config.image_url" alt="">
       <img v-else src="../images/photo.png" alt=""> 
   </div>
  <div> <span class="nom">{{info.name}}</span></div>
  <br/>
  <div class="separation"> Agence : {{info.spacecraft_config.agency.name}}</div>
  <div class="separation"> 
    <p>Dimensions :</p> 
    <p> Hauteur : {{info.spacecraft_config.height}}</p>
    <p> Diamètre : {{info.spacecraft_config.diameter}}</p>
    </div>
  <div class="separation"> Utilisation : {{info.spacecraft_config.capability}}</div>
  <div class="separation"> Statut : {{info.flights[0].spacecraft.status.name}}</div>
  
  <!-- On compte combien il y a d'éléments dans fligths pour savir combien il a fait de vols  -->
  <div class="separation"> Vols : {{Object.keys( this.info.flights ).length}}</div>
  <div class="separation"> Nombre de personne à bord : {{info.spacecraft_config.crew_capacity}}</div>
  <div class="separation"> Durée du vol : {{info.spacecraft_config.flight_life}}</div>
  <div class="separation"> Description : {{info.description}}</div>
  <div class="separation"> Nom de mission : {{info.flights[0].launch.mission}}</div>
  <div class="separation"> Type de mission : {{info.flights[0].launch.mission_type}}</div>
  <div class="separation"> Historique : {{info.spacecraft_config.history}}</div>
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
    let resultat = await axios.get (`https://spacelaunchnow.me/api/3.3.0/spacecraft/${this.$route.params.id}`)
    
    //On récupère les informations de l'api
    this.info = resultat.data
    
  },

  methods:{
retour(){
  this.$router.push({ path:`/vaisseaux/`});//Emmene vers la liste des vaisseaux
}
}
}

</script>
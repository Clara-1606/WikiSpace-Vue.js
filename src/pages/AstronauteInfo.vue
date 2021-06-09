<template>
<!-- On attend bien que les informations soient chargées -->
<main v-if="info">
<div>
  <br/>
  <!-- S'il n'y a pas d'image on en met une par défaut -->
  <div> <img v-if="info.profile_image_thumbnail !=null" :src="info.profile_image_thumbnail" alt="">
       <img v-else src="../images/photo.png" alt=""> 
   </div>
  <div> <span class="nom">{{info.name}}</span></div>
  <br/>
  <div class="separation"> Nationalité : {{info.nationality}}</div>
  <div class="separation"> 
    <p v-if="info.agency!=null">Agence : {{info.agency.name}}</p>
    <p v-else>Agence : Agence inconnue</p>
  </div>
  <div class="separation"> Naissance : {{info.date_of_birth}}</div>
  <div class="separation"> 
    <p v-if="info.date_of_death!=null">Décès : {{info.date_of_death}}</p>
    <p v-else>Décès : Est encore en vie</p>
  </div>
  <div class="separation"> Statut : {{info.status.name}}</div>

  <!-- On compte combien il y a d'éléments dans fligths pour savir combien il a fait de vols  -->
  <div class="separation"> Vols : {{Object.keys( this.info.flights ).length}}</div>
  <div class="separation"> Biographie : {{info.bio}}</div>
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
    let resultat = await axios.get (`https://spacelaunchnow.me/api/3.3.0/astronaut/${this.$route.params.id}`)
    //On récupère les informations de l'api
    this.info = resultat.data
  },

  methods:{
retour(){
  this.$router.push({ path:`/astronautes/`});//Emmene vers la liste des astronautes
}
}
}

</script>

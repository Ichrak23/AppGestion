<template>
    <ion-page>  
         <ion-header>
      <ion-item>
        <ion-button fill="clear" href="./CreateDocument">
        <ion-icon class="arrowBackIcon" :icon="arrowBack"  ></ion-icon>
        </ion-button>
      </ion-item>
    </ion-header>
          <ion-content class="ioncontent-bgcolor" >
           
           
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
               <ion-button class="ici" expand="block" fill="outline" href="https://elise6-pfe.elisedemo.com/elise/docs/userguide/fr-fr/GBL-Topics/GBL-AccueilPageWeb.htm">
               <ion-icon id="helpCircleIcon" :icon="helpCircle" ></ion-icon>
               Aide en ligne</ion-button>
              
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
               <ion-button class="ici"  expand="block" fill="outline" href="https://elise6-pfe.elisedemo.com/elise/docs/adminguide/fr-fr/GBL-Topics/GBL-AccueilPageWeb.htm">
               <ion-icon id="helpCircleIcon" :icon="helpCircle" ></ion-icon>
               Guide Administrateur</ion-button>
               
          </ion-content>
    </ion-page>
</template>
<script>
import {
  IonContent,
  IonPage,
  

} from "@ionic/vue";

import {defineComponent } from "@vue/runtime-core";
import{arrowBack,helpCircle}from "ionicons/icons"
export default defineComponent ({ 
  name: "Explorateur",
  components: {
    IonContent,
    IonPage,
    
  },
  setup(){
    return{
       arrowBack,
       helpCircle
     }}});
</script>
<style scoped>
 *{font-family: "Trebuchet MS", sans-serif;
}
ion-header{
  --ion-background-color: #0a6e89;
}
ion-page{
  background-color: #0a6e89;
}
.ici{
  border-color: #0a6e89;
  --color-activated:#CEE5EB;
  --color:black;
  --border-color:#0a6e89;
  --background:white;
  
}
ion-icon{
 
  color:#0a6e89;
 align-items: left;
}
.ioncontent-bgcolor{
  background-color: #0a6e89;
}
ion-content{
 --ion-background-color: #CEE5EB;
}
.arrowBackIcon{
  color:black;
}
.helpCircleIcon{
  margin-right: -15px;
}

</style>




         
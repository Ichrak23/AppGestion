<template>
    <ion-page>
           <ion-header class="header2">
      <ion-item>
        <ion-button fill="clear" href="./CreateDocument">
        <ion-icon :icon="arrowBack"  ></ion-icon>
        </ion-button>
        
        <ion-title p style="color: #e84481"
          >Activités
        </ion-title>
      </ion-item>
    </ion-header>
          <ion-content>
            THIS IS ACTIVITES PAGE
          </ion-content>
    </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  
} from "@ionic/vue";

import {defineComponent } from "@vue/runtime-core";
import{arrowBack}from "ionicons/icons"
export default defineComponent ({ 
  name: "Historique",
  components: {
    IonContent,
    IonPage,
   
  },
  setup(){
    return{
       arrowBack
     }}});
</script>
<style scoped>
.header2 {
  background-color: #0a6e89;
}
</style>













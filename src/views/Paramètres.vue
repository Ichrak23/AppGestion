<template>
    <ion-page>
           <ion-header class="header2">
      <ion-item>
        <ion-button fill="clear" href="./CreateDocument">
        <ion-icon :icon="arrowBack"  ></ion-icon>
        </ion-button>
        <ion-title p style="color: #e84481"
          >
        </ion-title>
      </ion-item>
    </ion-header>
          <ion-content >
            <br>
            <ion-list>
              <ion-item href="https://elise6-pfe.elisedemo.com/GED/Elise/default.aspx">
                <ion-icon :icon="settings">
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Administration générale
                </ion-label>
              </ion-item>
              <ion-item  href="https://elise6-pfe.elisedemo.com/GED/Elise/Home/administration/automatedFlowchartProcessing/waiting">
                <ion-icon :icon="time">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                Suivi des actions automatisées de l'organigrame
                </ion-label>
              </ion-item>
              <ion-item >
                <ion-icon :icon="grid">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                 Administration des tableaux de bord
                </ion-label>
              </ion-item>
              <ion-item >
                <ion-icon :icon="apps">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Administration des espaces de travail
                </ion-label>
              </ion-item>
            
              <ion-item href="https://elise6-pfe.elisedemo.com/GED/Elise/Home/administration/features">
                <ion-icon :icon="gitCompare">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Administration des fonctionnalités
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/GED/Elise/Home/administration/workflow" >
                <ion-icon :icon="analytics">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Administration des processus
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/common/maintenance/manageMaintenance.asp?INSTANCE=GED&DDC=manageMaintenanceElise.xml">
                <ion-icon :icon="hammer">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Maintenance
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/elise/common/dialog/dlgcontactselect.asp?INSTANCE=GED&STAND_ALONE=TRUE" >
                <ion-icon :icon="person">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                 Base de contacts
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/elise/impression/ImprimerCasier.asp?INSTANCE=GED&FORCE_CLASSIC=TRUE">
                <ion-icon :icon="print">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Imprimer les séparateurs
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/elise/GenerateCodeBarToComplet/mailsin.asp?INSTANCE=GED&FORCE_CLASSIC=TRUE&ELISEPRINT=true">
                <ion-icon :icon="barcode">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Gérer des codes-barre 
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/GED/grc/home.aspx">
                <ion-icon :icon="home">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Accueil(s)
                </ion-label>
              </ion-item>
              <ion-item href="https://elise6-pfe.elisedemo.com/elise/default.asp?INSTANCE=GED&PORTAL_ID=portal_distribute.xml&FORCE_CLASSIC=TRUE&LOADING=TRUE&DISTRIBUTEV6=TRUE">
                <ion-icon :icon="archive">
                  
                </ion-icon>&nbsp;&nbsp;
                <ion-label>
                  Distribution
                </ion-label>
              </ion-item>
            </ion-list>
            
          </ion-content>
    </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  
}from "@ionic/vue";
import {defineComponent } from "@vue/runtime-core";
import{apps,analytics,arrowBack,settings,time,grid,filing,gitCompare,hammer,archive,person,print,barcode,home}from "ionicons/icons"
export default defineComponent ({ 
  name: "Paramètres",
  components: {
    IonContent,
    IonPage,
   
  },
  setup(){
    return{
       arrowBack,
       settings,
       time,
       grid,
       filing,
       analytics,
       hammer,
       person,
       print,
       barcode,
       home,
       archive,
       gitCompare,
       apps
}}});
</script>
<style scoped>
.header2 {
  background-color: #0a6e89;
}
ion-label {
  font-family: "Trebuchet MS", sans-serif;

}
ion-icon{
  color: #0a6e89;
}

ion-content{
 color: #CEE5EB;
}
</style>















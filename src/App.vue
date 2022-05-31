<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
     
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <div class="menu-header-bg"></div>
          <div class="header-content">
            <img src="./assets/adminged.jpg" alt="" />
            <ion-label>
              <h2>{{ user.login }}</h2>
              <p>{{ user.mail }}</p>
            </ion-label>
          </div>

          <div class="contenu-bg-color">
            <ion-list class="menu-items" lines="none">
              <ion-menu-toggle
                auto-hide="false"
                v-for="(p, i) in appPages"
                :key="i"
              >
                <ion-item
                  id="item1"
                  @click="selectedIndex = i"
                  router-direction="root"
                  :router-link="p.url"
                  lines="none"
                  detail="false"
                  class="hydrated"
                  :class="{ selected: selectedIndex === i }"
                  class.selected="activeIndex == i"
                >
                  <ion-icon slot="start" :md="p.mdIcon" size="small"></ion-icon>

                  <ion-label class="label">{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </div>

          <ion-footer>
            <br />

            <div class="infostech">
              <ion-label class="ionfootstyle">DONNÉES TECHNIQUE</ion-label>
              <h6>{{ version.buildLabel }}</h6>
              <ion-label class="ionfootstyle">VERSION</ion-label>
              <h6>{{ version.version }}</h6>
            </div>
          </ion-footer>

          <ion-button expand="full" class="buttonexit" strong="true"
            >Se Déconnecter</ion-button
          >
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>
<script>
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import {
  newspaperOutline,
  newspaperSharp,
  golfOutline,
  information,
  libraryOutline,
  librarySharp,
  linkOutline,
  linkSharp,
  hourglass,
  analytics,
  home,
  shuffle,
  eye,
  settings,
  help,
} from "ionicons/icons";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,

    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
  },
  data() {
    return {
      user: "",
      version: "",
    };
  },
  mounted() {
    let local = this;
    var version = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/connection%2Fversion",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(version)
      .then(function (response) {
        local.version = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    var user = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/connection%2Fuser",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(user)
      .then(function (response) {
        local.user = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "Tableau de bord",
        url: "/Tableaudebord",
        mdIcon: home,
      },
      {
        title: "Activités",
        url: "/activites",
        mdIcon: shuffle,
      },
      {
        title: "Explorateur",
        url: "/explorateur",
        mdIcon: eye,
      },
      {
        title: "Paramètres",
        url: "/parametres",
        mdIcon: settings,
      },
      {
        title: "Aide",
        url: "/aide",
        mdIcon: help,
      },
    ];
    const path = window.location.pathname;
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    const route = useRoute();
    return {
      selectedIndex,
      appPages,
      newspaperOutline,
      newspaperSharp,
      golfOutline,
      libraryOutline,
      librarySharp,
      linkOutline,
      linkSharp,
      hourglass,
      information,
      analytics,
      shuffle,
      eye,
      settings,
      help,
      home,
      isSelected: (url) => (url === route.path ? "selected" : ""),
    };
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.label {
  font-family: "Trebuchet MS", sans-serif;
  padding-left: 0px;
}
.menu-header-bg {
  height: 180px;
  width: 350px;
  background-color: #0a6e89;
  background: linear-gradient(90deg, #0a6e89 0%, #0c3849 100%);
  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);
  transform: rotate(-15deg);
  border-radius: 10px 10px 10px 50px;
  margin-left: -18px;
  margin-top: -50px;
  margin-bottom: 60px;
}
.header-content {
  position: absolute;
  top: 30px;
  left: 15px;
  display: flex;
  align-items: center;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 7px solid #fff;
  margin-right: 14px;
}
h2 {
  font-weight: 800;
  color: #fff;
}

p {
  font-size: 12px;
  color: #e4e4e4;
  font-weight: 100;
  letter-spacing: 0.4px;
}
.menu-items {
  margin: 0px;
}
.item1 {
  padding-left: 20px;
  margin-bottom: 10px;
}

ion-icon {
  color: #0d9bc2;
  left: 0px;
}
.active {
  border-left: 5px solid;
  color: #0a6e89;
  padding-left: 10px;
}
.ionfootstyle {
  color: #0e7794;
}
ion-button {
  --color: #ffffff;
  --color-activated: #e84481;
  --background: #0a6e89;
}
.buttonexit {
  position: fixed;
  left: 0;
  bottom: 0px;
  right: 0;
}
.infostech {
  position: relative;
  left: 0px;
  right: 0;
  top: 500px;
}
ion-item.selected {
  border-left: 5px solid;
  color: #0a6e89;
  padding-left: 10px;
}
</style>



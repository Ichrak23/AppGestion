<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>FICHIER</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">llll</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title>{{ link.name }}</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    {{ link.desc }}
                  </ion-card-content>
                </ion-card>  
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardContent,
  alertController,
} from "@ionic/vue";

export default {
  name: "Links",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCard,
    IonCardHeader,
    IonCardContent,
  },
  data() {
    return {
      links: [
        {
          name: "ichrak",
          addr: "http://ak.hypergryph.com/",
          desc: "ichrakk",
        },
        {
          name: "NGA",
          addr: "http://bbs.nga.cn/thread.php?fid=-34587507",
          desc: "pppppppppp",
        },
      ],
    };
  },
  methods: {
    async presentAlert(addr) {
      const alert = await alertController.create({
        header: "ppppppppppp",
        message: "lllllll" + addr + "？",
        buttons: [
          {
            text: "fffff",
            handler: () => {
              window.location.href = addr;
            },
          },
          {
            text: "jjjj",
            handler: () => {},
          },
        ],
      });
      return alert.present();
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>

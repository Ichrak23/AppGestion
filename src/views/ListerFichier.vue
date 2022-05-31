<template>
  <ion-page>
    <ion-header class="headerstyle">
      <ion-toolbar color="black">
        <ion-menu-button slot="start" color="light">
          <ion-icon :icon="list" color="white"></ion-icon>
        </ion-menu-button>
        <ion-button slot="start" size="small" color="light" fill="clear">
          <ion-icon :icon="attach" color="white" size="large"></ion-icon>
        </ion-button>
        <ion-title class="fichiertitle"
          ><p style="color: white">FICHIER</p></ion-title
        >
        <ion-button slot="end" expand="block" fill="clear">
          <div class="fileupload fileupload-new" data-provides="fileupload">
            <div class="input-append">
              <div class="uneditable-input">
                <i class="glyphicon glyphicon-file fileupload-exists"></i>
              </div>
              <span class="btn btn-default btn-file">
                <span class="fileupload-new">
                  <ion-button color="dark" class="addbutton" fill="clear">
                    <img src="../assets/file-add_icon.svg" />&nbsp;
                  </ion-button></span
                >

                <ion-button fill="clear" href="./ListerFichier.vue">
                  <ion-icon
                    :icon="listCircleOutline"
                    size="large"
                    color="light"
                  ></ion-icon>
                </ion-button>
                <br />
              </span>
            </div>
          </div>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button fill="clear" href="./CreateDocument">
        <ion-icon :icon="arrowBack" color="light"></ion-icon>
      </ion-button>

      <br />
      <br />
      <ion-item>
        <ion-icon :icon="attach" size="large" color="light"></ion-icon>
        <ion-label class="lab1"
          >LISTE DES FICHIERS({{ this.attachments.length }})</ion-label
        >
      </ion-item>
      <br />
      <ion-item>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<ion-label class="lab2"
          >VISIBLE PAR TOUS</ion-label
        >
      </ion-item>
      <ion-card>
        <ion-row>
          
            <ion-title
              class="fileNameStyle2"
              v-for="a in this.attachments"
              :key="a.internalId"
            >
              <p>{{ a.label }}&nbsp; &nbsp; v{{ a.version }}</p>
              <p>PDF -Crée par {{ a.creator.label }} le {{ a.creationDate }}</p>
            </ion-title>
          <br />
        </ion-row>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonButton,
  IonMenuButton,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  list,
  listCircleOutline,
  arrowBack,
  chevronForwardOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  trashOutline,
  attach,
  qrCodeOutline,
  star,
  send,
  calendar,
  help,
  person,
  settings,
  search,
  add,
  more,
  analytics,
  hourglass,
  people,
  podium,
  create,
  informationCircleOutline,
  open,
  trendingUp,
  download,
  arrowdropnight,
} from "ionicons/icons";
export default defineComponent({
  name: "CreateDocument",
  components: {
    IonContent,
    IonHeader,
    IonPage,

    IonIcon,
    IonButton,
    IonMenuButton,
  },

  data() {
    return {
      fileName: "",
      i: 0,
      docId: "COURRIERS_308",
      docinfos: "",
      attachments: [],
      fileId: "",
      doc: "",
      path: "",
      componentKey: 0,
      filetypepdf: "",
      afficheViewer: false,
      currentinfo: [],
      COURRIERS_1216: [],
      doc_info: [],
      publicPath: process.env.BASE_URL,
    };
  },
  async mounted() {
    let local = this;
    var document = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/document%2FCOURRIERS_308%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",
      headers: {
        "content-Type": "application/json",
      },
    };

    var r = await axios(document);

    local.document = r.data.data;
    console.log("hne", r.data.data);
    local.attachments = r.data.data.attachments;

    this.attachments = r.data.data.attachments;
    console.log("document", r.data.data.attachments);
    console.log("document2", r.data.data.attachments[0].label);

    var fileId = this.attachments[0].externalId;
    console.log(fileId);

    for (this.i = 0; this.i <= local.attachments.length; this.i++) {
      local.fileNames = r.data.data.attachments[this.i].label;
      console.log("doc3", local.fileNames);
    }
  },

  setup() {
    return {
      attach,
      listofnames: [],
      list,
      arrowBack,
      listCircleOutline,
      ellipsisHorizontal,
      trashOutline,
      ellipsisVertical,
      chevronForwardOutline,
      qrCodeOutline,
      star,
      calendar,
      help,
      person,
      settings,
      search,
      add,
      more,
      informationCircleOutline,
      analytics,
      hourglass,
      send,
      people,
      create,
      podium,
      open,
      trendingUp,
      download,
      arrowdropnight,
    };
  },
  methods: {
    changePath() {
      this.i++;

      if (this.i == this.attachments.length) {
        console.log("terminé", this.listofnames);
        return this.listofnames;
      }

      this.fileName = this.attachments[this.i].label;
      console.log(this.fileName);
      this.listofnames.push(this.fileName);
      console.log(this.listofnames);
      this.filetypepdf = this.attachments[this.i].extension;

      this.afficheViewer = true;
      this.componentKey += 1;
      this.path =
        "https://localhost:7026/api/Auth/getPDF/elise-document%2Ffile%2Fstream%2Fpdf?documentId=" +
        this.docId +
        "&fileId=";

      //    } else {
      //    this.pdf = !this.pdf;
      //   }
    },
    /*selectFile() {
      this.file = this.$refs.file.files[0];
    },*/
    /*onPdf(e){
      var file =e.target.files[0],
      vm=this
      if(file.type == "application/pdf") {
         var fileReader = new FileReader();
         fileReader.onload= function(){pdfData};
           var pdfData = new Uint8Array(this.result);
           
           var loadingTask=this.pdfjsLib.getDocument({data: pdfData});
           loadingTask.promise.then(function(pdf){
             console.log('PDF loaded');

             var pageNumber =1;
             pdf.getPage(pageNumber).then(function(page) {
               console.log('Page loaded');
               var scale =1.5;
               var viewport =page.getViewport ({scale: scale});
               var canvas=vm.$refs.pdfViewer;
               var context=canvas.getContext ('2d');
               canvas.height=viewport.height;
               canvas.width=viewport.width;

               var renderContext = {
                 canvasContext :context,
                 viewport: viewport
               };
               var renderTask = page.render(renderContext);
               renderTask.promise.then(function (){
                 console.log('Page rendered')
               });
             });
           }, function(reason){
             console.error(reason);
           });
               
               fileReader.readAsArrayBuffer(file);
      }
    }*/
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.lab1 {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 25px;
  color: #b6cbd4;
}

.lab2 {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 18px;
  color: #b6cbd4;
}
.lab4 {
  font-family: "Trebuchet MS", sans-serif;
  color: whitesmoke;
}
.lab5 {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 24px;
}
.lab6 {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 12px;
}
.fichiertitle {
  font-size: 17px;
}
ion-content {
  --ion-background-color: #0c3849;
}

.h3 {
  color: white;
  font-weight: bold;
  font-family: "Trebuchet MS", sans-serif;
}
.labtab {
  font-family: "Trebuchet MS", sans-serif;
}
.p {
  font-family: "Trebuchet MS", sans-serif;
  color: white;
}
.buttonedit {
  font-family: "Trebuchet MS", sans-serif;
  color: white;
}
.button1 {
  float: left;
  position: left;
  font-family: "Trebuchet MS", sans-serif;
}
.button2 {
  float: right;
  position: right;
  font-family: "Trebuchet MS", sans-serif;
}
ion-icon {
  color: black;
}
ion-item {
  color: white;
  background-color: #0a6e89;
}

.headerstyle {
  background-color: #0a6e89;
}
.contentpopover {
  background-color: whitesmoke;
}
.makingcenter {
  margin-top: -14%;
}
.popover {
  background-color: whitesmoke;
  color: #e84481;
}
.test {
  margin-left: 0;
}
.btn-file > input {
  width: 100%;
  height: 100%;
  padding: 0px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  opacity: 0;
  font-size: 23px;
  direction: ltr;
  cursor: pointer;
}

.fileupload .btn {
  vertical-align: middle;
  line-height: 21px;
  margin-left: -5px;
}
.btn-file {
  position: relative;
  vertical-align: middle;
}
.btn-default {
  background: #0a6e89;
  color: #ffffff;
}
.popover_setting .popover-content {
  --min-width: 600px !important;
  --min-height: 150px !important;
  --ion-background-color: red;
  --ion-text-color: #ffffff;
  background-color: red;
}
.transparent {
  background-color: red;
}
.popover-content {
  --ion-background-color: #e8f3f6;
}
.toolbar2 {
  color: white;
  background-color: #1b1f2d;
}
.textlabelcolor {
  color: #0a6e89;
}
.addbutton {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}
.list {
  margin-bottom: 1000px;
}
#visualize {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fileNameStyle2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}
.p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #b6cbd4;
  font-size: 16px;
}
.fileNameStyle {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}
</style>


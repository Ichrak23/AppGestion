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
                  <ion-button color="dark" class="addbutton" fill="clear" href="./ajoutfichier">
                    <img src="../assets/file-add_icon.svg" />&nbsp;
                    
                  </ion-button></span
                >
                
                <ion-button fill="clear" href="./listerfichier">
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
      <ion-toolbar color="secondary">
        <ion-title class="fileNameStyle">
          {{ this.fileName }}
        </ion-title>
        <ion-title class="fileNameStyle2">
          {{ this.filetypepdf }}
        </ion-title>
        <ion-button slot="end" fill="clear" @click="changePath()">
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- <ion-toolbar>
        <ion-item>
          <div class="button1">
            <ion-button slot="start" size="small" color="light" fill="clear">
              <ion-icon :icon="attach" color="white" size="large"></ion-icon>
            </ion-button>
          </div>
          <ion-title class="fichiertitle"
            ><p style="color: white">FICHIER</p></ion-title
          >
        </ion-item>
      </ion-toolbar> -->
      <div id="visualize">
        <WebViewer
          :key="componentKey"
          v-if="afficheViewer"
          :path="`${publicPath}lib`"
          :url="this.path"
        />
      </div>
    </ion-content>
    <!-- <ion-tabs >
      <IonRouterOutlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="schedule" href="./informationss">
          <img src="../assets/info.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >informations</ion-label
          >
        </ion-tab-button>
        <ion-tab-button tab="speakers" href="./Processus">
          <img src="../assets/icons8-processus-20.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >Processus</ion-label
          >
        </ion-tab-button>
        <ion-tab-button tab="speakers">
          <img src="../assets/icons8-historique-20.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >Historique</ion-label
          >
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
 -->
  </ion-page>
</template>
<script>
import WebViewer from "./WebViewer.vue";
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
  chevronForwardOutline,
  ellipsisHorizontal,
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
    WebViewer,
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
      modificationDate:""

      // url: "https://localhost:7026/api/Auth/getPDF/elise-document%2Ffile%2Fstream%2Fpdf%3FdocumentId%3DCOURRIERS_320%26fileId%3DWBCTDOC_342%26fileFormat%3D0",
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
    /* var r=axios(document)
      .then(function (response) {
        local.document = response.data.data;
        local.attachments = response.data.data.attachments;
        console.log("document", response.data.data.attachments);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    var r = await axios(document);

    local.document = r.data.data;
    console.log('document safi', r.data.data)
    local.attachments = r.data.data.attachments;
    this.attachments = r.data.data.attachments;
    this.modificationDate=r.data.data.modificationDate;
    console.log("modificationDate", this.modificationDate);
    var fileId = this.attachments[0].externalId;
    console.log(fileId);

  },
  // import pdfjsLib from "pdfjs-dist/build/pdf";
  //import { PDFViewer } from "pdfjs-dist/web/pdf_viewer";
  //import "pdfjs-dist/web/pdf_viewer.css";
  //const pdfjs = require("pdfjs-dist");
  //pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");
  /*const pdfjsLib = require('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc =
    require('https://mozilla.github.io/pdf.js/build/pdf.worker.js');*/

  /* var file=this.selectFile();
    console.log(this.selectFile());*/
  /*
    var myHeaders1 = new Headers();
    myHeaders1.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders1.append(
      "Cookie",
      "InstanceCI=GED=VoFuk_6ODeEG7N1H1kLtGAUhqmPbKLGutY60UKGk; InstanceLG=; InstanceST=GED=0040ut3VknTIX7DEZ1ZxWKRolLybql1Vlo_UwZYfx9Co47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=; InstanceUL=GED=AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAgyqN0TWvn0SZ2zNYzJJiQwQAAAACAAAAAAAQZgAAAAEAACAAAAADDaWsJqdr2DiqqeQ+LQP0k9ka0pIDkp+6NQGVvnqmBgAAAAAOgAAAAAIAACAAAACbexEY0oPV4sJOVRnWI1K1JRHWfwWwd+96LxL+CaWGwRAAAAAH1l17ffZ+CEWyuxrr+QjEQAAAANc4DEFg2sZjWcG7rQ+LgmDkajCqspzEY/CnjalraTFzDC+TYbRgCtUI4U1lJ5R5ESixPIRwmurYZbuP3Ej4fI0=; P%5FLANGUAGE=GED=fr; S_ARCHIMED_CRYSTAL_AUTH=GED=a08b8384f9e349dfb9fdeb6b67bcc4ab; S_ARCHIMED_CRYSTAL_AUTHANONYMOUS=GED="
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", "AdminGED");
    urlencoded.append("password", "PxU67lNdpOcGJ10cvTPI");

    var requestOptions1 = {
      method: "POST",
      headers: myHeaders1,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://elise6-pfe.elisedemo.com/GED/elise/logon.svc/logon",
      requestOptions1
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Cookie",
          "InstanceCI=GED=VoFuk_6ODeEG7N1H1kLtGAUhqmPbKLGutY60UKGk; InstanceLG=; InstanceST=GED=0040ut3VknTIX7DEZ1ZxWKRolLybql1Vlo_UwZYfx9Co47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=; InstanceUL=GED=AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAgyqN0TWvn0SZ2zNYzJJiQwQAAAACAAAAAAAQZgAAAAEAACAAAACS0adNZLAnexQvtox8IZILnRJ5/aASVPLRlddU3XPgCwAAAAAOgAAAAAIAACAAAADZ4BrHfSNO2LUSVNugtVyGHsfhfRV/VullOG7cfkP3fhAAAAArKe3xwAJiRpOZh+TMYCdaQAAAAJ9ohnTxAdm1Lf8ZTGsaAE2kFqSi7HQskpt/+lsGFnOjxnisuBZp1xMyidD3XJ9dJaR89D4dpFkIkAaGI7esY4c=; P%5FLANGUAGE=GED=fr; S_ARCHIMED_CRYSTAL_AUTH=GED=a08b8384f9e349dfb9fdeb6b67bcc4ab; S_ARCHIMED_CRYSTAL_AUTHANONYMOUS=GED="
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://elise6-pfe.elisedemo.com/GED/elise/api/elise-dashboard/get/personal",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
      */

  setup() {
    return {
      attach,
      list,
      listCircleOutline,
      ellipsisHorizontal,
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
    async onChange(event) {
      console.log(event.target.files);
      var formdata = new FormData();
      formdata.append("file", event.target.files[0]);
    //"2022-05-28T14:16:55+02:00"
         var test1= 
{modificationDate:this.modificationDate,
duration:120000}

var request1={
method:"POST",
headers: new Headers({ "content-type": "application/json" }),
body: JSON.stringify(test1),
}

 fetch(
"https://localhost:7026/api/Auth/post/document%2Flock%2FCOURRIERS_380",
request1
).then (response => response.text())

 
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      }

      fetch(
        "https://localhost:7026/api/Auth/postPdf/attachment",
        requestOptions
      )
        .then((response) => response.text())
        .then(async (result) => {
          console.log(JSON.parse(result).data[0]);
          /**
           * {

"documentId":"COURRIERS_308",
"documentModificationDate":"2022-05-26T15:07:48.36+02:00",
"addAttachmentsProperties":
[{"guid":"dbba7d88-6aa6-49df-87df-ab9c1fb80056","label":"adminged.jpg"}]
}

           */
          var test = {
            documentId: "COURRIERS_308",
            documentModificationDate: this.modificationDate,
            addAttachmentsProperties: [
              {
                guid: JSON.parse(result).data[0].guid,
                label: JSON.parse(result).data[0].fileName,
              },
            ],
          };
          var request2 = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(test),
            
          };
          var res = await fetch(
            "https://localhost:7026/api/Auth/post/document%2Fattachments%3FworkspaceId%3Dd2b1ef43-77a0-497f-928d-28a5b35d8c49",
            request2
          );
          console.log(res.body);
        })
        .catch((error) => console.log("error", error));
    },
    
    changePath() {
      this.i++;
      if (this.i == this.attachments.length) {
        this.i = 0;
      }
      console.log("changepath", this.attachments[this.i].externalId);
      var fId = this.attachments[this.i].externalId;
      var extension = this.attachments[this.i].extension;
      if (extension === ".pdf") {
        console.log("filename", this.attachments[this.i].label);
        this.fileName = this.attachments[this.i].label;
        this.filetypepdf = "PDF v1.0";
        this.afficheViewer = true;
        this.componentKey += 1;
        this.path =
          "https://localhost:7026/api/Auth/getPDF/elise-document%2Ffile%2Fstream%2Fpdf?documentId=" +
          this.docId +
          "&fileId=" +
          fId;
      }
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
ion-label {
  font-family: "Trebuchet MS", sans-serif;
}
.lab1 {
  color: #0c8ab6;
  font-family: "Trebuchet MS", sans-serif;
}
.lab2 {
  font-family: "Trebuchet MS", sans-serif;
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
  font-size: 10px;
}
.fileNameStyle {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}
</style>


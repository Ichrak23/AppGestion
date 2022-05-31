<template>
  <ion-page>
    <ion-content>
      <ion-card text-center padding style="height: 150px; width: 150px">
        <div
          style="
            border-style: dashed;
            height: 120px;
            color: green;
          "
        >
          <span class="spn-doc"> Document interne </span>

          <ion-grid class="ion-no-padding">
            <ion-row class="ion-align-items-center ion-justify-content-center">
              <ion-icon class="doc" name="documents-outline"></ion-icon>

              <ion-input
                type="file"
                id="file"
                accept="application/pdf,application/vnd.ms-excel"
                class="fileinput"
                @change="onChange"
                multiple
                title="Déposez vos fichiers ou cliquez ici"
              ></ion-input>
              <!-- <p class="dep">Déposez vos fichiers ou cliquez ici</p> -->
            </ion-row>
          </ion-grid>
        </div>
        <div class="bt-l">
          <ion-row style="justify-content: center">
            <ion-icon
              :icon="add"
              style="color: white; font-size: 17px"
            ></ion-icon>

            <ion-label style="color: white; font-size: 15px">
              Document seul</ion-label
            >
          </ion-row>
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { IonContent, IonPage, IonInput } from "@ionic/vue";
import { documentOutline, add } from "ionicons/icons";
//import { axios } from "axios";
export default defineComponent({
  name: "AjoutDoc",
  components: {
    IonContent,
    IonPage,
    IonInput,
  },
  data() {
    return {
      newdoc: "",
    };
  },
  setup() {
    return {
      documentOutline,
      add,
    };
  },
  methods: {
    async onChange(event) {
      console.log(event.target.files);
      var formdata = new FormData();
      formdata.append("file", event.target.files[0]);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://localhost:7026/api/Auth/postPdf/attachment",
        requestOptions
      )
        .then((response) => response.text())
        .then(async (result) => {
          console.log(JSON.parse(result).data[0]);
          var test = {
            documentType: "COURRIERS_TYPE_3",
            direction: 2,
            attachments: [
              {
                guid: JSON.parse(result).data[0].guid,
                label: JSON.parse(result).data[0].fileName,
              },
            ],
            addPreProcessTask: true,
            inChargeUid: "d71ac14b1b2cd144b712102c0f4a6e59",
            requesterUid: "d71ac14b1b2cd144b712102c0f4a6e59",
          };
          var request2 = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(test),
          };
          var res = await fetch(
            "https://localhost:7026/api/Auth/post/elise-document%2Fcreate-from-workflow",
            request2
          );
          console.log(res.body);
        })
        .catch((error) => console.log("error", error));
    },
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.spn-doc {
  color: black;

  padding-left: 10px;

  border-bottom: ridge;
}
.doc {
  position: absolute;

  top: 30px;

  opacity: 0.6;

  font-size: 50px;
}
.dep {
  text-align: center;

  margin-top: 60px;

  opacity: 0.4;

  font-size: 12px;
  color: black;
}
.bt-l {
  padding: 5px;
  margin-left: 0px;
  width: 150px;
  height: 30px;
  margin-top: 0px;
  background-color: green;
}
</style>


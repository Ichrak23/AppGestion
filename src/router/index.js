import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "",
    redirect: "/tab",
  },
  {
    path: "/test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/tab",
    redirect: "/createdocument",
    component: () => import("../views/Tabs.vue"),
    children: [
      {
        path: "/createdocument",
        component: () => import("../views/CreateDocument.vue"),
      },
      {
        path: "/informations",
        component: () => import("../views/informations.vue"),
      },
      {
        path: "/Processus",
        component: () => import("../views/Processus.vue"),
      },
      {
        path: "/historique",
        component: () => import("../views/Historique.vue"),
      },
    ],
  },
  {
    path: "/links",
    component: () => import("../views/Links.vue"),
  },
  {
    path: "/createdocument",
    component: () => import("../views/CreateDocument.vue"),
  },
  {
    path: "/activites",
    component: () => import("../views/Activitiés.vue"),
  },
  {
    path: "/aide",
    component: () => import("../views/Aide.vue"),
  },
  {
    path: "/explorateur",
    component: () => import("../views/Explorateur.vue"),
  },
  {
    path: "/parametres",
    component: () => import("../views/Paramètres.vue"),
  },
  {
    path: "/tableaudebord",
    component: () => import("../views/Tableaudebord.vue"),
  },

  {
    path: "/pdfviewer",
    component: () => import("../views/pdfViewer.vue"),
  },
  {
    path: "/webviewer",
    component: () => import("../views/WebViewer.vue"),
  },
  {
    path: "/processussendbutton",
    component: () => import("../views/processussendbutton.vue"),
  },
  {
    path: "/processuscheckbutton",
    component: () => import("../views/processuscheckbutton.vue"),
  },
  {
    path: "/ajoutdoc",
    component: () => import("../views/AjoutDoc.vue"),
  },
  {
    path: "/listerfichier",
    component: () => import("../views/ListerFichier.vue"),
  },
  {
    path: "/ajoutfichier",
    component: () => import("../views/AjoutFichier.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Presentation from "./views/presentation";
import InGame from "./views/inGame";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: Presentation
    },
    {
      path: "/ingame",
      component: InGame
    }
  ]
});

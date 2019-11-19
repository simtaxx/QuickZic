import Vue from "vue";
import Router from "vue-router";
import Presentation from "./views/Presentation";
import Game from "./views/Game";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: Presentation
    },
    {
      name: 'game',
      path: '/game',
      component: Game
    }
  ]
});

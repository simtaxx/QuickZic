<template>
  <div class="container">
    <div class="has-text-centered notification has-background-info">
      <h2 class="has-text-white is-size-4">Bienvenue dans QuickZic!</h2>
      <p class="content has-text-white is-size-5">
        QuickZik est un blind test musical où vous allez devoir trouver le plus de nom de musique avant
        la fin du temps imparti en écoutant des extraits de musiques!
      </p>
    </div>
    <div class="has-text-centered">
      <router-link to="/inGame">
        <button class="has-background-info has-text-white">Jouer</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentation",
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
}
</style>
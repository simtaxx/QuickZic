<template>
  <div id="app">
    <header>
      <img src="./assets/images/logo.svg" alt="logo">
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "assets/styles/reset.scss";
  @import "assets/styles/app.scss";
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

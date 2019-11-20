<template>
  <div id="app">
    <header>
      <div>
        <h1>QuickZic</h1>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "assets/styles/reset.scss";
  @import "assets/styles/app.scss";
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html {
    height: 100vh;
    background-image: linear-gradient(to right bottom, #b823b4, #4f73f3, #009cfc, #00b7df, #00c9b7);
  }

  header {
    height: 70px;
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10px;
    background-color: white;
    border: 4px solid white;
    border-radius: 40px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.557);

    h1 {
      font-size: 2.5rem;
      background: linear-gradient(#b823b4, #4f73f3);
      background-clip: text;
      color: transparent;
      font-family: 'Roboto', sans-serif;
      font-weight: bolder;
    }
  }
</style>

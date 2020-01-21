<template>
  <div>
    <div class="introduction-text">
      <h2 class="title">Bienvenue dans QuickZic!</h2>
      <p class="subtitle">Choisissez votre thème</p>
    </div>
    <div class="buttons">
      <Button v-for="(song, index) in songs" :key="index" :theme="song.name" :url="song.url" :cover="song.cover"></Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Songs from '../assets/songs/songs.json'
export default {
  name: 'Presentation',
  data() {
    return {
      songs: Songs
    } 
  },
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
  .introduction-text {
    text-align: center;
    width: 100%;
  }

  .title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 24px;
    font-weight: lighter;
    color: rgba(255, 249, 249, 0.39);
  }
  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 250px;
  }
</style>

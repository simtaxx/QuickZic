<template>
  <div>
    <div class="infos">
      <h2>Bienvenue dans QuickZic!</h2>
      <p>Sélectionne un thème pour commencer</p>
    </div>
    <div class="buttons">
      <Button v-for="(song, index) in songs" :key="index" :theme="song.name" :url="song.url"></Button>
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
  .infos {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: white;
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.4rem;
    h2 {
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
  .buttons {
    text-align: center;
    margin-top: 60px;
  }
</style>

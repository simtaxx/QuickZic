<template>
  <div class="container">
    <div class="has-text-centered notification has-background-info">
      <h2 class="has-text-white is-size-3">Bienvenue dans QuickZic!</h2>
      <p class="has-text-white is-size-4">Sélectionne un thème pour commencer</p>
    </div>
    <div class="has-text-centered">
      <Button v-for="(song, index) in songs" :key="index" :theme="song.name" :url="song.url"></Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: 'Presentation',
  data() {
    return {
      songs: [
        {
          name: 'six',
          url: 'http://localhost:8080/album/80108302'
        },
        {
          name: 'pnl',
          url: 'http://localhost:8080/album/14038232'
        }
      ]
    } 
  },
  components: {
    Button
  }
}
</script>

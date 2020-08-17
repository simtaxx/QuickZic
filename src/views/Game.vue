<template>
  <div class="game" v-if="musicData.picture">
    <div class="game__container">
      <img class="game__img" :src="musicData.tracks.data[indexMusic].album.cover_xl" :alt="musicData.tracks.data[indexMusic].album.cover_big">
      <div class="game__hud-1">
        <div class="game__hud__timer">
          <h2>Temps Restant</h2>
          <h2>{{ time }}</h2>
        </div>
        <div class="game__hud__scores">
          <h2>Score</h2>
          <h2>{{ userScore }}</h2>
          <h2>Meilleur Score</h2>
          <h2>{{ bestScore }}</h2>
        </div>
        <button class="game__hud--button" v-if="!startState" @click="start">Commencer</button>
        <input class="game__hud--input" v-if="startState && time > 0" v-model="userResponse" @keyup.enter="checkAnwser(userResponse)" type="text" autofocus>
        <button class="game__hud--button" v-if="time <= 0" @click="reset">Rejouer</button>
        <audio class="game__media-player" autoplay :src="currentSong" ref="mediaAudio"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { axiosCall } from "../mixins/axiosCall";

export default {
  name: 'Game',
  data() {
    return {
      musicData: {},
      indexMusic: 0,
      userScore: 0,
      bestScore: 0,
      time: 80,
      startState: false,
      userResponse: '',
      url: ''
    };
  },
  mixins: [axiosCall],
  async mounted() {
    if (localStorage.getItem("bestScore")) { 
      this.bestScore = parseInt(localStorage.getItem("bestScore")) 
    }
    this.url = this.$route.params.url
    await this.axiosGet(this.url);
    this.musicData = this.axiosResponse.data
    this.randomize(this.musicData.tracks.data)
  },
  methods: {
    start() {
      this.startState = true
      if(this.time > 0) {
        setTimeout(() => {
          this.setTimer()
        }, 1000);
      }
    },
    nextMusic() {
      return this.indexMusic ++
    },
    randomize(songs) {
      for (let song = 0; song < songs.length; song++) {
        let random = Math.floor(Math.random() * (song + 1))
        let change = songs[song]
        songs[song] = songs[random]
        songs[random] = change
      }
    },
    checkAnwser(e) {
      if (e === this.musicData.tracks.data[this.indexMusic].title.toLowerCase()) {
        this.userScore ++
        this.userResponse = ""
        this.nextMusic()
      } else {
        this.userResponse = ""
        this.nextMusic()
      }
    },
    setTimer() {
      this.time --
      if(this.time === 0){
        this.gameOver()
      } else {
        setTimeout(this.setTimer, 1000);
      }
    },
    gameOver() {
      this.$refs.mediaAudio.pause()
      this.indexMusic = 0
      this.randomize(this.musicData.tracks.data)
      if (this.userScore > this.bestScore) {
        localStorage.setItem("bestScore", this.userScore)
        this.bestScore = parseInt(localStorage.getItem("bestScore"))
      }
    },
    reset() {
      this.userScore = 0
      this.time = 80
      this.setTimer()
      this.startState = true
    }
  },
  computed: {
    currentSong() {
      if(this.time <= 0) {
        stop()
      } else if (this.startState) {
        this.musicData.preview = this.musicData.tracks.data[this.indexMusic].preview
        return this.musicData.preview
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .game {
    &__img {
      float: left;
      height: 100vh;
      max-width: 40%;
    }

    &__hud-1 {
    position: absolute;
    top: 200px;
    left: 70%;
    transform: translateX(-70%);
    text-align: center;
    }
  }
</style>

<template>
  <div v-if="musicData.picture" class="container">
    <div class="columns">
      <div class="column is-two-fifths">
        <figure>
          <h2 class="is-size-2">{{ musicData.title }}</h2>
          <img :src="musicData.picture_big" :alt="musicData.title">
        </figure>
      </div>
      <div class="informations column is-two-fifths">
        <div class="has-text-centered">
          <h2 class="is-size-2">Temps Restant</h2>
          <h2 class="is-size-2">{{ time }}</h2>
        </div>
        <button v-if="!startState" class="button" @click="start">Commencer</button>
        <input v-if="startState && time > 0" class="input" v-model="userResponse" @keyup.enter="checkAnwser(userResponse)" type="text" autofocus>
        <button v-if="time <= 0" class="button" @click="reset">Rejouer</button>
      </div>
      <div class="informations column">
        <div class="has-text-centered">
          <h2 class="is-size-2">Score</h2>
          <h2 class="is-size-2">{{ userScore }}</h2>
          <h2 class="is-size-2">Meilleur Score</h2>
          <h2 class="is-size-2">{{ bestScore }}</h2>
        </div>
        <audio autoplay :src="currentSong" ref="mediaAudio"></audio>
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
    console.log(this.musicData)
    for (let song = 0; song < this.musicData.tracks.data.length; song++) {
      let random = Math.floor(Math.random() * (song + 1))
      let change = this.musicData.tracks.data[song]
      this.musicData.tracks.data[song] = this.musicData.tracks.data[random]
      this.musicData.tracks.data[random] = change
    }
    console.log(this.musicData)
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
  .informations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input {
      margin-bottom: 200px;
    }
  }
  button {
    margin-bottom: 200px;
  }
</style>

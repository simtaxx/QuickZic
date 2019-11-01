<template>
  <div v-if="musicData.cover" class="container">
    <div class="columns">
      <div class="column is-two-fifths">
        <figure>
          <h2 class="is-size-2">{{ musicData.artist.name }}</h2>
          <img :src="musicData.cover_big" alt="">
        </figure>
      </div>
      <div class="informations column is-two-fifths">
        <div class="has-text-centered">
          <h2 class="is-size-2">Temps Restant</h2>
          <h2 class="is-size-2">{{ time }}</h2>
        </div>
        <input v-if="time > 0" class="input" v-model="userResponse" @keyup.enter="checkAnwser(userResponse)" type="text" autofocus>
        <button v-if="time <= 0" class="button" @click="reset">Rejouer</button>
      </div>
      <div class="informations column">
        <div class="has-text-centered">
          <h2 class="is-size-2">Score</h2>
          <h2 class="is-size-2">{{ userScore }}</h2>
        </div>
        <audio autoplay :src="currentSong" ref="mediaAudio"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { axios_call } from "../mixins/axios_call";

export default {
  name: "inGame",
  data() {
    return {
      musicData: {},
      indexMusic: 0,
      userScore: 0,
      time: 60,
      userResponse: "",
    };
  },
  mixins: [axios_call],
  async mounted() {
    await this.axios_get();
    this.musicData = this.axios_response.data
    if(this.time !== 0) {
      this.setTimer()
    }
  },
  methods: {
    nextMusic() {
      return this.indexMusic ++
    },
    checkAnwser(e) {
      if (e === this.musicData.songs[this.indexMusic].title.toLowerCase()) {
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
    },
    reset() {
      this.userScore = 0
      this.time = 4
      this.setTimer()
    }
  },
  computed: {
    currentSong() {
      if(this.time <= 0) {
        stop()
      } else {
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
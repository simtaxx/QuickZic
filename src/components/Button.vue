<template>
  <div class="container">
    <div class="pictures" @click="nextPage(url)">
      <p class="theme">{{ theme }}</p>
      <div class="picture-container"> 
        <img class="picture" :src="cover" alt="cover">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: String,
    url: String,
    cover: String
  },
  methods: {
    nextPage(urlChosen) {
      const url = urlChosen
      this.$router.push({name: 'game', params: { url: url }})
    }
  }
}
</script>
<style lang="scss" scoped>
  .pictures {
    position: relative;
    margin: 30px;
    cursor: pointer;

    .theme {
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background: #222328ba;
      border-radius: 10px;
      font-size: 24px;
      font-weight: bold;
      z-index: 1
    }
    .picture-container {

      .picture {
        width: 250px;
      }
    }
  }
</style>

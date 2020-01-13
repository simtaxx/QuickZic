<template>
  <div class="container">
    <div class="button" @click="nextPage(url)">
      <p>{{ theme }}</p>
      <img :src="cover" alt="cover">
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
  .container {
    display: flex;
    justify-content: space-around;
  }
  .button {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 400px;
    margin: 0 100px;
    font-size: 2rem;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.557);
    cursor: pointer;
    transition: 0.4s;
  }
  .button:hover {
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.557);
    transform: scale(1.02);
    transition: 0.2s;
  }
</style>

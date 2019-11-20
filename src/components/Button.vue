<template>
  <div class="container">
    <input type="button" :value="theme" @click="nextPage(url)">
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: String,
    url: String
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
  input {
    width: 300px;
    height: 60px;
    font-size: 2rem;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.557);
    cursor: pointer;
    transition: 0.4s;
  }
  input:hover {
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.557);
    transform: scale(1.02);
    transition: 0.4s;
  }
</style>
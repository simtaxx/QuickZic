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

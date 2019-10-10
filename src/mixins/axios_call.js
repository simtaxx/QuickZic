export const axios_call = {
  data() {
    return {
      axios_response: {},
      axios_error: {}
    };
  },
  methods: {
    async axios_get() {
      const axios = require("axios");
      this.axios_response = await axios.get("https://api.deezer.com/album/102346522");
      console.log("response", this.axios_response.data)
    }
  }
};

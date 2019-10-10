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
      this.axios_response = await axios.get("http://localhost:8080/album/102346522");
      console.log("response", this.axios_response.data)
    }
  }
};

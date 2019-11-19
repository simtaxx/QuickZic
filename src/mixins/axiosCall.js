import axios from 'axios'
export const axiosCall = {
  data() {
    return {
      axiosResponse: {},
      axiosError: {}
    };
  },
  methods: {
    async axiosGet(url) {
      this.axiosResponse = await axios.get(url);
    }
  }
};

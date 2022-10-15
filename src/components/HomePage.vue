<template>
  <div>
    <h3 v-if="user">Hi, {{ user.firstName }} {{ user.lastName }} welcome!</h3>
    <h3 v-if="!user">Hi, you are not logged in!</h3>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      user: null,
    };
  },
  comouted: {
    ...mapGetters(["user"]),
  },

  async created() {
    const response = await axios.get(
      `results?id=${localStorage.getItem("id")}`
    );

    this.user = response.data[0];
    console.log(response.data[0]);
  },
};
</script>

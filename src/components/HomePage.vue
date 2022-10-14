<template>
  <h3 v-if="user">Hi, {{ user.firstName }} {{ user.lastName }} welcome!</h3>
  <h3 v-if="!user">Hi, you are not logged in!</h3>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get(
      `results?id=${localStorage.getItem("id")}`
    );
    this.user = response.data[0];
    console.log(this.user);
  },
};
</script>

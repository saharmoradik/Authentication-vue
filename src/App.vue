<template>
  <div id="app">
    <NavBar />

    <div class="wraper">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
localStorage.setItem("id", null);
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  async created() {
    const response = await axios.get(
      `results?id=${localStorage.getItem("id")}`
    );
    this.$store.dispatch("user", response.data[0].id);
  },
};
</script>

<style>
.wraper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

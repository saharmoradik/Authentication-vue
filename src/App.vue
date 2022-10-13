<template>
  <div id="app">
    <NavBar />

    <div class="wraper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
//import LoginForm from "./components/LoginForm.vue";
export default {
  name: "App",
  components: {
    NavBar,

    //   LoginForm,
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

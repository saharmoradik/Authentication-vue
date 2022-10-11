<template>
  <div id="app">
    <div><NavBar /></div>

    <div class="wraper">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import LoginForm from "./components/LoginForm.vue";
export default {
  name: "App",
  components: {
    NavBar,
    LoginForm,
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

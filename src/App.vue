<template>
  <div id="app" class="m-auto text-center">
    <div id="nav" class="flex justify-evenly p-10 border-b-2">
      <img
        src="/img/backgrounds/logo_small.png"
        alt="logo"
        class="w-20 main-img"
      />
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
<style>
#app {
  font-family: "Georama", sans-serif;
  width: 90%;
}
@media screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>

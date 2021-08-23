<template>
  <div id="app" class="m-auto text-center">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar,
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

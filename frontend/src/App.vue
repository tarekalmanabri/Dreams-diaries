<template>
  <div id="app" class="m-auto text-center">
    <div id="nav" class="p-8 border-b-2">
      <div class="flex">
        <a href="/">
          <img src="/img/backgrounds/logo_small.png" alt="logo" class="w-20" />
        </a>
        <div class="ml-20">
          <router-link class="nav-link" to="/">Home</router-link>
          |
          <router-link class="nav-link" to="/about">About</router-link>
          |
          <router-link class="bg-button" to="/contect">Conect</router-link>
        </div>
        <div class="ml-auto space-x-4 text-red-400">
          <router-link class="bg-button" to="/login">Sign in</router-link>
          <i class="fab fa-twitter hover:text-gray-700"></i>
          <i class="fab fa-facebook-f hover:text-gray-700"></i>
        </div>
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
.bg-button {
  color: white;
  background-color: #374151;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
.bg-button:hover {
  background-color: #f87171;
}
.nav-link {
  border-radius: 1rem;
  padding: 0.5rem;
}
.nav-link:hover {
  color: #f87171;
}

@media screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>

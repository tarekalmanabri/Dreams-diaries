<template>
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
        <router-link class="bg-button" to="/contect">Connect</router-link>
        <router-link class="nav-link" v-if="authenticated" to="/dashboard"
          >| Dashboard</router-link
        >
      </div>
      <div class="ml-auto space-x-4 text-red-400">
        <router-link class="bg-button" v-if="!authenticated" to="/login"
          >Sign in</router-link
        >
        <a class="bg-button" v-else @click="signOut">Sign out</a>
        <i class="fab fa-twitter hover:text-gray-700"></i>
        <i class="fab fa-facebook-f hover:text-gray-700"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      authenticated: "authenticated",
    }),
  },

  methods: {
    ...mapActions({ storeSignOut: "signOut" }),

    signOut() {
      this.storeSignOut();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
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
</style>

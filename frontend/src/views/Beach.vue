<template>
  <div class="beach">
    <h1>this is beach page</h1>
    <CategoryPage />
  </div>
</template>

<script>
import CategoryPage from "../components/CategoryPage.vue";

export default {
  components: { CategoryPage },
  created() {
    console.log(this.getUsers());
  },
  methods: {
    getUsers() {
      fetch(this.$apiUrl + "/users");
    },
  },
};
</script>

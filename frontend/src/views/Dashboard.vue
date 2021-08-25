<template>
  <div class="mt-4">
    <header class="bg-white shadow">
      <div class="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <router-link
          to="/dreams/create"
          class="
            flex
            ml-auto
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded-full
          "
        >
          + New Dream
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  mounted() {},
};
</script>

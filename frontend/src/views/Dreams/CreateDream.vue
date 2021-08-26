<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        <input
          v-model="postContent"
          type="text"
          class="
            rounded
            border-2 border-gray-600
            w-3/4
            mt-4
            h-52
            m-auto
            max-w-7xl
            p-2
          "
        />
        <button @click.prevent="addPost">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateDream",
  data() {
    return {
      postContent: null,
    };
  },

  methods: {
    addPost() {
      if (this.postContent) {
        this.$store.dispatch("dreams/saveDream", this.postContent);

        this.$router.push("/dreams/overview");
      }
    },
  },
};
</script>

<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="flex flex-col">
        <button
          @click.prevent="addPost"
          class="
            ml-auto
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            p-3
            rounded-full
          "
        >
          Submit
        </button>
        <input
          v-model="postContent"
          type="text"
          class="
            rounded
            border-2 border-gray-600
            w-3/4
            my-4
            h-48
            m-auto
            max-w-7xl
            p-2
          "
        />
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

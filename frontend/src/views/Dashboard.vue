<template>
  <div class="mt-4">
    <header class="bg-white shadow">
      <div class="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          @click="addPost"
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
        </button>
      </div>
    </header>
    <main id="main" class="hidden">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <input
              id="post"
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
            <button @click.prevent="handleSubmit">submit</button>
          </div>
          <ul>
            <li
              v-for="(post, index) in posts"
              :key="post + index"
              class="
                rounded
                p-3
                m-1
                bg-gray-100
                transition-colors
                duration-700
                dark:bg-gray-800
                border-green-400
              "
            >
              {{ post }}
            </li>
          </ul>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
// import Post from "../components/Post.vue";
export default {
  data() {
    return {
      posts: [],
    };
  },
  // components: { Post },
  methods: {
    handleSubmit() {
      let input = document.getElementById("post");
      if (input.value !== "") {
        this.posts.push(input.value);
      }
      input.value = "";
    },
    addPost() {
      let main = document.getElementById("main");
      main.classList.remove("hidden");
    },
  },
};
</script>

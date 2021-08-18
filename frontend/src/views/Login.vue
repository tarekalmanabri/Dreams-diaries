<template>
  <div class="login">
    <div class="flex min-h-screen bg-white">
      <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div class="text-left p-0 font-sans">
          <h1 class="text-gray-800 text-3xl font-medium">
            Login to your account
          </h1>
        </div>
        <form @submit.prevent="handleSubmit" class="p-0">
          <div class="mt-5">
            <input
              v-model="email"
              type="text"
              class="w-full p-2 border rounded border-gray-300 focus:ring-1"
              placeholder="Email"
            />
          </div>
          <div class="mt-5">
            <input
              v-model="password"
              type="password"
              class="w-full p-2 border rounded border-gray-300 focus:ring-1"
              placeholder="Password"
            />
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="bg-gray-500 text-white w-full p-3 rounded hover:bg-red-400"
            >
              Login
            </button>
          </div>
        </form>

        <span class="block p-5 text-center text-gray-800 text-xs"
          >Don't have an account?
          <a class="" href="/register" data-test="Link">
            <span class="underline">Signup here</span></a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async handleSubmit() {
      const res = await this.$axios.post("login", {
        email: this.email,
        password: this.password,
      });
      console.log(res);
      this.$router.push("/");
    },
  },
};
</script>

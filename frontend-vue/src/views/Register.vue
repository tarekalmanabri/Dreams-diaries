<template>
  <div class="signup">
    <div class="flex min-h-screen bg-white">
      <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div class="text-left p-0 font-sans">
          <h1 class="text-gray-800 text-3xl font-medium">
            Create an account for free
          </h1>
          <h3 class="p-1 text-gray-700">Free forever. No payment needed.</h3>
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
              v-model="username"
              type="text"
              class="w-full p-2 border rounded border-gray-300 focus:ring-1"
              placeholder="User-name"
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

          <div
            class="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800"
          >
            <input type="checkbox" class="mr-2 border-0" />
            <span>
              By creating an account you are agreeing to our
              <span class="underline">Terms and Conditions</span>
              and
              <span class="underline">Privacy Policy</span>
            </span>
          </div>

          <div class="mt-10">
            <button
              type="submit"
              class="bg-gray-500 text-white w-full p-3 rounded hover:bg-red-400"
            >
              Sign up with email
            </button>
          </div>
        </form>
        <a class="" href="/login">
          <span class="block p-5 text-center text-gray-800 text-xs"
            >Already have an account?</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      username: null,
      password: null,
    };
  },
  methods: {
    async handleSubmit() {
      const res = await this.$axios.post("register", {
        email: this.email,
        username: this.username,
        password: this.password,
      });
      console.log(res);
      this.$router.push("/login");
    },
  },
};
</script>

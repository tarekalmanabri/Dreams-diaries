<template>
  <div class="">
    <div class="border-b-2 rounded my-2 mx-auto p-2 max-w-5xl">
      <div class="flex flex-row mb-4">
        <a :href="company.refs.jobs_page">
          <img :src="company.refs.logo_image" alt="" class="w-20" />
        </a>
        <h1 class="text-2xl ml-5">{{ company.name }}</h1>
        <p class="ml-auto justify-self-end text-xl">
          {{ company.industries[0].name }}
        </p>
      </div>
      <div class="flex flex-row">
        <p class="m-1 self-center">{{ company.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Company",
  props: {
    company: { type: Object },
  },
};
</script>

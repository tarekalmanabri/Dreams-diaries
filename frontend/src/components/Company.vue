<template>
  <div>
    <a :href="company.refs.jobs_page">
      <div class="border-2 rounded m-2 p-2 flex justify-between">
        <img :src="company.refs.logo_image" alt="" class="w-24" />
        <h1 class="ml-5 mr-auto text-2xl self-left">{{ company.name }}</h1>
        <p class="m-1 self-center">{{ company.description }}</p>
        <div class="flex flex-col justify-end">
          <p class="m-1">
            <strong>{{ company.industries[0].name }}</strong>
          </p>
        </div>
      </div>
    </a>
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

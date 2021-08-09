<template>
  <div>
    <a :href="company.refs.jobs_page">
      <div class="bg-gray-500 m-2 p-2 flex justify-evenly">
        <h1>{{ company.name }}</h1>
        <p>{{ company.description }}</p>
        <p class="p-2">
          <strong>{{ company.industries[0].name }}</strong>
        </p>
        <img :src="company.refs.logo_image" alt="" class="w-28" />
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

<template>
  <div class="" @load="getHotelsInfo()">
    <div>
      <button class="bg-red-500">hello</button>
    </div>
    <div id="datd"></div>
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  props: {
    header: { type: String },
    imgUrl: { type: String },
    href: { type: String },
  },
  methods: {
    getHotelsInfo() {
      fetch(
        "https://www.themuse.com/api/public/companies?page=1&api_key=94b5e69cd6be9b9723fcd0e5f3136dfec466b9017fdd72e50df78834addce1c9"
      )
        .then((response) => response.json())
        .then(console.log)
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

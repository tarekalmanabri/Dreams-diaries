<template>
  <div class="card">
    <img :src="imgUrl" alt="" class="h-96 w-full pb-5" />
    <h3>{{ header }}</h3>
    <p class="pr-2 pl-2"><slot /></p>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    header: { type: String },
    imgUrl: { type: String },
    href: { type: String },
  },
};
</script>

<template>
  <div>
    <li class="card">
      <img v-bind:src="props.src" alt="" class="h-96 w-full pb-10" />
      <h3><a v-bind:href="props.href"></a></h3>
      <p></p>
    </li>
  </div>
</template>

<script>
export default {
  name: "Categoty",
  props: {
    src: String,
    href: String,
  },
};
</script>

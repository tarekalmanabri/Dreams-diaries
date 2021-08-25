<template>
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
</template>

<script>
export default {
  name: "DreamsOverview",
};
</script>

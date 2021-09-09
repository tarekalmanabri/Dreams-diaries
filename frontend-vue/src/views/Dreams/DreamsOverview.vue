<template>
  <div>
    <ul>
      <li
        v-for="(dream, index) in dreams"
        :key="dream + index"
        class="rounded p-3 m-1 bg-gray-100"
      >
        {{ dream.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DreamsOverview",

  mounted() {
    this.$store.dispatch("dreams/getDreams");
  },

  computed: {
    ...mapState("dreams", ["dreams"]),
  },
};
</script>

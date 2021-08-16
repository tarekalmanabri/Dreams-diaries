<template>
  <div class="beach">
    <Company
      v-for="company in companies"
      :key="company.name"
      :company="company"
    />
  </div>
</template>

<script>
import Company from "../components/Company.vue";

export default {
  components: { Company },
  mounted() {
    this.getCompanies();
  },

  data() {
    return {
      companies: null,
    };
  },

  methods: {
    async getCompanies() {
      const response = await fetch(this.$apiUrl + "/companies");
      const companies = await response.json();

      this.companies = companies.results;
    },
  },
};
</script>

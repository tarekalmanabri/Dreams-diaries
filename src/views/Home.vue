<template>
  <div class="home">
    <Main />
    <div class="p-20 rounded m-auto mt-7 border border-gray-400 w-11/12">
      <h2 class="text-2xl pb-5">Categories</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        distinctio deleniti amet. Quod cumque nulla repudiandae quibusdam,
        molestias est odio, unde iure provident veritatis porro ea nam iusto
        veniam cum.
      </p>
    </div>
    <div class="m-5 grid">
      <ul class="card-wrapper">
        <router-link to="/beach">
          <Category imgUrl="/img/backgrounds/beach.png" header="Beach & Sand">
            Check the most beautiful and cheapest beaches and enjoy the sand and
            sun!
          </Category>
        </router-link>

        <router-link to="/cities">
          <Category imgUrl="/img/backgrounds/cities.png" header="City Life">
            Explore and live the day and night, enjoy all meuseums, malls and
            parks!
          </Category>
        </router-link>
        <router-link to="/camping">
          <Category imgUrl="/img/backgrounds/camping.png" header="Camping">
            Find the best spots for a chill camping areas around you!
          </Category>
        </router-link>

        <router-link to="/mountain">
          <Category imgUrl="/img/backgrounds/mountain.png" header="Mountains">
            Check the best trips to the nicest mounatins and go live the
            adventure!
          </Category>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Category from "@/components/Category.vue";

export default {
  name: "Home",
  components: {
    Main,
    Category,
  },
};
</script>

<style scoped>
.card {
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-gradient: #5e9ad9, #e271ad;
  --card-blend-mode: overlay;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  overflow: hidden;
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}

.card a {
  color: inherit;
}

.card-wrapper {
  margin: 20px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
}
</style>

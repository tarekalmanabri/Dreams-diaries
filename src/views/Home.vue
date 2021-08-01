<template>
  <div class="home">
    <Main />
    <div class="mid-section p-20">
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
          <li class="card">
            <img src="../assets/beach.png" alt="" class="h-96 w-full pb-5" />
            <div class="pr-2 pl-2">
              <h3>Beach & Sand</h3>
              <p>
                Check the most beautiful and cheapest beaches and enjoy the sand
                and sun!
              </p>
            </div>
          </li>
        </router-link>

        <router-link to="/cities">
          <li class="card">
            <img src="../assets/cities.png" alt="" class="h-96 w-full pb-5" />
            <div class="pr-2 pl-2">
              <h3>City Life</h3>
              <p>
                Explore and live the day and night, enjoy all meuseums, malls
                and parks!
              </p>
            </div>
          </li>
        </router-link>
        <router-link to="/camping">
          <li class="card">
            <img src="../assets/camping.png" alt="" class="h-96 w-full pb-5" />
            <div class="pr-2 pl-2">
              <h3>Camping</h3>
              <p>Find the best spots for a chill camping areas around you!</p>
            </div>
          </li>
        </router-link>

        <router-link to="/mountain">
          <li class="card">
            <img src="../assets/mountain.png" alt="" class="h-96 w-full pb-5" />
            <div class="pr-2 pl-2">
              <h3>Mountains</h3>
              <p>
                Check the best trips to the nicest mounatins and go live the
                adventure!
              </p>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
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
.mid-section {
  width: 90%;
  margin: 30px auto auto;
  border-radius: 20px;
  border: 1px solid gray;
}
</style>

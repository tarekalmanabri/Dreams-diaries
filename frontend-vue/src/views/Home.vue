<template>
  <div class="home">
    <div class="flex p-20 rounded m-auto mt-7 border border-gray-400 w-11/12">
      <div class="ml-auto">
        <h2 class="text-2xl pb-5">Welcom to Dream Journal</h2>
        <p>
          Do you want to live in your own dream?<br />
          Lucid dreaming is one of the most intersting thing about dreaming,
          Imagine you can control what you do in your DREAM. <br />Writing your
          dream as soon as you wake up will help your brain to get close to
          lucid dreaming. <br />
          <a class="register" href="/register">Create and account</a> tostart
          you dream journal and get closer to live in your dreams
        </p>
      </div>
    </div>
    <!-- <div class="m-5 content-center">
      <ul class="card-wrapper">
        <router-link to="/beach">
          <Category imgUrl="/img/backgrounds/beach.png" header="Beach & Sand">
            <p>
              Check the most beautiful and cheapest beaches and enjoy the sand
              and sun!
            </p>
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
    </div> -->
  </div>
</template>

<script>
// import Category from "@/components/Category.vue";

export default {
  name: "Home",

  // components: {
  //   Category,
  // },
};
</script>

<style scoped>
.card {
  height: 100%;
  width: 100%;
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-gradient: #5e9ad9, #e271ad;
  --card-blend-mode: overlay;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  overflow: hidden;
}

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
  max-width: 70%;
  margin: auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
}
.register {
  color: #f87171;
}
</style>

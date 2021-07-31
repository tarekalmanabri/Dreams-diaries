<template>
  <div class="home">
    <Main />
    <div>
      <h2></h2>
    </div>
    <div class="m-5 grid">
      <ul class="card-wrapper">
        <li class="card">
          <img src="../assets/beach.png" alt="" class="h-96 w-full pb-10" />
          <h3><a href="">What a Fantabulous Title!</a></h3>
          <p>Lorem ipsum sit dolor amit</p>
        </li>
        <li class="card">
          <img src="../assets/cities.png" alt="" class="h-96 w-full pb-10" />
          <h3><a href="">What a Fantabulous Title!</a></h3>
          <p>Lorem ipsum sit dolor amit</p>
        </li>
        <li class="card">
          <img src="../assets/camping.png" alt="" class="h-96 w-full pb-10" />
          <h3><a href="">Positively Terrific Title</a></h3>
          <p>Lorem ipsum sit dolor amit</p>
        </li>
        <li class="card">
          <img src="../assets/mountain.png" alt="" class="h-96 w-full pb-10" />
          <h3><a href="">Positively Terrific Title</a></h3>
          <p>Lorem ipsum sit dolor amit</p>
        </li>
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
</style>

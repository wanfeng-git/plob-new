<template>
  <div class="fun-facts-area">
    <div class="container">
      <div class="fun-facts-box">
        <div class="row" v-if="funfacts">
          <div
            class="col-lg-3 col-md-6"
            v-for="funfact in funfacts.funfactItems"
            :key="funfact.id"
          >
            <div class="single-fun-fact">
              <div class="icon">
                <i :class="funfact.icon"></i>
              </div>
              <h3>{{ funfact.number }}+</h3>
              <p>{{ funfact.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="fun-facts-shape-1">
      <img src="../../assets/images/fun-facts/shape-1.png" alt="image" />
    </div>
    <div class="fun-facts-shape-2">
      <img src="../../assets/images/fun-facts/shape-2.png" alt="image" />
    </div>
    <div class="fun-facts-shape-3">
      <img src="../../assets/images/fun-facts/shape-3.png" alt="image" />
    </div>
    <div class="fun-facts-shape-4">
      <img src="../../assets/images/fun-facts/shape-4.png" alt="image" />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FunFacts",
  data() {
    return {
      funfacts: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/funfact?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.funfacts = attributes;
  },
};
</script>

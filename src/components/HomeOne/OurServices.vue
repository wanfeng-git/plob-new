<template>
  <div class="services-area pt-100 pb-70">
    <div class="container">
      <div class="section-title" v-if="service !== null">
        <h2>{{ service.heading }}</h2>
        <p>
          {{ service.description }}
        </p>
      </div>

      <ServicesItem></ServicesItem>
    </div>

    <!--    <div class="services-shape-1">-->
    <!--      <img src="../../assets/images/services/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="services-shape-2">-->
    <!--      <img src="../../assets/images/services/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="services-shape-3">-->
    <!--      <img src="../../assets/images/services/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="services-shape-4">-->
    <!--      <img src="../../assets/images/services/shape-4.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import ServicesItem from "./ServicesItem.vue";

export default {
  name: "OurServices",
  components: {
    ServicesItem,
  },
  data() {
    return {
      service: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/ourservice?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.service = attributes;
  },
};
</script>

<template>
  <div class="services-area pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-6"
          v-for="service in services"
          :key="service.id"
        >
          <div class="single-services-item">
            <div :class="['icon', service.attributes.className]">
              <i :class="service.attributes.icon"></i>
            </div>
            <h3>
              <router-link :to="`/services-details/${service.attributes.slug}`">
                {{ service.attributes.title }}
              </router-link>
            </h3>
            <p>{{ service.attributes.shortDesc }}</p>
            <router-link
              :to="`/services-details/${service.attributes.slug}`"
              class="services-btn"
            >
              {{ service.attributes.btnText }}
              <i class="ri-arrow-right-line"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="services-shape-1">
      <img src="../../assets/images/services/shape-1.png" alt="image" />
    </div>
    <div class="services-shape-2">
      <img src="../../assets/images/services/shape-2.png" alt="image" />
    </div>
    <div class="services-shape-3">
      <img src="../../assets/images/services/shape-3.png" alt="image" />
    </div>
    <div class="services-shape-4">
      <img src="../../assets/images/services/shape-4.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OurServices",
  data() {
    return {
      services: [],
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/services?populate=deep",
    );
    this.services = response.data.data;
  },
};
</script>

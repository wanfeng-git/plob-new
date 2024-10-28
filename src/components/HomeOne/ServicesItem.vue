<template>
  <div class="row justify-content-center">
    <div
      class="col-lg-4 col-md-6"
      v-for="service in services"
      :key="service.id"
    >
      <div class="single-services">
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
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const services = ref([]);

const fetchServices = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/services?populate=deep",
  );
  services.value = response.data.data;
};

onMounted(() => {
  fetchServices();
});
</script>

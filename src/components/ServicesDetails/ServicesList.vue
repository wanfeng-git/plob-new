<template>
  <ul class="services-list">
    <li v-for="service in services.slice(0, 6)" :key="service.id">
      <a :href="`/services-details/${service.attributes.slug}`">
        {{ service.attributes.title }}
      </a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "ServicesList",
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

<template>
  <div class="services-contact-info" v-if="services">
    <h3>{{ services.title }}</h3>

    <div class="info-box-one">
      <i class="ri-customer-service-line"></i>
      <a :href="`tel:${services.phone}`">
        {{ services.phone }}
      </a>
    </div>

    <div class="info-box-two">
      <i class="ri-earth-line"></i>
      <a :href="`mailto:${services.email}`">
        {{ services.email }}
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ServicesContactInfo",
  data() {
    return {
      services: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/servicescontactinfo?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.services = attributes;
  },
};
</script>

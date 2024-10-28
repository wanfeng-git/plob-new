<template>
  <div class="clients-area ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>Our Respected Clients</h2>
        <p>
          Which peoples loves us a lot, please check out what about says about
          us
        </p>
      </div>

      <div class="clients-slides-two">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="clients-item">
              <img :src="slide.image" alt="image" />
              <p>{{ slide.description }}</p>

              <div class="title-name">
                <h3>{{ slide.name }}</h3>
                <span>{{ slide.position }}</span>
              </div>
              <div class="star-rating">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <div class="shape-1">
                <img
                  src="../../assets/images/clients/shape-4.png"
                  alt="image"
                />
              </div>
              <div class="shape-2">
                <img
                  src="../../assets/images/clients/shape-5.png"
                  alt="image"
                />
              </div>
              <div class="shape-3">
                <img
                  src="../../assets/images/clients/shape-6.png"
                  alt="image"
                />
              </div>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="clients-shape-1">
      <img src="../../assets/images/clients/shape-1.png" alt="image" />
    </div>
    <div class="clients-shape-2">
      <img src="../../assets/images/clients/shape-2.png" alt="image" />
    </div>
    <div class="clients-shape-3">
      <img src="../../assets/images/clients/shape-3.png" alt="image" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "OurClients",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/clients/clients-1.png"),
        description:
          "‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
        name: "Deanna Hodges",
        position: "Spotify Developer",
      },
      {
        id: 2,
        image: require("../../assets/images/clients/clients-2.png"),
        description:
          "‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
        name: "Londynn Vargas",
        position: "Web Designer",
      },
      {
        id: 3,
        image: require("../../assets/images/clients/clients-3.png"),
        description:
          "‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
        name: "James Anderson",
        position: "Web Developer",
      },
      {
        id: 4,
        image: require("../../assets/images/clients/clients-2.png"),
        description:
          "‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
        name: "Londynn Vargas",
        position: "Web Designer",
      },
      {
        id: 5,
        image: require("../../assets/images/clients/clients-3.png"),
        description:
          "‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
        name: "James Anderson",
        position: "Web Developer",
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 2,
        snapAlign: "center",
      },
    },
  }),
});
</script>

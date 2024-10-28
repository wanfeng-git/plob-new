<template>
  <div class="partner-area pb-100">
    <div class="container">
      <div class="partner-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-partner">
              <img :src="slide.image" alt="image" />
            </div>
          </slide>

          <template #addons>
            <navigation>
              <template #next>
                <i class="ri-arrow-right-line"></i>
              </template>
              <template #prev>
                <i class="ri-arrow-left-line"></i>
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "PartnerLogo",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/partner/partner-1.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/partner/partner-2.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/partner/partner-3.png"),
      },
      {
        id: 4,
        image: require("../../assets/images/partner/partner-4.png"),
      },
      {
        id: 5,
        image: require("../../assets/images/partner/partner-5.png"),
      },
      {
        id: 6,
        image: require("../../assets/images/partner/partner-1.png"),
      },
      {
        id: 7,
        image: require("../../assets/images/partner/partner-2.png"),
      },
      {
        id: 8,
        image: require("../../assets/images/partner/partner-3.png"),
      },
      {
        id: 9,
        image: require("../../assets/images/partner/partner-4.png"),
      },
      {
        id: 10,
        image: require("../../assets/images/partner/partner-5.png"),
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 5,
        snapAlign: "center",
      },
    },
  }),
});
</script>

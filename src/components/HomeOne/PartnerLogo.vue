<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-box">
        <div class="partner-slides">
          <carousel
            :autoplay="5000"
            :settings="settings"
            :wrapAround="true"
            :breakpoints="breakpoints"
            v-if="partners !== null"
          >
            <slide v-for="slide in partners.partnerItems" :key="slide.id">
              <div class="single-partner">
                <img :src="slide.image.data.attributes.url" alt="image" />
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

    <!--    <div class="partner-shape-1">-->
    <!--      <img src="../../assets/images/partner/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <div class="partner-shape-2">
      <img src="../../assets/images/partner/shape-2.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    partners: null,
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
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/partnerlogo?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.partners = attributes;
  },
});
</script>

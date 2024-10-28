<template>
  <div class="clients-area ptb-100">
    <div class="container" v-if="clients">
      <div class="section-title">
        <h2>{{ clients.heading }}</h2>
        <p>{{ clients.shortDesc }}</p>
      </div>

      <div class="clients-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in clients.clientsItem" :key="slide.id">
            <div class="clients-item">
              <img :src="slide.image.data.attributes.url" alt="image" />
              <p>{{ slide.description }}</p>

              <div class="title-name">
                <h3>{{ slide.name }}</h3>
                <span>{{ slide.designation }}</span>
              </div>
              <div class="star-rating">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <!--              <div class="shape-1">-->
              <!--                <img-->
              <!--                  src="../../assets/images/clients/shape-4.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
              <!--              <div class="shape-2">-->
              <!--                <img-->
              <!--                  src="../../assets/images/clients/shape-5.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
              <!--              <div class="shape-3">-->
              <!--                <img-->
              <!--                  src="../../assets/images/clients/shape-6.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>

    <!--    <div class="clients-shape-1">-->
    <!--      <img src="../../assets/images/clients/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="clients-shape-2">-->
    <!--      <img src="../../assets/images/clients/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="clients-shape-3">-->
    <!--      <img src="../../assets/images/clients/shape-3.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";
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
    clients: null,
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
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/ourclient?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.clients = attributes;
  },
});
</script>

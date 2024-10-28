<template>
  <div class="projects-area ptb-100">
    <div class="container-fluid" v-if="projects !== null">
      <div class="section-title">
        <h2>{{ projects.heading }}</h2>
        <p>{{ projects.desc }}</p>
      </div>

      <div class="projects-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in projects.singleCasesStudies" :key="slide.id">
            <div class="single-projects">
              <div class="projects-image">
                <router-link to="/case-study-details">
                  <img :src="slide.image.data.attributes.url" alt="image" />
                </router-link>
              </div>

              <div class="projects-content">
                <h3>
                  <router-link to="/case-study-details">
                    {{ slide.title }}
                  </router-link>
                </h3>
                <p>{{ slide.desc }}</p>
                <router-link :to="slide.btnLink" class="projects-btn">
                  {{ slide.btnText }}
                  <i class="ri-arrow-right-line"></i>
                </router-link>
              </div>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="projects-shape-1">
      <img src="../../assets/images/projects/shape-1.png" alt="image" />
    </div>
    <div class="projects-shape-2">
      <img src="../../assets/images/projects/shape-2.png" alt="image" />
    </div>
    <div class="projects-shape-3">
      <img src="../../assets/images/projects/shape-3.png" alt="image" />
    </div>
    <div class="projects-shape-4">
      <img src="../../assets/images/projects/shape-4.png" alt="image" />
    </div>
    <div class="projects-shape-5">
      <img src="../../assets/images/projects/shape-5.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CaseStudies",
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
    projects: null,
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 4,
        snapAlign: "center",
      },
    },
  }),
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/casestudie?populate=singleCasesStudies.image",
    );
    const {
      data: { attributes },
    } = response.data;
    this.projects = attributes;
  },
});
</script>

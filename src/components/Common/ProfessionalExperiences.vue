<template>
  <div class="experiences-area">
    <div class="container">
      <div class="row align-items-center" v-if="experiences !== null">
        <div class="col-lg-6">
          <div class="experiences-item">
            <div class="experiences-content">
              <div class="tag">
                <img
                  :src="experiences.favicon.data.attributes.url"
                  alt="image"
                />
              </div>
              <h3>{{ experiences.heading }}</h3>
              <p>{{ experiences.description }}</p>
            </div>

            <div
              class="experiences-inner-content"
              v-for="experience in experiences.experiencesInner"
              :key="experience.id"
            >
              <img :src="experience.image.data.attributes.url" alt="image" />
              <p>{{ experience.description }}</p>
            </div>

            <div class="experiences-btn">
              <router-link :to="experiences.btnLink" class="default-btn">
                {{ experiences.btnText }}
                <i class="ri-arrow-right-line"></i>
                <span></span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="experiences-image">
            <img :src="experiences.image.data.attributes.url" alt="image" />
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="experiences-shape-1">-->
    <!--      <img src="../../assets/images/experiences/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-2">-->
    <!--      <img src="../../assets/images/experiences/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-3">-->
    <!--      <img src="../../assets/images/experiences/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-4">-->
    <!--      <img src="../../assets/images/experiences/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-5">-->
    <!--      <img src="../../assets/images/experiences/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-6">-->
    <!--      <img src="../../assets/images/experiences/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="experiences-shape-7">-->
    <!--      <img src="../../assets/images/experiences/shape-5.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfessionalExperiences",
  data() {
    return {
      experiences: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/professionalexperience?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.experiences = attributes;
  },
};
</script>

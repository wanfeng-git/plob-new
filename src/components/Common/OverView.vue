<template>
  <div class="overview-area pb-100">
    <div class="container">
      <div class="overview-box">
        <div class="overview-content" v-if="overview">
          <h3>{{ overview.heading }}</h3>
          <div class="overview-btn">
            <router-link :to="overview.btnLink" class="overview-btn-one">
              {{ overview.btnText }}
            </router-link>
            <img src="../../assets/images/overview/bar.png" alt="image" />
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="overview-shape-1">-->
    <!--      <img src="../../assets/images/overview/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="overview-shape-2">-->
    <!--      <img src="../../assets/images/overview/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="overview-shape-3">-->
    <!--      <img src="../../assets/images/overview/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="overview-shape-4">-->
    <!--      <img src="../../assets/images/overview/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="overview-shape-5">-->
    <!--      <img src="../../assets/images/overview/shape-5.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OverView",
  data() {
    return {
      overview: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/overview?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.overview = attributes;
  },
};
</script>

<template>
  <div class="support-area">
    <div class="container">
      <div class="support-content" v-if="support">
        <!--        <div class="tag">-->
        <!--          <img :src="support.favicon.data.attributes.url" alt="image" />-->
        <!--        </div>-->

        <h3>{{ support.heading }}</h3>
        <p>{{ support.description }}</p>
        <!--        <span>-->
        <!--          {{ support.name }},-->
        <!--          <span>{{ support.position }}</span>-->
        <!--        </span>-->
      </div>
    </div>

    <!--    <div class="support-shape-1">-->
    <!--      <img src="../../assets/images/support/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="support-shape-2">-->
    <!--      <img src="../../assets/images/support/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="support-shape-3">-->
    <!--      <img src="../../assets/images/support/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="support-shape-4">-->
    <!--      <img src="../../assets/images/support/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="support-shape-5">-->
    <!--      <img src="../../assets/images/support/shape-5.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="support-shape-6">-->
    <!--      <img src="../../assets/images/support/shape-6.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TechSupport",
  data() {
    return {
      support: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/techsupport?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.support = attributes;
  },
};
</script>

<template>
  <div class="cases-area ptb-100">
    <div class="container">
      <div class="section-title" v-if="cases">
        <h2>{{ cases.heading }}</h2>
        <p>{{ cases.shortDesc }}</p>
      </div>

      <CasesStudyItem></CasesStudyItem>
    </div>

    <!--    <div class="cases-shape-1">-->
    <!--      <img src="../../assets/images/cases-study/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-2">-->
    <!--      <img src="../../assets/images/cases-study/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-3">-->
    <!--      <img src="../../assets/images/cases-study/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-4">-->
    <!--      <img src="../../assets/images/cases-study/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-5">-->
    <!--      <img src="../../assets/images/cases-study/shape-5.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-6">-->
    <!--      <img src="../../assets/images/cases-study/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="cases-shape-7">-->
    <!--      <img src="../../assets/images/cases-study/shape-5.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import CasesStudyItem from "./CasesStudyItem.vue";

export default {
  name: "RecentCases",
  components: {
    CasesStudyItem,
  },
  data() {
    return {
      cases: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/recentcase?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.cases = attributes;
  },
};
</script>

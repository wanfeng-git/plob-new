<template>
  <div class="cases-area ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>行业解决方案</h2>
        <p>
          从汽车到制造业，海思特为众多行业客户提供了高效、智能的行业解决方案，帮助他们在数字化浪潮中立于不败之地。
        </p>
      </div>
      <div class="row">
        <div class="col-lg-6" v-for="cas in cases" :key="cas.id">
          <div class="single-cases">
            <div class="cases-image">
              <router-link :to="`/case-study-details/${cas.attributes.slug}`" style="height: 400px;">
                <img
                  :src="cas.attributes.image.data.attributes.url"
                  alt="image"
                />
              </router-link>
            </div>

            <div class="cases-content">
              <div class="tag-1">{{ cas.attributes.tag }}</div>

              <h3>
                <router-link :to="`/case-study-details/${cas.attributes.slug}`">
                  {{ cas.attributes.title }}
                </router-link>
              </h3>
              <p>{{ cas.attributes.description }}</p>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-12 col-md-12">
          <div class="pagination-area">
            <a href="#" class="prev page-numbers">
              <i class="ri-arrow-left-line"></i>
            </a>
            <span class="page-numbers current" aria-current="page">1</span>
            <a href="#" class="page-numbers">2</a>
            <a href="#" class="page-numbers">3</a>
            <a href="#" class="page-numbers">4</a>
            <a href="#" class="next page-numbers">
              <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div> -->
      </div>
    </div>

    <!-- <div class="cases-shape-1">
      <img src="../../assets/images/cases-study/shape-1.png" alt="image" />
    </div>
    <div class="cases-shape-2">
      <img src="../../assets/images/cases-study/shape-2.png" alt="image" />
    </div>
    <div class="cases-shape-3">
      <img src="../../assets/images/cases-study/shape-3.png" alt="image" />
    </div>
    <div class="cases-shape-4">
      <img src="../../assets/images/cases-study/shape-4.png" alt="image" />
    </div>
    <div class="cases-shape-5">
      <img src="../../assets/images/cases-study/shape-5.png" alt="image" />
    </div>
    <div class="cases-shape-6">
      <img src="../../assets/images/cases-study/shape-4.png" alt="image" />
    </div>
    <div class="cases-shape-7">
      <img src="../../assets/images/cases-study/shape-5.png" alt="image" />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CaseStudy",
  data() {
    return {
      cases: [],
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/casestudies?populate=deep",
    );
    this.cases = response.data.data;
  },
};
</script>

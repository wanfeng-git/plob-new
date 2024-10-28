<template>
  <div class="row">
    <div class="col-lg-6" v-for="cas in cases.slice(0, 4)" :key="cas.id">
      <div class="single-cases">
        <div class="cases-image">
          <router-link :to="`/case-study-details/${cas.attributes.slug}`">
            <img :src="cas.attributes.image.data.attributes.url" alt="image" />
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

    <div class="cases-view-all-btn">
      <router-link to="/case-study-one" class="default-btn">
        查看所有
        <i class="ri-briefcase-line"></i>
        <span></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CasesStudyItem",
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

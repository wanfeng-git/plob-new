<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner
      v-if="details !== null"
      :pageTitle="details[0].attributes.title"
    />
    <CaseStudyDetails v-if="details" v-bind:caseStudyDetails="details" />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import axios from "axios";
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import CaseStudyDetails from "../CaseStudyDetails/CaseStudyDetails";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "CaseStudyDetailsPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    CaseStudyDetails,
    OverView,
    MainFooter,
  },
  data() {
    return {
      details: null,
    };
  },
  created: async function () {
    const { slug } = this.$route.params;
    const reaponse = await axios.get(
      `http://localhost:1337/api/casestudies?filters[slug][$eq]=${slug}&populate=deep`,
      { params: { slug } },
    );
    this.details = reaponse.data.data;
  },
};
</script>

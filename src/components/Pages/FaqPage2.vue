<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="招聘信息" />
    <FaqAccordion />
    <FaqUs />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import FaqAccordion from "../Faq2/FaqAccordion2";
import FaqUs from "../Faq2/FaqUs";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "FaqPage2",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    FaqAccordion,
    MainFooter,
    FaqUs,
  },
};
</script>

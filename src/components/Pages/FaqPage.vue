<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="FAQs" />
    <FaqAccordion />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import FaqAccordion from "../Faq/FaqAccordion";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "FaqPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    FaqAccordion,
    OverView,
    MainFooter,
  },
};
</script>

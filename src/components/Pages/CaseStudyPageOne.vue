<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="行业解决方案" />
    <CaseStudy />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import CaseStudy from "../CaseStudyOne/CaseStudy";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "CaseStudyPageOne",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    CaseStudy,
    OverView,
    MainFooter,
  },
};
</script>

<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="客户成功故事" />
    <CaseStudy />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import CaseStudy from "../CaseStudyTwo/CaseStudy";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "CaseStudyPageTwo",
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

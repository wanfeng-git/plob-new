<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="企业应用定制" />
    <OurServices />
    <TechSupport />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurServices from "../ServicesThree/OurServices";
import TechSupport from "../Common/TechSupport";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "ServicesPageThree",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurServices,
    TechSupport,
    OverView,
    MainFooter,
  },
};
</script>

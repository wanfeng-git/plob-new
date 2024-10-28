<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Pricing Plan" />
    <BestPlans class="bg-gradient-color" />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BestPlans from "../Common/BestPlans";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "PricingPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    BestPlans,
    OverView,
    MainFooter,
  },
};
</script>

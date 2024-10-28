<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="团队介绍" />
    <OurTeam class="pt-100 pb-70" />
    <!-- <OurFeatures />
    <OurClients /> -->
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
// import OurFeatures from "../FeaturesOne/OurFeatures";
// import OurClients from "../Common/OurClients";
import OurTeam from "../Common/OurTeam";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "FeaturesPageOne",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    // OurFeatures,
    OurTeam,
    // OurClients,
    OverView,
    MainFooter,
  },
};
</script>

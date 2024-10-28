<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Features Two" />
    <OurFeatures />
    <OurClients />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurFeatures from "../FeaturesTwo/OurFeatures";
import OurClients from "../FeaturesTwo/OurClients";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "FeaturesPageTwo",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurFeatures,
    OurClients,
    OverView,
    MainFooter,
  },
};
</script>

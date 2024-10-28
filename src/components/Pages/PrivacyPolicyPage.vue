<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Privacy Policy" />
    <PrivacyPolicy />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "PrivacyPolicyPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    PrivacyPolicy,
    MainFooter,
  },
};
</script>

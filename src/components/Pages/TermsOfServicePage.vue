<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Terms of Service" />
    <TermsOfService />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import TermsOfService from "../TermsOfService/TermsOfService";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "TermsOfServicePage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    TermsOfService,
    MainFooter,
  },
};
</script>

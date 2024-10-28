<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="联系我们" />
    <ContactUs />
    <ContactInfo />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import ContactUs from "../Contact/ContactUs";
import ContactInfo from "../Contact/ContactInfo";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "ContactPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    ContactUs,
    ContactInfo,
    MainFooter,
  },
};
</script>

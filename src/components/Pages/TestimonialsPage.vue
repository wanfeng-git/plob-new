<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="企业文化" />
    <PartnerLogo class="pt-100" />

    <CorporateCulture class="pt-100 pb-70"/>
    <OurClients />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import CorporateCulture from "../CorporateCulture/CorporateCulture";
import PartnerLogo from "../Common/PartnerLogo";
import OurClients from "../Common/OurClients";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "TestimonialsPage",
  components: {
    CorporateCulture,
    TopHeader,
    MainNavbar,
    PageBanner,
    PartnerLogo,
    OurClients,
    OverView,
    MainFooter,
  },
};
</script>

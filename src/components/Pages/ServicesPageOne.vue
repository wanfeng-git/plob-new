<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="数字化转型" />
    <OurServices />
    <OurProcess />
    <TechSupport />
    <OurClients />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurServices from "../ServicesOne/OurServices";
import OurProcess from "../ServicesOne/OurProcess";
import TechSupport from "../Common/TechSupport";
import OurClients from "../Common/OurClients";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "ServicesPageOne",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurServices,
    OurProcess,
    TechSupport,
    OurClients,
    OverView,
    MainFooter,
  },
};
</script>

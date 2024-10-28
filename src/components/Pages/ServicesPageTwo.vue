<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="云原生架构" />
    <OurServices />
    <OurProcess />
    <TechnologySupport />
    <OurClients />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurServices from "../ServicesTwo/OurServices";
import OurProcess from "../ServicesTwo/OurProcess";
import TechnologySupport from "../ServicesTwo/TechnologySupport";
import OurClients from "../Common/OurClients";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "ServicesPageTwo",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurServices,
    OurProcess,
    TechnologySupport,
    OurClients,
    OverView,
    MainFooter,
  },
};
</script>

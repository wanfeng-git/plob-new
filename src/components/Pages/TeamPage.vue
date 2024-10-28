<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="" />
    <OurTeam class="pt-100 pb-70" />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurTeam from "../Team/OurTeam";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "TeamPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurTeam,
    OverView,
    MainFooter,
  },
};
</script>

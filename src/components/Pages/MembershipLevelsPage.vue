<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Membership Levels" />
    <MembershipLevels />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import MembershipLevels from "../MembershipLevels/MembershipLevels";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "MembershipLevelsPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    MembershipLevels,
    MainFooter,
  },
};
</script>

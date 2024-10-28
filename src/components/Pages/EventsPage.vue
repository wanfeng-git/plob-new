<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Events" />
    <OurEvents />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurEvents from "../Events/OurEvents";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "EventsPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurEvents,
    OverView,
    MainFooter,
  },
};
</script>

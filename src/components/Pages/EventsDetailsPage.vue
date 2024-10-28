<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Events Details" />
    <EventsDetails />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import EventsDetails from "../EventsDetails/EventsDetails";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "EventsPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    EventsDetails,
    OverView,
    MainFooter,
  },
};
</script>

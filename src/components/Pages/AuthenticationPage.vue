<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Welcome to Plob" />
    <ProfileAuthentication />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import ProfileAuthentication from "../Authentication/ProfileAuthentication";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "AuthenticationPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    ProfileAuthentication,
    MainFooter,
  },
};
</script>

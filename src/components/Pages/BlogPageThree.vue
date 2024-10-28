<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Blog Standard" />
    <BlogStandard />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BlogStandard from "../BlogStandard/BlogStandard";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "BlogPageThree",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    BlogStandard,
    MainFooter,
  },
};
</script>

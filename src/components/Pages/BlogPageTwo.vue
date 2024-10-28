<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="Blog Right Sidebar" />
    <BlogRightSidebar />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BlogRightSidebar from "../BlogRightSidebar/BlogRightSidebar";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "BlogPageTwo",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    BlogRightSidebar,
    MainFooter,
  },
};
</script>

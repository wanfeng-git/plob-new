<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="技术分享" />
    <BlogPost />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BlogPost from "../BlogPost/BlogPost";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "BlogPageOne",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    BlogPost,
    MainFooter,
  },
};
</script>

<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="公司动态" />
    <BlogPost />
    <GalleryItem />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BlogPost from "../BlogPost/BlogPost";
import GalleryItem from "../Gallery/GalleryItem";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "GalleryPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    GalleryItem,
    BlogPost,
    OverView,
    MainFooter,
  },
};
</script>

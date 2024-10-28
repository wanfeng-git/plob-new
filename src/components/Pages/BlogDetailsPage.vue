<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner
      v-if="details !== null"
      :pageTitle="details[0].attributes.title"
    />
    <div>
      <BlogDetails v-if="details" v-bind:detailsContent="details" />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import axios from "axios";
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import BlogDetails from "../BlogDetails/BlogDetails";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "BlogDetailsPage",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    BlogDetails,
    MainFooter,
  },
  data() {
    return {
      details: null,
    };
  },
  created: async function () {
    const { slug } = this.$route.params;
    const reaponse = await axios.get(
      `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=deep`,
      { params: { slug } },
    );
    this.details = reaponse.data.data;
  },
};
</script>

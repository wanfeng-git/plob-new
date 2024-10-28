<template>
  <div class="blog-area pt-100 pb-100">
    <div class="container">
      <BlogItem></BlogItem>
    </div>

    <!-- <div class="blog-shape-1">
      <img src="../../assets/images/blog/shape-1.png" alt="image" />
    </div>
    <div class="blog-shape-2">
      <img src="../../assets/images/blog/shape-2.png" alt="image" />
    </div> -->
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";

export default {
  name: "BlogPost",
  components: {
    BlogItem,
  },
};
</script>

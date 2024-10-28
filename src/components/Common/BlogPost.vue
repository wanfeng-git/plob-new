<template>
  <div class="blog-area pt-100 pb-70">
    <div class="container">
      <div class="section-title" v-if="blog">
        <h2>{{ blog.heading }}</h2>
        <p>
          {{ blog.shorDesc }}
        </p>
      </div>

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
import axios from "axios";
import BlogItem from "./BlogItem.vue";

export default {
  name: "BlogPost",
  components: {
    BlogItem,
  },
  data() {
    return {
      blog: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/blogpost?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.blog = attributes;
  },
};
</script>

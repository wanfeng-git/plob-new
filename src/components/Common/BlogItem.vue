<template>
  <div class="row justify-content-center">
    <div
      class="col-lg-4 col-md-6"
      v-for="blog in blogs.slice(0, 3)"
      :key="blog.id"
    >
      <div class="single-blog">
        <div class="blog-image">
          <router-link :to="`/blog-details/${blog.attributes.slug}`">
            <img :src="blog.attributes.image.data.attributes.url" alt="image" />
          </router-link>
        </div>

        <div class="blog-content">
          <ul class="entry-meta">
            <li class="tag">{{ blog.attributes.tag }}</li>
            <li>
              <i class="ri-time-line"></i>
              {{ formatPublishedDate(blog.attributes.publishedAt) }}
            </li>
            <!-- <li>
                <i class="ri-message-2-line"></i>
                (0) Comment
            </li> -->
          </ul>
          <h3>
            <router-link :to="`/blog-details/${blog.attributes.slug}`">
              {{ blog.attributes.title }}
            </router-link>
          </h3>
          <router-link
            :to="`/blog-details/${blog.attributes.slug}`"
            class="blog-btn"
          >
            {{ blog.attributes.btnText }}
            <i class="ri-arrow-right-line"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogItem",
  data() {
    return {
      blogs: [],
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/blogs?populate=deep",
    );
    this.blogs = response.data.data;
  },
  methods: {
    formatPublishedDate(dateString) {
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = new Date(dateString).toLocaleDateString(
        undefined,
        options,
      );
      return formattedDate;
    },
  },
};
</script>

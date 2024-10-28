<template>
  <div class="gallery-area pt-100 pb-70">
    <div class="container">
      <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
        class="row justify-content-center"
        v-if="gallerys !== null"
      >
        <a
          v-for="item in gallerys.galleryItem"
          :key="item.id"
          :data-lg-size="item.size"
          className="gallery-item"
          :data-src="item.image.data.attributes.url"
          class="col-lg-4 col-md-6 col-sm-6"
        >
          <div class="single-gallery-item">
            <img
              className="img-responsive"
              :src="item.image.data.attributes.url"
            />
          </div>
        </a>
      </lightgallery>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
let lightGallery = null;

export default {
  name: "GalleryItem",
  components: {
    Lightgallery,
  },
  watch: {
    items() {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  data: () => ({
    plugins: [lgZoom],
    gallerys: null,
  }),
  methods: {
    onInit: (detail) => {
      lightGallery = detail.instance;
    },
    onBeforeSlide: () => {
      console.log("calling before slide");
    },
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/gallery?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.gallerys = attributes;
  },
};
</script>

<style lang="css">
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css");
</style>

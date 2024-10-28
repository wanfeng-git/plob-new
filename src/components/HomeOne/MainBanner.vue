<template>
  <div class="main-banner-area">
    <div class="container">
      <div class="row" v-if="banner !== null">
        <div class="col-lg-5 col-md-12">
          <div class="main-banner-content">
            <!--            <div class="tag">-->
            <!--              <img :src="banner.favicon.data.attributes.url" alt="image" />-->
            <!--              {{ banner.subTitle }}-->
            <!--            </div>-->
            <h1>{{ banner.heading }}</h1>
            <p>{{ banner.description }}</p>

            <div class="banner-btn">
              <router-link :to="banner.btnLink" class="default-btn">
                {{ banner.btnText }}
                <i class="ri-arrow-right-line"></i>
                <span></span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="main-banner-animation-image">
            <img
              src="../../assets/images/main-banner/banner-one/img1.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img2.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img3.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img4.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img5.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img6.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img7.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img8.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img9.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img10.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img11.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img12.png"
              alt="image"
            />
            <img
              src="../../assets/images/main-banner/banner-one/img13.png"
              alt="image"
            />
            <img :src="banner.image.data.attributes.url" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const banner = ref(null);

onMounted(async () => {
  const response = await axios.get(
    "http://localhost:1337/api/bannerdefaulthomepage?populate=deep",
  );
  const {
    data: { attributes },
  } = response.data;
  banner.value = attributes;
});
</script>

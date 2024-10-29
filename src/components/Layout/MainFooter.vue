<template>
  <footer class="footer-area pt-100">
    <div class="container">
      <div class="row justify-content-center" v-if="footer">
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer-widget">
            <div class="widget-logo">
              <router-link to="/">
                <img
                  :src="footer.logo.data.attributes.url"
                  class="black-logo"
                  alt="logo"
                />
              </router-link>
            </div>
            <p>
              {{ footer.shortDesc }}
            </p>

            <ul class="widget-info">
              <li>
                <i class="ri-customer-service-line"></i>
                <a :href="`tel:${footer.phone}`">
                  {{ footer.phone }}
                </a>
              </li>
              <li>
                <i class="ri-global-line"></i>
                <a :href="`mailto:${footer.email}`">
                  {{ footer.email }}
                </a>
              </li>
              <li>
                <i class="ri-map-pin-line"></i>
                {{ footer.address }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-sm-2">
          <div class="single-footer-widget">
            <h3>{{ footer.title }}</h3>

            <ul class="footer-links-list">
              <li v-for="quick in footer.quickLinks" :key="quick.id">
                <a :href="`/services-details/${quick.link}`">
                  {{ quick.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-sm-2">
          <div class="single-footer-widget">
            <h3>{{ footer.titleTwo }}</h3>

            <ul class="footer-links-list">
              <li v-for="about in footer.aboutLinks" :key="about.id">
                <a :href="about.link">
                  {{ about.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{ footer.titleThree }}</h3>

            <ul class="footer-links-list">
              <li v-for="services in footer.servicesLinks" :key="services.id">
                <router-link :to="services.link">
                  {{ services.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-2">
          <div class="single-footer-widget">
            <h3>{{ footer.titleFour }}</h3>

            <ul class="footer-links-list">
              <li v-for="blog in footer.blogLinks" :key="blog.id">
                <router-link :to="blog.link">
                  {{ blog.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!--        <div class="col-lg-3 col-sm-6">-->
        <!--          <div class="single-footer-widget">-->
        <!--            <h3>{{ footer.titleFour }}</h3>-->

        <!--            <div class="widget-newsletter">-->
        <!--              <div class="newsletter-content">-->
        <!--                <p>-->
        <!--                  {{ footer.description }}-->
        <!--                </p>-->
        <!--              </div>-->

        <!--                            <form class="newsletter-form">-->
        <!--                              <input-->
        <!--                                type="email"-->
        <!--                                class="input-newsletter"-->
        <!--                                placeholder="Enter email"-->
        <!--                                name="EMAIL"-->
        <!--                              />-->

        <!--                              <button type="submit">-->
        <!--                                <i class="ri-send-plane-2-line"></i>-->
        <!--                              </button>-->
        <!--                            </form>-->
        <!--            </div>-->

        <!--                        <ul class="widget-social">-->
        <!--                          <li v-for="social in footer.socialLinks" :key="social.id">-->
        <!--                            <a :href="social.link" target="_blank">-->
        <!--                              <i :class="social.icon"></i>-->
        <!--                            </a>-->
        <!--                          </li>-->
        <!--                        </ul>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <div class="copyright-area-content">
          <p>
            Copyright ©{{ currentYear }} 大连海思特信息技术有限责任公司
            <!--            <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>-->
          </p>
        </div>
      </div>
    </div>

    <!--    <div class="footer-shape-1">-->
    <!--      <img src="../../assets/images/footer/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="footer-shape-2">-->
    <!--      <img src="../../assets/images/footer/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="footer-shape-3">-->
    <!--      <img src="../../assets/images/footer/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="footer-shape-4">-->
    <!--      <img src="../../assets/images/footer/shape-4.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="footer-shape-5">-->
    <!--      <img src="../../assets/images/footer/shape-5.png" alt="image" />-->
    <!--    </div>-->
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const footer = ref(null);
const currentYear = new Date().getFullYear();

onMounted(async () => {
  const response = await axios.get(
    "http://localhost:1337/api/footer?populate=deep",
  );
  const {
    data: { attributes },
  } = response.data;
  footer.value = attributes;
});
</script>

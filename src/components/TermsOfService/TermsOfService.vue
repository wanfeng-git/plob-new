<template>
  <div class="terms-of-service-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="terms-of-service-content" v-if="terms">
            <img :src="terms.image.data.attributes.url" alt="image" />
            <span v-html="terms.richText"></span>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <div class="widget-area">
            <div class="widget widget_search">
              <form class="search-form">
                <input
                  type="search"
                  class="search-field"
                  placeholder="Search Something"
                />
                <button type="submit"><i class="ri-search-line"></i></button>
              </form>
            </div>

            <div class="widget widget_insight">
              <ul>
                <li><router-link to="/about-one">About Us</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
                <li>
                  <router-link to="/team-member">Team Member</router-link>
                </li>
                <li>
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                </li>
                <li>
                  <router-link to="/terms-of-service"
                    >Terms of Service</router-link
                  >
                </li>
              </ul>
            </div>

            <div class="widget widget_tag_cloud">
              <h3 class="widget-title">Popular Tags</h3>

              <div class="tagcloud">
                <a href="#">Agency</a>
                <a href="#">Branding</a>
                <a href="#">Marketing</a>
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Consulting</a>
                <a href="#">Startup</a>
                <a href="#">Popular</a>
                <a href="#">WordPress</a>
                <a href="#">Financial</a>
                <a href="#">Branding</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TermsOfService",
  data() {
    return {
      terms: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/termsofservice?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.terms = attributes;
  },
};
</script>

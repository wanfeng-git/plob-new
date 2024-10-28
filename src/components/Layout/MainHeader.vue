<template>
  <header class="main-header-area">
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <ul class="top-header-content" v-if="contact">
              <li>
                <i class="ri-customer-service-line"></i>
                <a :href="`tel:${contact.tel}`">{{ contact.tel }}</a>
              </li>

              <li>
                <i class="ri-earth-line"></i>
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
              </li>
            </ul>
          </div>

          <!--          <div class="col-lg-5 col-md-6">-->
          <!--            <ul class="top-header-optional">-->
          <!--              <li>-->
          <!--                <a href="https://www.facebook.com/" target="_blank">-->
          <!--                  <i class="ri-facebook-fill"></i>-->
          <!--                </a>-->
          <!--                <a href="https://www.twitter.com/" target="_blank">-->
          <!--                  <i class="ri-twitter-fill"></i>-->
          <!--                </a>-->
          <!--                <a href="https://www.linkedin.com/" target="_blank">-->
          <!--                  <i class="ri-linkedin-fill"></i>-->
          <!--                </a>-->
          <!--                <a href="https://www.messenger.com/" target="_blank">-->
          <!--                  <i class="ri-messenger-fill"></i>-->
          <!--                </a>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </div>
      </div>
    </div>

    <MainNavbar class="navbar-box-style" />
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const contact = ref({});
const fetchContact = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/contact?populate=deep",
  );
  const {
    data: { attributes },
  } = response.data;
  contact.value = attributes;
};
onMounted(() => {
  fetchContact();
});
</script>

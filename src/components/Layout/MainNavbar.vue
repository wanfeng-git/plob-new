<template>
  <div>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
      <div class="main-navbar">
        <div class="container">
          <nav class="navbar navbar-expand-xl navbar-light">
            <router-link class="navbar-brand" to="/" v-if="logo">
              <img
                :src="logo.image.data.attributes.url"
                class="black-logo"
                alt="logo"
                style="width: 200px"
              />
              <!-- <img src="../../assets/images/white-logo.png" class="white-logo" alt="logo"> -->
            </router-link>

            <div
              class="navbar-toggler"
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              v-bind:class="{ active: button_active_state }"
              v-on:click="button_active_state = !button_active_state"
            >
              <i class="ri-menu-line"></i>
              <i class="ri-close-line"></i>
            </div>

            <div class="collapse navbar-collapse" :class="{ show: active }">
              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link"> 首页 </router-link>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    关于我们
                    <i class="ri-add-line"></i>
                  </a>

                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link to="/about-one" class="nav-link">
                        公司简介
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/features-one" class="nav-link">
                        团队介绍
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/testimonials" class="nav-link">
                        企业文化
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    服务
                    <i class="ri-add-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li
                      class="nav-item"
                      v-for="service in services"
                      :key="service.id"
                    >
                      <a
                        :href="`/services-details/${service.attributes.slug}`"
                        class="nav-link"
                      >
                        {{ service.attributes.title }}
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link"> 案例展示 </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link to="/case-study-one" class="nav-link">
                        行业解决方案
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/case-study-two" class="nav-link">
                        客户成功故事
                      </router-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    新闻与博客
                    <i class="ri-add-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <!-- <li class="nav-item">
                      <router-link to="/blog" class="nav-link">
                        技术分享
                      </router-link>
                    </li> -->
                    <li class="nav-item">
                      <router-link to="/gallery" class="nav-link">
                        公司动态
                      </router-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <router-link to="/faq2" class="nav-link">
                    招聘信息
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">
                    联系我们
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="others-options d-flex align-items-center">
              <div class="option-item">
                <div
                  class="side-menu-btn"
                  v-on:click="isSideMenuMethod(isSideMenu)"
                >
                  <i class="ri-menu-4-line"></i>
                </div>
              </div>
              <div class="option-item">
                <div
                  @click="search = !search"
                  :aria-pressed="search ? 'true' : 'false'"
                  v-bind:class="{ search: button_search_state }"
                  v-on:click="button_search_state = !button_search_state"
                >
                  <i class="search-btn ri-search-line"></i>
                  <i class="close-btn ri-close-line"></i>
                </div>
                <div class="search-overlay" :class="{ show: search }">
                  <div class="search-box">
                    <form class="search-form">
                      <input
                        class="search-input"
                        name="search"
                        placeholder="Search..."
                        type="text"
                      />

                      <button class="search-button" type="submit">
                        <i class="ri-search-line"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="option-item">
                <router-link to="/contact" class="default-btn">
                  交流一下
                  <i class="ri-message-line"></i>
                  <span></span>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="sidebarModal modal right" v-if="isSideMenu">
      <div class="modal-dialog">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            v-on:click="isSideMenuMethod(isSideMenu)"
          >
            <i class="ri-close-line"></i>
          </button>

          <div class="modal-body">
            <div class="title">
              <router-link to="/" v-if="logo">
                <img
                  :src="logo.image.data.attributes.url"
                  class="black-logo"
                  alt="logo"
                  style="width: 200px"
                />
                <!-- <img src="../../assets/images/white-logo.png" class="white-logo" alt="logo"> -->
              </router-link>
            </div>

            <!--            <div class="sidebar-content">-->
            <!--              <h3>关于我们</h3>-->
            <!--              <p>-->
            <!--                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do-->
            <!--                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut-->
            <!--                enim ad minim veniam quis nostrud exercitation ullamco laboris-->
            <!--                nisi ut aliquip ex ea commodo consequat.-->
            <!--              </p>-->

            <!--              <div class="sidebar-btn">-->
            <!--                <router-link to="/contact" class="default-btn">-->
            <!--                  交流一下-->
            <!--                  <i class="ri-message-line"></i>-->
            <!--                  <span></span>-->
            <!--                </router-link>-->
            <!--              </div>-->
            <!--            </div>-->

            <div class="sidebar-contact-info">
              <h3>联系信息</h3>

              <ul class="info-list" v-if="contact">
                <li>
                  <i class="ri-phone-fill"></i>
                  <a :href="`tel:${contact.tel}`">{{ contact.tel }}</a>
                </li>

                <li>
                  <i class="ri-mail-line"></i>
                  <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                </li>

                <li><i class="ri-map-pin-line"></i> {{ contact.address }}</li>
              </ul>
            </div>

            <!--            <ul class="sidebar-social-list">-->
            <!--              <li>-->
            <!--                <a href="https://www.facebook.com/" target="_blank"-->
            <!--                  ><i class="ri-facebook-fill"></i-->
            <!--                ></a>-->
            <!--              </li>-->
            <!--              <li>-->
            <!--                <a href="https://www.twitter.com/" target="_blank"-->
            <!--                  ><i class="ri-twitter-fill"></i-->
            <!--                ></a>-->
            <!--              </li>-->
            <!--              <li>-->
            <!--                <a href="https://www.linkedin.com/" target="_blank"-->
            <!--                  ><i class="ri-linkedin-fill"></i-->
            <!--                ></a>-->
            <!--              </li>-->
            <!--              <li>-->
            <!--                <a href="https://www.instagram.com/" target="_blank"-->
            <!--                  ><i class="ri-instagram-fill"></i-->
            <!--                ></a>-->
            <!--              </li>-->
            <!--            </ul>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const isSticky = ref(false);
const active = ref(false);
const button_active_state = ref(false);
const search = ref(false);
const button_search_state = ref(false);
const isSideMenu = ref(false);
const logo = ref(null);

const services = ref([]);
const contact = ref({});
const isSideMenuMethod = (currentSideMenu) => {
  isSideMenu.value = !currentSideMenu;
};

const fetchLogo = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/sitelogo?populate=deep",
  );
  const {
    data: { attributes },
  } = response.data;
  logo.value = attributes;
};
const fetchServices = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/services?populate=deep",
  );
  services.value = response.data.data;
};
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
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    isSticky.value = scrollPos >= 100;
  });
  fetchLogo();
  fetchServices();
  fetchContact();
});
</script>

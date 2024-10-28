<template>
  <div class="plans-area pt-100 pb-100" style="display: none">
    <div class="container" v-if="plans">
      <div class="section-title">
        <h2>{{ plans.heading }}</h2>
        <p>{{ plans.shortDesc }}</p>
      </div>
      <div class="tabs">
        <ul class="tabs__header">
          <li
            class="tabs__header-item"
            v-for="tab in plans.plansTab"
            v-on:click="selectTab(tab.id)"
            v-bind:class="{ active: activeTab == tab.id }"
            :key="tab.id"
          >
            {{ tab.title }}
          </li>
        </ul>
      </div>
      <div class="tabs__container">
        <div class="tabs__list" ref="tabsList">
          <div
            class="tabs__list-tab"
            v-for="tab in plans.plansTab"
            v-bind:class="{ active: activeTab == tab.id }"
            :key="tab.id"
          >
            <div class="row justify-content-center">
              <div
                class="col-lg-4 col-md-6"
                v-for="pricing in tab.singlePlans"
                :key="pricing.id"
              >
                <div class="single-plans-table">
                  <div class="plans-header">
                    <h3>{{ pricing.title }}</h3>
                    <p>{{ pricing.shortDesc }}</p>
                  </div>
                  <div class="price">
                    ${{ pricing.price }}
                    <span>/{{ pricing.period }}</span>
                  </div>
                  <div class="plans-btn">
                    <router-link :to="pricing.btnLink" class="default-btn">
                      {{ pricing.btnText }}
                      <i class="ri-arrow-right-line"></i>
                      <span></span>
                    </router-link>
                  </div>
                  <ul class="plans-features-list">
                    <li
                      v-for="features in pricing.planFeatures"
                      :key="features.id"
                    >
                      <i :class="features.icon"></i>
                      {{ features.feature }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-all-plans-btn">
        <router-link :to="plans.btnLink" class="plans-btn-one">
          {{ plans.btnText }}
        </router-link>
      </div>
    </div>

    <div class="plans-shape-1">
      <img src="../../assets/images/plans/shape-1.png" alt="image" />
    </div>
    <div class="plans-shape-2">
      <img src="../../assets/images/plans/shape-2.png" alt="image" />
    </div>
    <div class="plans-shape-3">
      <img src="../../assets/images/plans/shape-3.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BestPlans",
  data() {
    return {
      activeTab: 1,
      offsetRight: 0,
      plans: null,
    };
  },
  methods: {
    selectTab(id) {
      let tabsList = this.$refs.tabsList;
      this.activeTab = id;
      this.offsetRight = tabsList.clientWidth * (id - 1);
      tabsList.style.right = this.offsetRight + "px";
    },
  },
  mounted() {
    let tabsList = this.$refs.tabsList;
    if (tabsList) {
      tabsList.style.right = this.offsetRight + "px";
    }
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/bestplan?populate=plansTab.singlePlans.planFeatures",
    );
    const {
      data: { attributes },
    } = response.data;
    this.plans = attributes;
  },
};
</script>

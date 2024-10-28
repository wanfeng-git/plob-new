<template>
  <div class="page-banner-area">
    <div class="container">
      <div class="page-banner-content">
        <h2>{{ pageTitle }}</h2>

        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>{{ pageTitle }}</li>
        </ul>
      </div>
    </div>

    <!--    <div class="page-banner-shape-1">-->
    <!--      <img src="../../assets/images/page-banner/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="page-banner-shape-2">-->
    <!--      <img src="../../assets/images/page-banner/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="page-banner-shape-3">-->
    <!--      <img src="../../assets/images/page-banner/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="page-banner-shape-4">-->
    <!--      <img src="../../assets/images/page-banner/shape-4.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "PageBanner",
  props: ["pageTitle"],
};
</script>

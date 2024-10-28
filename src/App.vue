<template>
  <div>
    <PreLoader v-if="isLoading" />
    <router-view />
    <BackToTop />
  </div>
</template>

<script>
import PreLoader from "./components/Layout/PreLoader";
import BackToTop from "./components/Layout/BackToTop";

export default {
  name: "App",
  components: {
    PreLoader,
    BackToTop,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

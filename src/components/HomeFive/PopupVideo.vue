<template>
  <div>
    <div class="video-area pt-100">
      <div class="container">
        <div class="video-view-content">
          <div class="video-image">
            <img src="../../assets/images/video/video-1.jpg" alt="image" />
          </div>

          <div
            class="video-btn"
            v-on:click="isPopupMethod(isPopup)"
            style="cursor: pointer"
          >
            <i class="ri-play-line"></i>
          </div>
        </div>
      </div>

      <div class="video-shape-1">
        <img src="../../assets/images/video/shape-1.png" alt="image" />
      </div>
      <div class="video-shape-2">
        <img src="../../assets/images/video/shape-2.png" alt="image" />
      </div>
    </div>

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupVideo",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    isPopupMethod(isPopup) {
      return (this.isPopup = !isPopup);
    },
  },
};
</script>

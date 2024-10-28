<template>
  <div>
    <div class="technology-area pb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-12">
            <div class="technology-content">
              <div class="tag">
                <img
                  src="../../assets/images/technology/tag-icon.png"
                  alt="image"
                />
              </div>

              <h3>Lightning-Fast Tech Support, Guaranteed</h3>
              <p>
                As a midsize software development company, we combine the best
                of both worlds. We have the focus and speed of the small IT
                outsourcing companies along with the scalability and expertise
                of the big ones.
              </p>
              <span><b>Regan Rosen,</b> CEO at Flod Agency</span>
            </div>
          </div>

          <div class="col-lg-8 col-md-12">
            <div class="technology-image">
              <img
                src="../../assets/images/technology/technology-1.jpg"
                alt="image"
              />

              <div
                class="video-btn"
                v-on:click="isPopupMethod(isPopup)"
                style="cursor: pointer"
              >
                <i class="ri-play-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="technology-shape-1">
        <img src="../../assets/images/technology/shape-1.png" alt="image" />
      </div>
      <div class="technology-shape-2">
        <img src="../../assets/images/technology/shape-2.png" alt="image" />
      </div>
      <div class="technology-shape-3">
        <img src="../../assets/images/technology/shape-1.png" alt="image" />
      </div>
      <div class="technology-shape-4">
        <img src="../../assets/images/technology/shape-2.png" alt="image" />
      </div>
      <div class="technology-shape-5">
        <img src="../../assets/images/technology/shape-3.png" alt="image" />
      </div>
      <div class="technology-shape-6">
        <img src="../../assets/images/technology/shape-4.png" alt="image" />
      </div>
      <div class="technology-shape-7">
        <img src="../../assets/images/technology/shape-3.png" alt="image" />
      </div>
      <div class="technology-shape-8">
        <img src="../../assets/images/technology/shape-4.png" alt="image" />
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
  name: "TechnologySupport",
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

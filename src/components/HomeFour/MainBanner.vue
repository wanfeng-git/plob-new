<template>
  <div class="main-banner-area without-banner-animation">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12">
          <div class="main-banner-content">
            <div class="tag wow fadeInLeft">
              <img
                src="../../assets/images/main-banner/banner-one/tag-icon.png"
                alt="image"
              />
              # Plob Best Startup Company.
            </div>
            <h1>We Are Here, To Help Your Startup Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at
              ut tincidunt porttitor molestie aliquet quam cursus. Rhoncus donec
              libero et volutpat erat posuere sagittis cursus posuere
            </p>

            <div class="banner-btn">
              <router-link to="/about-one" class="default-btn">
                Read More
                <i class="ri-arrow-right-line"></i>
                <span></span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="main-banner-image-wrap wow fadeInUp">
            <img
              src="../../assets/images/main-banner/banner-one/main-pic.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="main-banner-shape-1">
      <img
        src="../../assets/images/main-banner/banner-one/shape-1.png"
        alt="image"
      />
    </div>
    <div class="main-banner-shape-2">
      <img
        src="../../assets/images/main-banner/banner-one/shape-2.png"
        alt="image"
      />
    </div>
    <div class="main-banner-shape-3">
      <img
        src="../../assets/images/main-banner/banner-one/shape-3.png"
        alt="image"
      />
    </div>
    <div class="main-banner-shape-4">
      <img
        src="../../assets/images/main-banner/banner-one/shape-4.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

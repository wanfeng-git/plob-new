<template>
  <div class="features-area pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-features-box">
            <router-link to="/services-details">
              <img
                src="../../assets/images/features/features-1.png"
                alt="image"
              />
            </router-link>
            <h3>
              <router-link to="/services-details"
                >Strategic Planning</router-link
              >
            </h3>
            <p>
              Best Strategic planning dolor sit amet, consectetur adipiscing
              elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit
              nulla eget sodales dui pulvinar.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-features-box">
            <router-link to="/services-details">
              <img
                src="../../assets/images/features/features-2.png"
                alt="image"
              />
            </router-link>
            <h3>
              <router-link to="/services-details"
                >Research & Development</router-link
              >
            </h3>
            <p>
              Plob is totally digital technology based creative agency ipsum
              dolor sit amet consectetur adipiscing elit. Scelerisque amet odio
              velit eu auctor.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-features-box">
            <router-link to="/services-details">
              <img
                src="../../assets/images/features/features-3.png"
                alt="image"
              />
            </router-link>
            <h3>
              <router-link to="/services-details"
                >Design & Implimentation</router-link
              >
            </h3>
            <p>
              Business change dolor sit amet, consectetur adipiscing elit.
              Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget
              sodales dui pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="features-shape-1">
      <img src="../../assets/images/features/shape-1.png" alt="image" />
    </div>
    <div class="features-shape-2">
      <img src="../../assets/images/features/shape-2.png" alt="image" />
    </div>
    <div class="features-shape-3">
      <img src="../../assets/images/features/shape-3.png" alt="image" />
    </div>
    <div class="features-shape-4">
      <img src="../../assets/images/features/shape-4.png" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OurFeatures",
};
</script>

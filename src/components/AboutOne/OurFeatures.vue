<template>
  <div class="features-area pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center" v-if="features">
        <div
          class="col-lg-4 col-md-6"
          v-for="feature in features.featuresItems.slice(0, 3)"
          :key="feature.id"
        >
          <div class="single-features">
            <img :src="feature.image.data.attributes.url" alt="image" />
            <h3>
              {{ feature.title }}
            </h3>
            <p>{{ feature.shortDesc }}</p>

            <div class="features-btn">
              <a href="#" class="default-btn">
                {{ feature.btnText }}
                <i class="ri-arrow-right-line"></i>
                <span></span>
              </a>
            </div>
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
import axios from "axios";

export default {
  name: "OurFeatures",
  data() {
    return {
      features: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/ourfeature?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.features = attributes;
  },
};
</script>

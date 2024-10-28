<template>
  <div class="features-area pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center" v-if="features !== null">
        <div
          class="col-lg-4 col-md-6"
          v-for="feature in features.featuresItems"
          :key="feature.id"
        >
          <div class="single-features">
            <img
              class="img-size"
              :src="feature.image.data.attributes.url"
              alt="image"
            />
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

    <!--    <div class="features-shape-1">-->
    <!--      <img src="../../assets/images/features/shape-1.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="features-shape-2">-->
    <!--      <img src="../../assets/images/features/shape-2.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="features-shape-3">-->
    <!--      <img src="../../assets/images/features/shape-3.png" alt="image" />-->
    <!--    </div>-->
    <!--    <div class="features-shape-4">-->
    <!--      <img src="../../assets/images/features/shape-4.png" alt="image" />-->
    <!--    </div>-->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const features = ref(null);

onMounted(async () => {
  const response = await axios.get(
    "http://localhost:1337/api/ourfeature?populate=deep",
  );
  const {
    data: { attributes },
  } = response.data;
  features.value = attributes;
});
</script>
<style scoped>
.img-size {
  width: 205px;
  height: 210px;
}
</style>

<template>
  <div class="process-area">
    <div class="container">
      <div class="process-inner-box">
        <div class="row" v-if="process !== null">
          <div
            class="col-lg-3 col-sm-6"
            v-for="proces in process.singleProcess"
            :key="proces.id"
          >
            <div :class="proces.class">
              <i :class="proces.icon"></i>
              <p>{{ proces.text }}</p>
            </div>
          </div>
        </div>

        <div class="process-bar-shape">
          <img src="../../assets/images/process-bar.png" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OurProcess",
  data() {
    return {
      process: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/process?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.process = attributes;
  },
};
</script>

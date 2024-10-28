<template>
  <div class="services-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="services-details-information">
            <ServicesList></ServicesList>

            <ServicesContactInfo></ServicesContactInfo>
          </div>
        </div>

        <div class="col-lg-9 col-md-12">
          <div class="services-details-overview-content">
            <h3>{{ details[0].attributes.title }}</h3>
            <span v-html="details[0].attributes.richText"></span>
            <div class="overview-image">
              <img
                :src="details[0].attributes.overviewImage.data.attributes.url"
                alt="image"
              />

              <!--              <div class="shape-1">-->
              <!--                <img-->
              <!--                  src="../../assets/images/services-details/shape-1.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
              <!--              <div class="shape-2">-->
              <!--                <img-->
              <!--                  src="../../assets/images/services-details/shape-2.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
              <!--              <div class="shape-3">-->
              <!--                <img-->
              <!--                  src="../../assets/images/services-details/shape-3.png"-->
              <!--                  alt="image"-->
              <!--                />-->
              <!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesList from "./ServicesList.vue";
import ServicesContactInfo from "./ServicesContactInfo.vue";

export default {
  name: "ServicesDetails",
  components: {
    ServicesList,
    ServicesContactInfo,
  },
  props: ["servicesDetails"],
  data: function () {
    return {
      details: this.servicesDetails,
    };
  },
};
</script>

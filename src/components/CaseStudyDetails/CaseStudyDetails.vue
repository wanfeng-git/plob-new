<template>
  <div class="case-details-area ptb-100">
    <div class="container">
      <div class="case-details-image">
        <img
          :src="details[0].attributes.image.data.attributes.url"
          alt="image"
        />
      </div>

      <div class="row">
        <div class="col-lg-9 col-md-12">
          <h3>{{ details[0].attributes.title }}</h3>
          <span v-html="details[0].attributes.richText"></span>

          <!-- <div class="case-details-overview-image">
            <img
              :src="details[0].attributes.overviewImage.data.attributes.url"
              alt="image"
            />
          </div> -->

          <!-- <div class="case-details-overview-image">
            <img
              :src="details[0].attributes.overviewImageTwo.data.attributes.url"
              alt="image"
            />
          </div> -->
        </div>

        <div class="col-lg-3 col-md-12">
          <div class="case-details-information">
            <!-- <ul class="information-list"> -->
              <!-- <li>
                <span>Share On :</span>
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <i class="ri-twitter-fill"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
                <a href="https://www.messenger.com/" target="_blank">
                  <i class="ri-messenger-fill"></i>
                </a>
              </li>

              <li><span>Category :</span> Finance & Management</li>

              <li>
                <span>Client :</span>
                <a href="#" target="_blank">ThemeForest.com</a>
              </li>

              <li>
                <span>Website :</span>
                <a href="https://envytheme.com/" target="_blank"
                  >EnvyTheme.com</a
                >
              </li>

              <li><span>Date :</span> 24 March 2022</li>
            </ul> -->

            <div class="case-contact-info">
              <h3>创造奇迹</h3>

              <div class="info-box-one">
                <i class="ri-customer-service-line"></i>
                <a href="tel:3128959800">(0311) 990-2381</a>
              </div>

              <div class="info-box-two">
                <i class="ri-earth-line"></i>
                <a href="mailto:he.tong@hicity.world">he.tong@hicity.world</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseStudyDetails",
  props: ["caseStudyDetails"],
  data: function () {
    return {
      details: this.caseStudyDetails,
    };
  },
};
</script>

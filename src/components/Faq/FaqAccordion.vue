<template>
  <div class="faq-area ptb-100">
    <div class="container">
      <div class="faq-accordion accordion-box" v-if="accordions !== null">
        <AccordionSlot>
          <accordion-item
            v-for="accordion in accordions.accordionItem"
            :key="accordion.id"
          >
            <template v-slot:accordion-trigger>
              <button class="accordion-title">
                <i class="ri-add-line"></i>
                {{ accordion.title }}
              </button>
            </template>
            <template v-slot:accordion-content>
              <div class="accordion-body">
                <p>{{ accordion.description }}</p>
              </div>
            </template>
          </accordion-item>
        </AccordionSlot>
      </div>

      <div class="ticket-box">
        <h3>Have Any Question in Mind Please Call or Mail Us</h3>

        <div class="box-one">
          <i class="ri-customer-service-line"></i>
          <a href="tel:3128959800">(312) 895-9800</a>
        </div>
        <div class="box-two">
          <i class="ri-earth-line"></i>
          <a href="mailto:hello.me@plob.com">hello.me@plob.com</a>
        </div>
      </div>
    </div>

    <div class="faq-shape-1">
      <img src="../../assets/images/faq/shape-1.png" alt="image" />
    </div>
    <!-- <div class="faq-shape-2">
      <img src="../../assets/images/faq/shape-2.png" alt="image" />
    </div> -->
    <div class="faq-shape-3">
      <img src="../../assets/images/faq/shape-3.png" alt="image" />
    </div>
    <div class="faq-shape-4">
      <img src="../../assets/images/faq/shape-4.png" alt="image" />
    </div>
    <div class="faq-shape-5">
      <img src="../../assets/images/faq/shape-5.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AccordionSlot from "../Common/AccordionSlot";
import AccordionItem from "../Common/AccordionItem";

export default {
  name: "FaqAccordion",
  components: {
    AccordionSlot,
    AccordionItem,
  },
  data() {
    return {
      accordions: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/faq?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.accordions = attributes;
  },
};
</script>

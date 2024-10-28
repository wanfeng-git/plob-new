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
  name: "FaqAccordion2",
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
      "http://localhost:1337/api/faq2?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.accordions = attributes;
  },
};
</script>

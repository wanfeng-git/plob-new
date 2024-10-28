<template>
  <div class="faq-area ptb-100">
    <div class="container" v-if="accordions">
      <div class="section-title">
        <h2>{{ accordions.heading }}</h2>
        <p>
          {{ accordions.shortDesc }}
        </p>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <div class="faq-image">
            <img :src="accordions.image.data.attributes.url" alt="image" />
          </div>
        </div>

        <div class="col-lg-8 col-md-12">
          <div class="faq-accordion">
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
      </div>
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

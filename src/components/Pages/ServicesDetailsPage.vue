<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner
      v-if="details !== null"
      :pageTitle="details[0].attributes.title"
    />
    <div v-if="details !== null">
      <ServicesDetails v-bind:servicesDetails="details" />
    </div>
    <OurProcess />
    <BestPlans />
    <OverView class="pt-100" />
    <MainFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import ServicesDetails from "../ServicesDetails/ServicesDetails";
import OurProcess from "../ServicesDetails/OurProcess";
import BestPlans from "../Common/BestPlans";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";
import { useRoute } from "vue-router";

const details = ref(null);
const route = useRoute();

const fetchDetails = async (slug) => {
  const response = await axios.get(
    `http://localhost:1337/api/services?filters[slug][$eq]=${slug}&populate=deep`,
  );
  details.value = response.data.data;
};

onMounted(() => {
  const { slug } = route.params;
  fetchDetails(slug);
});
watch(
  () => route.params.slug,
  (newSlug) => {
    fetchDetails(newSlug);
  },
);
</script>

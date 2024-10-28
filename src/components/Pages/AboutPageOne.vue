<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="公司简介" />
    <!-- <OurFeatures /> -->
    <ProfessionalExperiences />
    <FunFacts class="ptb-100" />
    <TechSupport />
    <!-- <OurTeam class="pt-100 pb-70" /> -->
    <OurClients />
    <FaqAccordion />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
// import OurFeatures from "../AboutOne/OurFeatures";
import ProfessionalExperiences from "../AboutOne/ProfessionalExperiences";
import FunFacts from "../AboutOne/FunFacts";
import TechSupport from "../Common/TechSupport";
// import OurTeam from "../Common/OurTeam";
import OurClients from "../Common/OurClients";
import FaqAccordion from "../AboutOne/FaqAccordion";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "AboutPageOne",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    // OurFeatures,
    ProfessionalExperiences,
    FunFacts,
    TechSupport,
    // OurTeam,
    OurClients,
    FaqAccordion,
    OverView,
    MainFooter,
  },
};
</script>

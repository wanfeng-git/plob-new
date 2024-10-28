<template>
  <div>
    <TopHeader class="bg-color-wrap" />
    <MainNavbar />
    <PageBanner pageTitle="团队介绍" />
    <OurFeatures />
    <ProfessionalExperiences />
    <OurTeam class="pt-100 pb-70" />
    <FunFacts class="pt-100" />

    <TechnologySupport />
    <OurClients />
    <BestPlans />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import PageBanner from "../Common/PageBanner";
import OurFeatures from "../AboutTwo/OurFeatures";
import ProfessionalExperiences from "../Common/ProfessionalExperiences";
import FunFacts from "../AboutTwo/FunFacts";
import TechnologySupport from "../AboutTwo/TechnologySupport";
import OurClients from "../AboutTwo/OurClients";
import OurTeam from "../Common/OurTeam";
import BestPlans from "../Common/BestPlans";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "AboutPageTwo",
  components: {
    TopHeader,
    MainNavbar,
    PageBanner,
    OurFeatures,
    ProfessionalExperiences,
    FunFacts,
    OurTeam,
    TechnologySupport,
    OurClients,
    BestPlans,
    OverView,
    MainFooter,
  },
};
</script>

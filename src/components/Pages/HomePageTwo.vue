<template>
  <div>
    <MainHeader />
    <MainBanner />
    <OurFeatures />
    <ProfessionalExperiences />
    <PopupVideo />
    <OurServices />
    <FunFacts />
    <CaseStudies />
    <OurClients />
    <BestPlans class="bg-gradient-color" />
    <BlogPost />
    <OverView />
    <PartnerLogo />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "../Layout/MainHeader";
import MainBanner from "../HomeTwo/MainBanner";
import OurFeatures from "../HomeTwo/OurFeatures";
import ProfessionalExperiences from "../HomeTwo/ProfessionalExperiences";
import PopupVideo from "../HomeTwo/PopupVideo";
import OurServices from "../HomeTwo/OurServices";
import FunFacts from "../HomeTwo/FunFacts";
import CaseStudies from "../Common/CaseStudies";
import OurClients from "../HomeTwo/OurClients";
import BestPlans from "../Common/BestPlans";
import BlogPost from "../Common/BlogPost";
import OverView from "../Common/OverView";
import PartnerLogo from "../Common/PartnerLogo";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "HomePageTwo",
  components: {
    MainHeader,
    MainBanner,
    OurFeatures,
    ProfessionalExperiences,
    PopupVideo,
    OurServices,
    FunFacts,
    CaseStudies,
    OurClients,
    BestPlans,
    BlogPost,
    OverView,
    PartnerLogo,
    MainFooter,
  },
};
</script>

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
import MainBanner from "../HomeFive/MainBanner";
import OurFeatures from "../HomeFive/OurFeatures";
import ProfessionalExperiences from "../HomeFive/ProfessionalExperiences";
import PopupVideo from "../HomeFive/PopupVideo";
import OurServices from "../HomeFive/OurServices";
import FunFacts from "../HomeFive/FunFacts";
import CaseStudies from "../Common/CaseStudies";
import OurClients from "../HomeFive/OurClients";
import BestPlans from "../Common/BestPlans";
import BlogPost from "../Common/BlogPost";
import OverView from "../Common/OverView";
import PartnerLogo from "../Common/PartnerLogo";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "HomePageFive",
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

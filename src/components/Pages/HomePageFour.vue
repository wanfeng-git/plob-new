<template>
  <div>
    <MainNavbar />
    <MainBanner />
    <PartnerLogo />
    <OurFeatures />
    <ProfessionalExperiences />
    <OurServices />
    <TechSupport />
    <RecentCases />
    <OurClients />
    <BestPlans />
    <OurTeam class="pt-100 pb-70" />
    <BlogPost />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from "../Layout/MainNavbar";
import MainBanner from "../HomeFour/MainBanner";
import PartnerLogo from "../HomeFour/PartnerLogo";
import OurFeatures from "../HomeFour/OurFeatures";
import ProfessionalExperiences from "../Common/ProfessionalExperiences";
import OurServices from "../HomeFour/OurServices";
import TechSupport from "../Common/TechSupport";
import RecentCases from "../Common/RecentCases";
import OurClients from "../Common/OurClients";
import BestPlans from "../Common/BestPlans";
import OurTeam from "../Common/OurTeam";
import BlogPost from "../HomeFour/BlogPost";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "HomePageFour",
  components: {
    MainNavbar,
    MainBanner,
    PartnerLogo,
    OurFeatures,
    ProfessionalExperiences,
    OurServices,
    TechSupport,
    RecentCases,
    OurClients,
    BestPlans,
    OurTeam,
    BlogPost,
    OverView,
    MainFooter,
  },
};
</script>

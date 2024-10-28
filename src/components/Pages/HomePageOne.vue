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
    <BlogPost style="display: none" />
    <OverView />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from "../Layout/MainNavbar";
import MainBanner from "../HomeOne/MainBanner";
import PartnerLogo from "../HomeOne/PartnerLogo";
import OurFeatures from "../HomeOne/OurFeatures";
import ProfessionalExperiences from "../Common/ProfessionalExperiences";
import OurServices from "../HomeOne/OurServices";
import TechSupport from "../Common/TechSupport";
import RecentCases from "../Common/RecentCases";
import OurClients from "../Common/OurClients";
import BestPlans from "../Common/BestPlans";
import BlogPost from "../Common/BlogPost";
import OverView from "../Common/OverView";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "HomePageOne",
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
    BlogPost,
    OverView,
    MainFooter,
  },
};
</script>

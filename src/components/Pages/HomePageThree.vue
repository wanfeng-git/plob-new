<template>
  <div>
    <TopHeader />
    <MainNavbar class="navbar-box-color" />
    <MainBanner />
    <PartnerLogo />
    <OurFeatures />
    <ProfessionalExperiences />
    <FunFacts />
    <TechnologySupport />
    <OurServices />
    <CaseStudies />
    <OurClients />
    <BestPlans class="bg-transparent-color" />
    <OurTeam />
    <OverView />
    <BlogPost />
    <MainFooter />
  </div>
</template>

<script>
import TopHeader from "../Layout/TopHeader";
import MainNavbar from "../Layout/MainNavbar";
import MainBanner from "../HomeThree/MainBanner";
import PartnerLogo from "../Common/PartnerLogo";
import OurFeatures from "../HomeThree/OurFeatures";
import ProfessionalExperiences from "../HomeThree/ProfessionalExperiences";
import FunFacts from "../HomeThree/FunFacts";
import TechnologySupport from "../HomeThree/TechnologySupport";
import OurServices from "../HomeThree/OurServices";
import CaseStudies from "../Common/CaseStudies";
import OurClients from "../Common/OurClients";
import BestPlans from "../Common/BestPlans";
import OurTeam from "../Common/OurTeam";
import OverView from "../Common/OverView";
import BlogPost from "../Common/BlogPost";
import MainFooter from "../Layout/MainFooter";

export default {
  name: "HomePageThree",
  components: {
    TopHeader,
    MainNavbar,
    MainBanner,
    PartnerLogo,
    OurFeatures,
    ProfessionalExperiences,
    FunFacts,
    TechnologySupport,
    OurServices,
    CaseStudies,
    OurClients,
    BestPlans,
    OurTeam,
    OverView,
    BlogPost,
    MainFooter,
  },
};
</script>

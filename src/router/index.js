import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import HomePageFour from "../components/Pages/HomePageFour";
import HomePageFive from "../components/Pages/HomePageFive";
import AboutPageOne from "../components/Pages/AboutPageOne";
import AboutPageTwo from "../components/Pages/AboutPageTwo";
import FeaturesPageOne from "../components/Pages/FeaturesPageOne";
import FeaturesPageTwo from "../components/Pages/FeaturesPageTwo";
import TestimonialsPage from "../components/Pages/TestimonialsPage";
import ServicesPageOne from "../components/Pages/ServicesPageOne";
import ServicesPageTwo from "../components/Pages/ServicesPageTwo";
import ServicesPageThree from "../components/Pages/ServicesPageThree";
import ServicesPageFour from "../components/Pages/ServicesPageFour";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import TeamPage from "../components/Pages/TeamPage";
import PricingPage from "../components/Pages/PricingPage";
import GalleryPage from "../components/Pages/GalleryPage";
import FaqPage from "../components/Pages/FaqPage";
import FaqPage2 from "../components/Pages/FaqPage2";
import EventsPage from "../components/Pages/EventsPage";
import EventsDetailsPage from "../components/Pages/EventsDetailsPage";
import AuthenticationPage from "../components/Pages/AuthenticationPage";
import MembershipLevelsPage from "../components/Pages/MembershipLevelsPage";
import TermsOfServicePage from "../components/Pages/TermsOfServicePage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import ComingSoonPage from "../components/Pages/ComingSoonPage";
import ErrorPage from "../components/Pages/ErrorPage";
import CaseStudyPageOne from "../components/Pages/CaseStudyPageOne";
import CaseStudyPageTwo from "../components/Pages/CaseStudyPageTwo";
import CaseStudyDetailsPage from "../components/Pages/CaseStudyDetailsPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogPageThree from "../components/Pages/BlogPageThree";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageOne },
  { path: "/home-two", component: HomePageTwo },
  { path: "/home-three", component: HomePageThree },
  { path: "/home-four", component: HomePageFour },
  { path: "/home-five", component: HomePageFive },
  { path: "/about-one", component: AboutPageOne },
  { path: "/about-two", component: AboutPageTwo },
  { path: "/features-one", component: FeaturesPageOne },
  { path: "/features-two", component: FeaturesPageTwo },
  { path: "/testimonials", component: TestimonialsPage },
  { path: "/services-one", component: ServicesPageOne },
  { path: "/services-two", component: ServicesPageTwo },
  { path: "/services-three", component: ServicesPageThree },
  { path: "/services-four", component: ServicesPageFour },
  { path: "/services-details/:slug", component: ServicesDetailsPage },
  { path: "/team-member", component: TeamPage },
  { path: "/pricing", component: PricingPage },
  { path: "/gallery", component: GalleryPage },
  { path: "/faq", component: FaqPage },
  { path: "/faq2", component: FaqPage2 },
  { path: "/events", component: EventsPage },
  { path: "/events-details", component: EventsDetailsPage },
  { path: "/profile-authentication", component: AuthenticationPage },
  { path: "/membership-levels", component: MembershipLevelsPage },
  { path: "/terms-of-service", component: TermsOfServicePage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/coming-soon", component: ComingSoonPage },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
  { path: "/case-study-one", component: CaseStudyPageOne },
  { path: "/case-study-two", component: CaseStudyPageTwo },
  { path: "/case-study-details/:slug", component: CaseStudyDetailsPage },
  { path: "/blog", component: BlogPageOne },
  { path: "/blog-right-sidebar", component: BlogPageTwo },
  { path: "/blog-standard", component: BlogPageThree },
  { path: "/blog-details/:slug", component: BlogDetailsPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

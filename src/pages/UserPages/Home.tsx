import { Benefits } from "../../components/LandingPage/Benefits";
import { Categories } from "../../components/LandingPage/Categories";
import { CTABanner } from "../../components/LandingPage/CTABanner";
import { FeaturedProducts } from "../../components/LandingPage/FeaturedProducts";
import { Footer } from "../../components/LandingPage/Footer";
import Navbar from "../../components/LandingPage/Header";
import { Hero } from "../../components/LandingPage/HeroSection";
import { HowItWorks } from "../../components/LandingPage/HowItsWork";
import { SellerPromo } from "../../components/LandingPage/SellerCTA";
import { Testimonials } from "../../components/LandingPage/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <SellerPromo />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

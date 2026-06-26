import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";

function LandingPage() {
  return (
    <>
      <HeroSection />

      <h2>Our Features</h2>

      <div className="features">
        <FeatureCard
          title="Web Development"
          description="Learn HTML, CSS, JavaScript and React."
        />

        <FeatureCard
          title="Artificial Intelligence"
          description="Learn Machine Learning and AI."
        />

        <FeatureCard
          title="Projects"
          description="Build real-world projects."
        />
      </div>

      <TestimonialSection />

      <CTABanner />
    </>
  );
}

export default LandingPage;
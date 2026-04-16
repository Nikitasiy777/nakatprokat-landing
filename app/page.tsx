import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VacancyCards from "./components/VacancyCards";
import InfoStrip from "./components/InfoStrip";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FormSection from "./components/FormSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VacancyCards />
        <InfoStrip />
        <HowItWorks />
        <TestimonialsSection />
        <FormSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

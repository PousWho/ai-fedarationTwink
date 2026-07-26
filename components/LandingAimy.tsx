'use client';

import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import TasksSection from './sections/TasksSection';
import AboutSection from './sections/AboutSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import ContactSection from './sections/ContactSection';
import Dither from './ui/Dither/dither';

export default function LandingAimy() {
  return (
    <div className="min-h-screen relative overflow-x-clip">
      {/* фон анимации на всю страницу; CSS-градиент — фолбэк, если WebGL недоступен или контекст потерян */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(120%_120%_at_70%_15%,#4a2580_0%,#22273F_55%,#12152a_100%)]">
        <Dither
          waveColor={[0.6, 0.2, 0.9]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      {/* контент поверх фона */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TasksSection />
          <AboutSection />
          <FeaturesSection />
          <HowItWorksSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { EngagementsBar } from '../components/EngagementsBar';
import { AboutSection } from '../components/AboutSection';
import { MethodologySection } from '../components/MethodologySection';
import { StatsBar } from '../components/StatsBar';
import { ServicesSection } from '../components/ServicesSection';
import { CTABanner } from '../components/CTABanner';
import { PortfolioSection } from '../components/PortfolioSection';
import { GuaranteesSection } from '../components/GuaranteesSection';
import { VideoSection } from '../components/VideoSection';
import { TeamSection } from '../components/TeamSection';
import { PartnersSection } from '../components/PartnersSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { BlogSection } from '../components/BlogSection';
export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <HeroSection />
      <EngagementsBar />
      <AboutSection />
      <MethodologySection />
      <StatsBar />
      <ServicesSection />
      <CTABanner />
      <PortfolioSection />
      <GuaranteesSection />
      <VideoSection />
      <TeamSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
    </div>);

}
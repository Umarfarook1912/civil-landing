import React from 'react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { AllAppsSection } from '../components/sections/AllAppsSection';
import { IncludedAppsSection } from '../components/sections/IncludedAppsSection';
import { CreativeCloudLogoSection } from '../components/sections/CreativeCloudLogoSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pt-16">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <AllAppsSection />
            <IncludedAppsSection />
            <CreativeCloudLogoSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <Footer />
            <ScrollToTop />
        </div>
    );
};
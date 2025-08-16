import React from 'react';
import { GTAHero } from './components/GTAHero';
import { VSLSection } from './components/VSLSection';
import { EnhancedPainSection } from './components/EnhancedPainSection';
import { AuthoritySection } from './components/AuthoritySection';
import { EnhancedMechanismSection } from './components/EnhancedMechanismSection';
import { RealPeopleSection } from './components/RealPeopleSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { CompleteFAQ } from './components/CompleteFAQ';
import { FinalOffer } from './components/FinalOffer';
import { Footer } from './components/Footer';
import { StickyButtonGTA } from './components/StickyButtonGTA';
import { useMetaPixel } from './hooks/useMetaPixel';

function App() {
  const { trackAddToCart, trackInitiateCheckout } = useMetaPixel();

  const handleCtaClick = () => {
    // Track Meta Pixel events
    trackAddToCart();
    trackInitiateCheckout();
    
    // Redirect to Kiwify checkout
    const checkoutUrl = 'https://pay.kiwify.com.br/qmLSEgs';
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
        <GTAHero onCtaClick={handleCtaClick} />
        <VSLSection onCtaClick={handleCtaClick} />
        <EnhancedPainSection onCtaClick={handleCtaClick} />
        <AuthoritySection onCtaClick={handleCtaClick} />
        <EnhancedMechanismSection onCtaClick={handleCtaClick} />
        <RealPeopleSection onCtaClick={handleCtaClick} />
        <TestimonialsCarousel onCtaClick={handleCtaClick} />
        <CompleteFAQ onCtaClick={handleCtaClick} />
        <FinalOffer onCtaClick={handleCtaClick} />
        <Footer />
      
      <StickyButtonGTA onCtaClick={handleCtaClick} />
    </div>
  );
}

export default App;
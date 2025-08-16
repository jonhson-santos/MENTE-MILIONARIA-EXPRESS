import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export const useMetaPixel = () => {
  useEffect(() => {
    // Meta Pixel base code
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Track ViewContent on load
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        value: 27,
        currency: 'BRL'
      });
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const trackAddToCart = () => {
    if (window.fbq) {
      window.fbq('track', 'AddToCart', {
        value: 27,
        currency: 'BRL'
      });
    }
  };

  const trackInitiateCheckout = () => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 27,
        currency: 'BRL'
      });
    }
  };

  const trackPurchase = () => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 27,
        currency: 'BRL'
      });
    }
  };

  return {
    trackAddToCart,
    trackInitiateCheckout,
    trackPurchase
  };
};
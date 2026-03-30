'use client';

import { useEffect } from 'react';

export default function LanguageSwitcher() {
  useEffect(() => {
    // Get current language from URL
    const params = new URLSearchParams(window.location.search);
    const currentLang = params.get('lang') || 'en';
    
    // Update active class based on current language
    const updateActiveLanguage = () => {
      const nlLink = document.querySelector('a[href="?lang=nl"]');
      const enLink = document.querySelector('a[href="?lang=en"]');
      
      if (nlLink && enLink) {
        nlLink.classList.remove('active');
        enLink.classList.remove('active');
        
        if (currentLang === 'nl') {
          nlLink.classList.add('active');
        } else {
          enLink.classList.add('active');
        }
      }
    };
    
    updateActiveLanguage();
    
    // Also update when navigation happens (for client-side routing)
    const handleNavigation = () => {
      const newParams = new URLSearchParams(window.location.search);
      const newLang = newParams.get('lang') || 'en';
      updateActiveLanguage();
    };
    
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);
  
  return null;
}
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LanguageSwitcherInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en';

  const setLang = (lang) => {
    const params = new URLSearchParams(searchParams.toString());
    if (lang === 'en') {
      params.delete('lang');
    } else {
      params.set('lang', lang);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <nav className="nav-links">
      <button
        className={`nav-link ${currentLang === 'nl' ? 'active' : ''}`}
        onClick={() => setLang('nl')}
        aria-label="Switch to Dutch"
      >
        NL
      </button>
      <button
        className={`nav-link ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </nav>
  );
}

export function LanguageSwitcher() {
  return (
    <Suspense fallback={null}>
      <LanguageSwitcherInner />
    </Suspense>
  );
}

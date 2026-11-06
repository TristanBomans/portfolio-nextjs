'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const LANGS = [
  { code: 'en', label: 'EN', aria: 'Switch to English' },
  { code: 'nl', label: 'NL', aria: 'Switch to Dutch' },
];

function LanguageSwitcherInner() {
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') === 'nl' ? 'nl' : 'en';
  const index = LANGS.findIndex((l) => l.code === currentLang);

  const setLang = (lang) => {
    if (lang === currentLang) return;
    const params = new URLSearchParams(searchParams.toString());
    if (lang === 'en') params.delete('lang');
    else params.set('lang', lang);
    const query = params.toString();
    const url = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;

    // Native history update: Next syncs useSearchParams with it, so the
    // page re-renders in place — no navigation, no RSC fetch, no scroll jump.
    window.history.replaceState(null, '', url);
  };

  return (
    <nav
      className="nav-links seg"
      role="radiogroup"
      aria-label="Language"
      style={{ '--seg-count': LANGS.length, '--seg-index': index }}
    >
      <span className="seg-thumb" aria-hidden="true" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          role="radio"
          aria-checked={currentLang === l.code}
          className={`nav-link ${currentLang === l.code ? 'active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-label={l.aria}
        >
          {l.label}
        </button>
      ))}
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

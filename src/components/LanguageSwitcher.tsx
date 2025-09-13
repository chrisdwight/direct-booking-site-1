import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-separator">|</span>
      <button
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;

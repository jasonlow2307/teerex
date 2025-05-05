import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  onLanguageChange?: (lang: string) => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <div className="flex items-center border border-black/10 rounded-md overflow-hidden">
      <button
        className={`px-2 py-1 text-sm ${
          currentLang === "en" ? "bg-black text-white" : "bg-transparent"
        }`}
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`px-2 py-1 text-sm ${
          currentLang === "zh" ? "bg-black text-white" : "bg-transparent"
        }`}
        onClick={() => handleLanguageChange("zh")}
        aria-label="Switch to Chinese"
      >
        中
      </button>
      <button
        className={`px-2 py-1 text-sm ${
          currentLang === "ms" ? "bg-black text-white" : "bg-transparent"
        }`}
        onClick={() => handleLanguageChange("ms")}
        aria-label="Switch to Malay"
      >
        MS
      </button>
      <button
        className={`px-2 py-1 text-sm ${
          currentLang === "ta" ? "bg-black text-white" : "bg-transparent"
        }`}
        onClick={() => handleLanguageChange("ta")}
        aria-label="Switch to Tamil"
      >
        TA
      </button>
    </div>
  );
};

export default LanguageSwitcher;

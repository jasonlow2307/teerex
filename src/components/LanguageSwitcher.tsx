import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-black/5 transition-colors"
        aria-label="Change language"
      >
        <Icon icon="mdi:translate" width="20" height="20" />
        <span>{currentLanguage === "en" ? "EN" : "中文"}</span>
        <Icon icon="mdi:chevron-down" width="16" height="16" />
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[120px]">
        <button
          onClick={() => changeLanguage("en")}
          className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-black/5 ${
            currentLanguage === "en" ? "font-medium bg-black/5" : ""
          }`}
        >
          <Icon icon="circle-flags:uk" width="20" height="20" />
          <span>{t("languageSwitcher.english")}</span>
        </button>
        <button
          onClick={() => changeLanguage("zh")}
          className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-black/5 ${
            currentLanguage === "zh" ? "font-medium bg-black/5" : ""
          }`}
        >
          <Icon icon="circle-flags:cn" width="20" height="20" />
          <span>{t("languageSwitcher.mandarin")}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

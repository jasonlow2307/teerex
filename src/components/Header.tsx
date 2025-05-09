import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icon } from "@iconify/react/dist/iconify.js";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Add current language state to ensure proper re-rendering
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleNavigation = (path: string) => {
    navigate(path);
    // Close mobile menu if it's open
    if (mobileMenuOpen) setMobileMenuOpen(false);
    // Scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    // Don't close mobile menu when changing language
  };

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChanged = () => {
      setCurrentLang(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent shadow-none py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/logo.svg"
              width={100}
              alt="Logo"
              className="w-[350px] md:w-[400px]"
            />
            {/* <div className="text-lg md:text-2xl font-semibold">
              {t("common.subtitle")}
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <span
              onClick={() => handleNavigation("/services")}
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              {t("common.services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              onClick={() => handleNavigation("/about")}
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              {t("common.aboutUs")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              onClick={() => handleNavigation("/contact")}
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              {t("common.contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              onClick={() => handleNavigation("/careers")}
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              {t("common.careers")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </span>

            <div className="ml-4">
              <LanguageSwitcher onLanguageChange={handleLanguageChange} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Switcher - Explicit implementation for mobile */}
            {/* <div className="flex items-center border border-black/10 rounded-md overflow-hidden">
              <button
                className={`px-2 py-1 text-sm ${
                  currentLang === "en"
                    ? "bg-black text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleLanguageChange("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={`px-2 py-1 text-sm ${
                  currentLang === "zh"
                    ? "bg-black text-white"
                    : "bg-transparent"
                }`}
                onClick={() => handleLanguageChange("zh")}
                aria-label="Switch to Chinese"
              >
                中
              </button>
            </div> */}

            <button
              className="p-2 focus:outline-none touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                <span
                  className={`h-0.5 bg-black transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-black transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0 w-0" : "opacity-100 w-4"
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-black transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 mt-[73px] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 pb-2 flex flex-col gap-2">
          {/* Home link */}
          <div
            className="py-4 border-b border-black/10 font-medium flex items-center gap-3 active:bg-gray-50"
            onClick={() => handleNavigation("/")}
          >
            <Icon icon="mdi:home-outline" width="24" height="24" />
            <span>{t("common.home")}</span>
          </div>
          <div
            className="py-4 border-b border-black/10 font-medium flex items-center gap-3 active:bg-gray-50"
            onClick={() => handleNavigation("/services")}
          >
            <Icon
              icon="mdi:file-document-multiple-outline"
              width="24"
              height="24"
            />
            <span>{t("common.services")}</span>
          </div>
          <div
            className="py-4 border-b border-black/10 font-medium flex items-center gap-3 active:bg-gray-50"
            onClick={() => handleNavigation("/about")}
          >
            <Icon icon="mdi:information-outline" width="24" height="24" />
            <span>{t("common.aboutUs")}</span>
          </div>
          <div
            className="py-4 border-b border-black/10 font-medium flex items-center gap-3 active:bg-gray-50"
            onClick={() => handleNavigation("/contact")}
          >
            <Icon icon="mdi:email-outline" width="24" height="24" />
            <span>{t("common.contact")}</span>
          </div>
          <div
            className="py-4 border-b border-black/10 font-medium flex items-center gap-3 active:bg-gray-50"
            onClick={() => handleNavigation("/careers")}
          >
            <Icon icon="mdi:briefcase-outline" width="24" height="24" />
            <span>{t("common.careers")}</span>
          </div>

          {/* Mobile Language Switcher in the menu as well */}
          <div className="py-4  font-medium">
            <p className="mb-2 text-black/60 text-sm flex items-center gap-2">
              <Icon icon="mdi:translate" width="20" height="20" />
              {t("common.language")}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <button
                className={`px-4 py-2 rounded-md text-sm ${
                  currentLang === "en"
                    ? "bg-black text-white"
                    : "bg-black/5 hover:bg-black/10 active:bg-black/15"
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm ${
                  currentLang === "zh"
                    ? "bg-black text-white"
                    : "bg-black/5 hover:bg-black/10 active:bg-black/15"
                }`}
                onClick={() => handleLanguageChange("zh")}
              >
                中文
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm ${
                  currentLang === "ms"
                    ? "bg-black text-white"
                    : "bg-black/5 hover:bg-black/10 active:bg-black/15"
                }`}
                onClick={() => handleLanguageChange("ms")}
              >
                Bahasa Melayu
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm ${
                  currentLang === "ta"
                    ? "bg-black text-white"
                    : "bg-black/5 hover:bg-black/10 active:bg-black/15"
                }`}
                onClick={() => handleLanguageChange("ta")}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>

        {/* Social links at the bottom */}
        <div className="mt-4 px-6 py-4 border-t border-black/10">
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/+60128186343"
              aria-label="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 active:bg-black/15"
            >
              <Icon icon="mdi:whatsapp" width="24" height="24" />
            </a>
            <a
              href="https://www.instagram.com/teerexassociates/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 active:bg-black/15"
            >
              <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
            <a
              href="https://www.facebook.com/people/Tee-Rex-Associates-Chartered-Accountants-%E9%9C%B8%E7%8E%8B%E7%89%B9%E8%AE%B8%E4%BC%9A%E8%AE%A1%E5%B8%88/61561326090219/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 active:bg-black/15"
            >
              <Icon icon="mdi:facebook" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Custom navigation function that handles both navigation and smooth scrolling
  const handleNavigation = (path: string) => {
    // First navigate to the page
    navigate(path);

    // Then smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`w-full py-6 border-b border-black/10 sticky top-0 bg-[#f2efe8] z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/src/assets/images/dino.png"
              width={70}
              alt="Tee Rex Logo"
            />
            <div className="text-2xl font-semibold">{t("common.title")}</div>
          </div>
        </div>
        <div className="flex items-center gap-8">
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
            onClick={() => handleNavigation("/careers")}
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            {t("common.careers")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
          <span
            onClick={() => handleNavigation("/contact")}
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            {t("common.contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;

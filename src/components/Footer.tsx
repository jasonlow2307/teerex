import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Modified navigation function to use query parameters instead of localStorage
  const handleNavigation = (path: string, serviceId?: string) => {
    // If a service ID is provided, append it as a query parameter
    const finalPath = serviceId ? `${path}?service=${serviceId}` : path;

    // Navigate to the page
    navigate(finalPath);

    // Then smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-24 pb-12 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo_square.svg"
                alt="Tee Rex & Associates Logo"
                className="w-12 h-12 rounded-lg"
                onClick={() => handleNavigation("/")}
                style={{ cursor: "pointer" }}
              />
              <div
                className="text-xl font-bold cursor-pointer"
                onClick={() => handleNavigation("/")}
              >
                Tee Rex & Associates
              </div>
            </div>
            <p className="text-black/70 mb-6">{t("footer.description")}</p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/+60128186343"
                aria-label="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:whatsapp" width="22" height="22" />
              </a>
              <a
                href="https://www.instagram.com/teerexassociates/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:instagram" width="22" height="22" />
              </a>
              <a
                href="https://www.facebook.com/people/Tee-Rex-Associates-Chartered-Accountants-%E9%9C%B8%E7%8E%8B%E7%89%B9%E8%AE%B8%E4%BC%9A%E8%AE%A1%E5%B8%88/61561326090219/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:facebook" width="22" height="22" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">{t("footer.services")}</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/services", "form-be-e-m")}
                >
                  {t("contactForm.taxFilingBE")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/services", "form-p")}
                >
                  {t("contactForm.taxFilingP")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/services", "form-b")}
                >
                  {t("contactForm.taxFilingB")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() =>
                    handleNavigation("/services", "form-b-account")
                  }
                >
                  {t("contactForm.formBAccount")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/services", "form-c-pt")}
                >
                  {t("contactForm.formCPT")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">{t("footer.company")}</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/about")}
                >
                  {t("common.aboutUs")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/careers")}
                >
                  {t("common.careers")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
              <li>
                <span
                  className="relative group cursor-pointer inline-block"
                  onClick={() => handleNavigation("/contact")}
                >
                  {t("common.contact")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 text-center text-black/60">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

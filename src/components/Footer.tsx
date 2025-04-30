import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Custom navigation function that handles both navigation and smooth scrolling
  const handleNavigation = (path: string, serviceId?: string) => {
    if (serviceId) {
      localStorage.setItem("activeService", serviceId);
    }

    // First navigate to the page
    navigate(path);

    // Then smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-24 pb-12 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/src/assets/images/dino.png"
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
            <p className="text-black/70 mb-6">
              Professional accounting and business advisory services for
              businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/+60128186343"
                aria-label="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:whatsapp" width="25" height="25" />
              </a>
              <a
                href="https://www.instagram.com/teerexassociates/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:instagram" width="25" height="25" />
              </a>
              <a
                href="https://www.facebook.com/people/Tee-Rex-Associates-Chartered-Accountants-%E9%9C%B8%E7%8E%8B%E7%89%B9%E8%AE%B8%E4%BC%9A%E8%AE%A1%E5%B8%88/61561326090219/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon icon="mdi:facebook" width="25" height="25" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Services</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/services", "form-be-e-m")}
                >
                  Tax Filing - Form BE, E, M
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/services", "form-p")}
                >
                  Tax Filing - Form P
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/services", "form-b")}
                >
                  Tax Filing - Form B
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() =>
                    handleNavigation("/services", "form-b-account")
                  }
                >
                  Form B Account Management
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/services", "form-c-pt")}
                >
                  Form C, Form PT
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Company</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/about")}
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/careers")}
                >
                  Careers
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 text-center text-black/60">
          <p>
            © {new Date().getFullYear()} Tee Rex & Associates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

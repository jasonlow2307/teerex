import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    // Removed the curly braces that were wrapping all content
    <footer className="pt-24 pb-12 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/src/assets/images/dino.png"
                alt="Tee Rex & Associates Logo"
                className="w-12 h-12 rounded-lg"
              />
              <div className="text-xl font-bold">Tee Rex & Associates</div>
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
                <a
                  href="#tax"
                  className="hover:text-gray-600 transition-colors"
                >
                  Tax Filing - Form BE, E, M
                </a>
              </li>
              <li>
                <a
                  href="#statements"
                  className="hover:text-gray-600 transition-colors"
                >
                  Tax Filing - Form P
                </a>
              </li>
              <li>
                <a
                  href="#advisory"
                  className="hover:text-gray-600 transition-colors"
                >
                  Tax Filing - Form B
                </a>
              </li>
              <li>
                <a
                  href="#bookkeeping"
                  className="hover:text-gray-600 transition-colors"
                >
                  Form B Account Management
                </a>
              </li>
              <li>
                <a
                  href="#payroll"
                  className="hover:text-gray-600 transition-colors"
                >
                  Form C, Form PT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Company</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-gray-600 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-gray-600 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Resources</h3>
            <ul className="list-none p-0 space-y-4">
              <li>
                <a
                  href="#blog"
                  className="hover:text-gray-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-gray-600 transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-gray-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-gray-600 transition-colors"
                >
                  Privacy Policy
                </a>
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

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Extract service from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const serviceParam = queryParams.get("service");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <Header scrolled={scrolled} />

      {/* Page Title */}
      <section className="pt-28 pb-12 bg-[#f2efe8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t("common.contact")}</h1>
            <p className="text-xl text-black/70">
              {t("home.contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="col-span-3 flex flex-col justify-center">
              <ContactForm service={serviceParam || undefined} />
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:email-outline" width="24" height="24" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black/60 mb-1">
                      {t("common.email")}
                    </p>
                    <a
                      href="mailto:office@teerexassociates.com"
                      className="hover:underline"
                    >
                      office@teerexassociates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:phone-outline" width="24" height="24" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black/60 mb-1">
                      {t("common.phone")}
                    </p>
                    <a href="tel:+60128186343" className="hover:underline">
                      +60 12-818 6343
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:map-marker-outline"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black/60 mb-1">
                      {t("common.office")}
                    </p>
                    <p className="hover:underline">
                      <a
                        href="https://maps.app.goo.gl/4gSdgCccToUMcBNx9"
                        aria-label="Google Maps"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        No.149-G, Block J, Tanming Boulevard, <br />
                        Jalan Meranti Jaya 3/1, Taman Meranti Jaya, <br />
                        47120, Puchong, Selangor
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 flex gap-3 justify-center">
                  <a
                    href="https://wa.me/+60128186343"
                    aria-label="Whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f2efe8] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:whatsapp" width="20" height="20" />
                  </a>
                  <a
                    href="https://www.instagram.com/teerexassociates/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f2efe8] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:instagram" width="20" height="20" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Tee-Rex-Associates-Chartered-Accountants-%E9%9C%B8%E7%8E%8B%E7%89%B9%E8%AE%B8%E4%BC%9A%E8%AE%A1%E5%B8%88/61561326090219/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#f2efe8] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:facebook" width="20" height="20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.1062493639729!2d101.6052737!3d2.9794644999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38dedac49cd%3A0xf6c2ee610f8c7990!2s149-G%2C%20Jalan%20Meranti%20Jaya%203%2F1%2C%20Taman%20Meranti%20Jaya%2C%2047120%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1745984954554!5m2!1sen!2smy"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tee Rex & Associates Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

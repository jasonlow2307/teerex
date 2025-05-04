import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useDocumentTitle();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Header */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-12 pt-30 md:pt-70 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-black/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-black/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="/contact"
              className="px-10 py-5 bg-black !text-white rounded-lg hover:bg-black/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              {t("common.scheduleConsultation")}
            </a>
            <a
              href="/services"
              className="px-10 py-5 border-2 border-black text-black rounded-lg hover:bg-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              {t("common.exploreServices")}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f2efe8]/30" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#f2efe8] rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:file-document-outline" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("contactForm.taxFilingBE")}
              </h3>
              <p className="text-black/70 mb-6">
                {t("home.services.service1Description")}
              </p>
              <a
                href="/services?service=form-be-e-m"
                className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors"
              >
                <span>{t("common.learnMore")}</span>
                <Icon icon="mdi:arrow-right" className="ml-2" />
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#f2efe8] rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:account-tie-outline" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("contactForm.taxFilingB")}
              </h3>
              <p className="text-black/70 mb-6">
                {t("home.services.service2Description")}
              </p>
              <a
                href="/services?service=form-b"
                className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors"
              >
                <span>{t("common.learnMore")}</span>{" "}
                <Icon icon="mdi:arrow-right" className="ml-2" />
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#f2efe8] rounded-full flex items-center justify-center mb-6">
                <Icon
                  icon="mdi:office-building-outline"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("contactForm.formCPT")}
              </h3>
              <p className="text-black/70 mb-6">
                {t("home.services.service3Description")}
              </p>
              <a
                href="/services?service=form-c-pt"
                className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors"
              >
                <span>{t("common.learnMore")}</span>{" "}
                <Icon icon="mdi:arrow-right" className="ml-2" />
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors"
            >
              <span>{t("common.exploreServices")}</span>
              <Icon icon="mdi:arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-center md:!text-left">
                {t("home.about.title")}
              </h2>
              <div className="w-20 md:w-24 h-1 bg-black mb-5 md:mb-8 mx-auto md:mx-0"></div>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-center md:text-left">
                {t("home.about.desc1")}
              </p>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-center md:text-left">
                {t("home.about.desc2")}
              </p>
              <p className="text-base md:text-lg text-center md:text-left">
                {t("home.about.desc3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pl-5 mt-8 md:mt-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="18"
                      height="18"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base">
                    {t("home.about.certifiedProfessionals")}
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="18"
                      height="18"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base">
                    {t("home.about.industryExpertise")}
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="18"
                      height="18"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base">
                    {t("home.about.personalizedService")}
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="18"
                      height="18"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base">
                    {t("home.about.timelyDelivery")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-full bg-white p-3 md:p-4 rounded-xl shadow-lg">
                <img
                  src="/team.png"
                  alt="Tee Rex Team"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-48 md:h-48 bg-black/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16" id="testimonials">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.testimonials.title")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("home.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2efe8] flex items-center justify-center text-2xl font-bold">
                    L
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Lee Siao Mei</h4>
                  <p className="text-black/60 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-black/80 italic">
                "Tee Rex has been handling my business taxes for 5 years now.
                Their team is always professional, prompt, and helps me maximize
                my tax savings. Highly recommended!"
              </p>
              <div className="mt-4 flex">
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2efe8] flex items-center justify-center text-2xl font-bold">
                    T
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Tan Wei Ming</h4>
                  <p className="text-black/60 text-sm">Corporate Client</p>
                </div>
              </div>
              <p className="text-black/80 italic">
                "Our company switched to Tee Rex last year, and we couldn't be
                happier. Their attention to detail and strategic tax planning
                advice has saved us significant amounts. They're not just
                accountants; they're business partners."
              </p>
              <div className="mt-4 flex">
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#f2efe8] flex items-center justify-center text-2xl font-bold">
                    R
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-black/60 text-sm">Individual Client</p>
                </div>
              </div>
              <p className="text-black/80 italic">
                "Filing taxes used to be such a headache for me until I found
                Tee Rex. They make the process painless and are always available
                to answer my questions. The peace of mind they provide is
                priceless."
              </p>
              <div className="mt-4 flex">
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star" className="text-yellow-500" />
                <Icon icon="mdi:star-half" className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/50" id="contact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {t("home.contact.title")}
            </h2>
            <div className="w-20 md:w-24 h-1 bg-black mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-black/70 max-w-3xl mx-auto">
              {t("home.contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
            <div className="col-span-1 lg:col-span-3 flex flex-col justify-center order-2 lg:order-1">
              <ContactForm />
            </div>

            <div className="col-span-1 lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-md order-1 lg:order-2 mb-6 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {t("home.contact.infoTitle")}
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:email-outline"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-black/60 mb-1">
                      {t("common.email")}
                    </p>
                    <a
                      href="mailto:office@teerexassociates.com"
                      className="text-sm md:text-base hover:underline break-words"
                    >
                      office@teerexassociates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:phone-outline"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-black/60 mb-1">
                      {t("common.phone")}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+60128186343"
                        className="text-sm md:text-base hover:underline"
                      >
                        +60 12-818 6343
                      </a>
                      <a
                        href="tel:+60137786343"
                        className="text-sm md:text-base hover:underline"
                      >
                        +60 13-778 6343
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2efe8] flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:map-marker-outline"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-black/60 mb-1">
                      {t("common.office")}
                    </p>
                    <p className="text-sm md:text-base">
                      <a
                        href="https://maps.app.goo.gl/4gSdgCccToUMcBNx9"
                        aria-label="Google Maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        No.149-G, Block J, Tanming Boulevard, <br />
                        Jalan Meranti Jaya 3/1, Taman Meranti Jaya, <br />
                        47120, Puchong, Selangor
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-black/10 flex gap-3 justify-center">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

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
      <section className="pb-12 pt-24 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
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
      <section className="py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 !text-left">
                {t("home.about.title")}
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="mb-6 text-lg">{t("home.about.desc1")}</p>
              <p className="mb-6 text-lg">{t("home.about.desc2")}</p>
              <p className="text-lg">{t("home.about.desc3")}</p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <Icon icon="mdi:check" width="24" height="24" />
                  </div>
                  <div className="font-semibold">
                    {t("home.about.certifiedProfessionals")}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <Icon icon="mdi:check" width="24" height="24" />
                  </div>
                  <div className="font-semibold">
                    {t("home.about.industryExpertise")}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <Icon icon="mdi:check" width="24" height="24" />
                  </div>
                  <div className="font-semibold">
                    {t("home.about.personalizedService")}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <Icon icon="mdi:check" width="24" height="24" />
                  </div>
                  <div className="font-semibold">
                    {t("home.about.timelyDelivery")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full bg-white p-4 rounded-xl shadow-lg">
                <img
                  src="/team.png"
                  alt="Tee Rex Team"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/10 rounded-xl -z-10"></div>
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
      <section className="py-16 bg-[#f2efe8]/50" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.contact.title")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("home.contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="col-span-3 flex flex-col justify-center">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">
                {t("home.contact.infoTitle")}
              </h3>

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

                <div className="pt-6 mt-6 border-t border-black/10 flex gap-3">
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

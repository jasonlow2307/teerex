import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Careers = () => {
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
      <section className="pb-12 pt-30 md:pt-40 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-black/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-black/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            {t("careers.title")}
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("careers.whyJoin")}</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("careers.whyJoinSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:briefcase-outline" width="40" height="40" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("careers.profGrowth")}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {t("careers.profGrowthDesc")}
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:account-group" width="40" height="40" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("careers.collabCulture")}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {t("careers.collabCultureDesc")}
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:handshake" width="40" height="40" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("careers.clientImpact")}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {t("careers.clientImpactDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-center md:!text-left">
                {t("careers.ourCulture")}
              </h2>
              <div className="w-20 md:w-24 h-1 bg-black mb-5 md:mb-8 mx-auto md:mx-0"></div>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-center md:text-left">
                {t("careers.cultureDesc1")}
              </p>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-center md:text-left">
                {t("careers.cultureDesc2")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 pl-5 gap-4 md:gap-6 mt-6 md:mt-10">
                <div className="flex flex-row md:items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base flex items-center">
                    {t("careers.profDev")}
                  </div>
                </div>
                <div className="flex flex-row md:items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base flex items-center">
                    {t("careers.workLifeBalance")}
                  </div>
                </div>
                <div className="flex flex-row md:items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base flex items-center">
                    {t("careers.teamCollab")}
                  </div>
                </div>
                <div className="flex flex-row md:items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                    />
                  </div>
                  <div className="font-semibold text-md md:text-base flex items-center">
                    {t("careers.recognition")}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0 order-first md:order-last">
              <img
                src="/team.png"
                alt="Team at Tee Rex & Associates"
                className="rounded-xl shadow-lg w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-24 md:w-48 h-24 md:h-48 bg-black/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("careers.howApply")}</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("careers.howApplySubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t("careers.step1")}
                  </h3>
                  <p className="text-lg text-black/70 mb-4">
                    {t("careers.step1Desc")}{" "}
                    <a
                      href="mailto:office@teerexassociates.com"
                      className="text-black font-medium hover:underline"
                    >
                      office@teerexassociates.com
                    </a>
                  </p>
                  <p className="text-lg text-black/70">
                    {t("careers.step1Details")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t("careers.step2")}
                  </h3>
                  <p className="text-lg text-black/70">
                    {t("careers.step2Desc")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t("careers.step3")}
                  </h3>
                  <p className="text-lg text-black/70">
                    {t("careers.step3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">{t("careers.nextStep")}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80">
            {t("careers.nextStepDesc")}
          </p>

          <a
            href="mailto:office@teerexassociates.com"
            className="px-10 py-5 mt-5 bg-white text-black rounded-lg hover:bg-white/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium inline-flex items-center gap-3"
          >
            <span>{t("careers.emailApplication")}</span>
            <Icon icon="mdi:email-outline" width="24" height="24" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;

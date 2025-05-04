import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const About = () => {
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
      <section className="pb-8 md:pb-12 pt-30 md:pt-40 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
          <h1 className="text-3xl md:text-5xl font-bold mx-auto mb-4 md:mb-6 max-w-3xl leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-base md:text-xl mx-auto mb-6 md:mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full bg-black/5 rounded-xl overflow-hidden">
                <img
                  src="/team.png"
                  alt="Tee Rex Team"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 md:w-48 h-32 md:h-48 bg-[#f2efe8] rounded-xl -z-10"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-center md:!text-left">
                {t("about.ourStory")}
              </h2>
              <div className="w-24 h-1 bg-black mb-6 md:mb-8 mx-auto md:mx-0"></div>

              <p className="mb-4 md:mb-6 text-base md:text-lg">
                {t("about.storyPart1")}
              </p>

              <p className="mb-4 md:mb-6 text-base md:text-lg">
                {t("about.storyPart2")}
              </p>

              <p className="text-base md:text-lg">{t("about.storyPart3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("about.ourValues")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6 text-white">
                <Icon icon="mdi:shield-check" width="28" height="28" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {t("about.integrity")}
              </h3>
              <p className="text-sm md:text-base text-black/70">
                {t("about.integrityDesc")}
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6 text-white">
                <Icon icon="mdi:account-group" width="28" height="28" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {t("about.clientFocus")}
              </h3>
              <p className="text-sm md:text-base text-black/70">
                {t("about.clientFocusDesc")}
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6 text-white">
                <Icon icon="mdi:star" width="28" height="28" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {t("about.excellence")}
              </h3>
              <p className="text-sm md:text-base text-black/70">
                {t("about.excellenceDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("about.meetTeam")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
              {t("about.teamSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Lee"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Sarah Lee</h3>
              <p className="text-black/70 mb-4">{t("about.founder")}</p>
              <p className="text-black/70 max-w-xs mx-auto text-sm md:text-base">
                {t("about.founderDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Darren Yap"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Darren Yap</h3>
              <p className="text-black/70 mb-4">{t("about.taxDirector")}</p>
              <p className="text-black/70 max-w-xs mx-auto text-sm md:text-base">
                {t("about.taxDirectorDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Jessica Tan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Jessica Tan
              </h3>
              <p className="text-black/70 mb-4">
                {t("about.accountingManager")}
              </p>
              <p className="text-black/70 max-w-xs mx-auto text-sm md:text-base">
                {t("about.accountingManagerDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/70">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-center md:!text-left">
                {t("about.ourApproach")}
              </h2>
              <div className="w-24 h-1 bg-black mb-6 md:mb-8 mx-auto md:mx-0"></div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("about.step1")}
                    </h3>
                    <p className="text-sm md:text-base text-black/70">
                      {t("about.step1Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("about.step2")}
                    </h3>
                    <p className="text-sm md:text-base text-black/70">
                      {t("about.step2Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("about.step3")}
                    </h3>
                    <p className="text-sm md:text-base text-black/70">
                      {t("about.step3Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t("about.step4")}
                    </h3>
                    <p className="text-sm md:text-base text-black/70">
                      {t("about.step4Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid-cols-2 gap-3 md:gap-4 hidden sm:grid">
                <div className="aspect-square bg-white rounded-xl shadow-md p-4 md:p-6 flex items-center justify-center">
                  <Icon
                    icon="mdi:lightbulb-on"
                    width="48"
                    height="48"
                    className="md:w-16 md:h-16"
                  />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-4 md:p-6 flex items-center justify-center">
                  <Icon
                    icon="mdi:chart-line"
                    width="48"
                    height="48"
                    className="md:w-16 md:h-16"
                  />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-4 md:p-6 flex items-center justify-center">
                  <Icon
                    icon="mdi:handshake"
                    width="48"
                    height="48"
                    className="md:w-16 md:h-16"
                  />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-4 md:p-6 flex items-center justify-center">
                  <Icon
                    icon="mdi:shield-check"
                    width="48"
                    height="48"
                    className="md:w-16 md:h-16"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 md:w-48 h-32 md:h-48 bg-black/10 rounded-xl -z-10 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("about.credentials")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
              {t("about.credentialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Icon
                  icon="mdi:certificate"
                  width="56"
                  height="56"
                  className="md:w-16 md:h-16"
                />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Malaysian Institute of Accountants
              </h3>
              <p className="text-black/70 text-xs md:text-sm">
                Chartered Accountants
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Icon
                  icon="mdi:certificate"
                  width="56"
                  height="56"
                  className="md:w-16 md:h-16"
                />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Association of Chartered Certified Accountants
              </h3>
              <p className="text-black/70 text-xs md:text-sm">ACCA Members</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Icon
                  icon="mdi:certificate"
                  width="56"
                  height="56"
                  className="md:w-16 md:h-16"
                />
              </div>
              <h3 className="font-bold mb-2 text-base md:text-lg">
                Chartered Tax Institute of Malaysia
              </h3>
              <p className="text-black/70 text-xs md:text-sm">
                Certified Tax Professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            {t("about.readyToWork")}
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto text-white/80">
            {t("about.readyToWorkDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="/contact"
              className="px-6 md:px-10 py-3 md:py-5 bg-white text-black rounded-lg hover:bg-white/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              {t("common.scheduleConsultation")}
            </a>
            <a
              href="/services"
              className="px-6 md:px-10 py-3 md:py-5 border-2 border-white !text-white rounded-lg bg-transparent hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              {t("about.exploreServices")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

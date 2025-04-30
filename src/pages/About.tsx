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
      <section className="pb-12 pt-24 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full bg-black/5 rounded-xl overflow-hidden">
                <img
                  src="/team.png"
                  alt="Tee Rex Team"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f2efe8] rounded-xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4 !text-left">
                {t("about.ourStory")}
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>

              <p className="mb-6 text-lg">{t("about.storyPart1")}</p>

              <p className="mb-6 text-lg">{t("about.storyPart2")}</p>

              <p className="text-lg">{t("about.storyPart3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("about.ourValues")}</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:shield-check" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("about.integrity")}
              </h3>
              <p className="text-black/70">{t("about.integrityDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:account-group" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("about.clientFocus")}
              </h3>
              <p className="text-black/70">{t("about.clientFocusDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:star" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t("about.excellence")}
              </h3>
              <p className="text-black/70">{t("about.excellenceDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("about.meetTeam")}</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("about.teamSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mb-6 relative mx-auto w-56 h-56">
                <div className="w-full h-full rounded-full bg-[#f2efe8] overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-black/70 mb-4">{t("about.founder")}</p>
              <p className="text-black/70 max-w-xs mx-auto">
                {t("about.founderDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative mx-auto w-56 h-56">
                <div className="w-full h-full rounded-full bg-[#f2efe8] overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Darren Yap</h3>
              <p className="text-black/70 mb-4">{t("about.taxDirector")}</p>
              <p className="text-black/70 max-w-xs mx-auto">
                {t("about.taxDirectorDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative mx-auto w-56 h-56">
                <div className="w-full h-full rounded-full bg-[#f2efe8] overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Jessica Tan</h3>
              <p className="text-black/70 mb-4">
                {t("about.accountingManager")}
              </p>
              <p className="text-black/70 max-w-xs mx-auto">
                {t("about.accountingManagerDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-[#f2efe8]/70">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 !text-left">
                {t("about.ourApproach")}
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("about.step1")}
                    </h3>
                    <p className="text-black/70">{t("about.step1Desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("about.step2")}
                    </h3>
                    <p className="text-black/70">{t("about.step2Desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("about.step3")}
                    </h3>
                    <p className="text-black/70">{t("about.step3Desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("about.step4")}
                    </h3>
                    <p className="text-black/70">{t("about.step4Desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
                  <Icon icon="mdi:lightbulb-on" width="64" height="64" />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
                  <Icon icon="mdi:chart-line" width="64" height="64" />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
                  <Icon icon="mdi:handshake" width="64" height="64" />
                </div>
                <div className="aspect-square bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
                  <Icon icon="mdi:shield-check" width="64" height="64" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-black/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("about.credentials")}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {t("about.credentialsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Icon icon="mdi:certificate" width="64" height="64" />
              </div>
              <h3 className="font-bold mb-2">
                Malaysian Institute of Accountants
              </h3>
              <p className="text-black/70 text-sm">Chartered Accountants</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Icon icon="mdi:certificate" width="64" height="64" />
              </div>
              <h3 className="font-bold mb-2">
                Association of Chartered Certified Accountants
              </h3>
              <p className="text-black/70 text-sm">ACCA Members</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Icon icon="mdi:certificate" width="64" height="64" />
              </div>
              <h3 className="font-bold mb-2">
                Chartered Tax Institute of Malaysia
              </h3>
              <p className="text-black/70 text-sm">
                Certified Tax Practitioners
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Icon icon="mdi:certificate" width="64" height="64" />
              </div>
              <h3 className="font-bold mb-2">
                Malaysian Institute of Chartered Secretaries
              </h3>
              <p className="text-black/70 text-sm">
                Corporate Secretarial Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">{t("about.readyToWork")}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
            {t("about.readyToWorkDesc")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="/contact"
              className="px-10 py-5 bg-white text-black rounded-lg hover:bg-white/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              {t("common.scheduleConsultation")}
            </a>
            <a
              href="/services"
              className="px-10 py-5 border-2 border-white !text-white rounded-lg bg-transparent hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
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

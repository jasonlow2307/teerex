import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Define service translation keys mapping
const serviceTranslationKeys = {
  "form-be-e-m": "formBEM",
  "form-p": "formP",
  "form-b": "formB",
  "form-b-account": "formBAccount",
  "form-c-pt": "formCPT",
};

// Define service icon mapping
const getServiceIcon = (serviceId: string): string => {
  const iconMap: { [key: string]: string } = {
    "form-be-e-m": "mdi:file-document-outline",
    "form-p": "mdi:file-document-multiple",
    "form-b": "mdi:file-account",
    "form-b-account": "mdi:account-cash",
    "form-c-pt": "mdi:office-building",
  };
  return iconMap[serviceId] || "mdi:file-document-outline";
};

// Define service types
interface ServiceDetails {
  heading: string;
  content: string;
}

interface TranslatedService {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: ServiceDetails[];
  benefits: string[];
  process: string[];
  pricing: string;
}

const Services = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState("form-be-e-m");
  const { t } = useTranslation();
  const location = useLocation();

  // List of available service IDs
  const serviceIds = Object.keys(serviceTranslationKeys);

  // Helper function to get translated service data
  const getTranslatedService = (
    serviceId: keyof typeof serviceTranslationKeys
  ): TranslatedService => {
    const translationKey = serviceTranslationKeys[serviceId];

    // Safely get details as array
    let details;
    try {
      details = t(`services.serviceDetails.${translationKey}.details`, {
        returnObjects: true,
      });
      // Ensure it's an array
      details = Array.isArray(details) ? details : [];
    } catch (e) {
      details = [];
    }

    // Safely get benefits as array
    let benefits;
    try {
      benefits = t(`services.serviceDetails.${translationKey}.benefits`, {
        returnObjects: true,
      });
      // Ensure it's an array
      benefits = Array.isArray(benefits) ? benefits : [];
    } catch (e) {
      benefits = [];
    }

    // Safely get process as array
    let process;
    try {
      process = t(`services.serviceDetails.${translationKey}.process`, {
        returnObjects: true,
      });
      // Ensure it's an array
      process = Array.isArray(process) ? process : [];
    } catch (e) {
      process = [];
    }

    return {
      id: serviceId,
      icon: getServiceIcon(serviceId),
      title: t(`services.serviceDetails.${translationKey}.title`),
      description: t(`services.serviceDetails.${translationKey}.description`),
      details: details as ServiceDetails[],
      benefits: benefits as string[],
      process: process as string[],
      pricing: t(`services.serviceDetails.${translationKey}.pricing`),
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Extract service from URL query parameters instead of localStorage
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get("service");

    if (serviceParam && serviceIds.includes(serviceParam)) {
      setActiveService(serviceParam);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.search, serviceIds]);

  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-12 pt-24 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            {t("services.title")}
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Navigation - with consistent icon coloring */}
      <section className="pt-6 pb-4 sticky top-[104px] bg-[#f2efe8]/95 backdrop-blur-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto pb-2 scrollbar-hide">
            {serviceIds.map((serviceId) => {
              const service = getTranslatedService(
                serviceId as keyof typeof serviceTranslationKeys
              );
              return (
                <button
                  key={serviceId}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                    activeService === serviceId
                      ? "bg-black text-white shadow-md transform -translate-y-1 border-2 border-white"
                      : "bg-white/80 hover:bg-white hover:shadow-md text-black/80 hover:text-black border border-black/10"
                  }`}
                  onClick={() => setActiveService(serviceId)}
                >
                  <div className="flex items-center gap-2">
                    {activeService === serviceId && (
                      <Icon
                        icon={service.icon}
                        width="18"
                        height="18"
                        className="text-white/70"
                      />
                    )}
                    <span>{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {serviceIds.map((serviceId) => {
            const service = getTranslatedService(
              serviceId as keyof typeof serviceTranslationKeys
            );
            return (
              <div
                key={serviceId}
                className={`${
                  activeService === serviceId ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-16 items-start">
                  <div className="md:w-1/3">
                    <div className="sticky top-[220px]">
                      <div className="mb-8 flex items-center justify-center md:justify-start">
                        <div className="w-24 h-24 bg-[#f2efe8] rounded-full flex items-center justify-center shadow-md">
                          <Icon icon={service.icon} width="60" height="60" />
                        </div>
                      </div>
                      <h2 className="text-4xl font-bold mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg text-black/70 mb-8">
                        {service.description}
                      </p>

                      <div className="p-6 bg-white rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-4">
                          {t("services.pricing")}
                        </h3>
                        <p className="text-lg">{service.pricing}</p>
                      </div>

                      <div className="mt-10">
                        <Link
                          to={`/contact?service=${serviceId}`}
                          className="px-8 py-4 bg-black !text-white rounded-lg hover:bg-black/80 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium relative overflow-hidden group w-full block text-center"
                        >
                          <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                          <span className="relative">
                            {t("services.inquireService")}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-12">
                    {/* Service Details */}
                    <div className="space-y-8">
                      {Array.isArray(service.details) &&
                      service.details.length > 0 ? (
                        service.details.map((detail, index) => (
                          <div
                            key={index}
                            className="p-8 bg-white rounded-xl shadow-md"
                          >
                            <h3 className="text-2xl font-bold mb-4">
                              {detail.heading}
                            </h3>
                            <p className="text-lg text-black/70">
                              {detail.content}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 bg-white rounded-xl shadow-md">
                          <h3 className="text-2xl font-bold mb-4">
                            {service.title}
                          </h3>
                          <p className="text-lg text-black/70">
                            {service.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="p-8 bg-[#f2efe8]/50 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4">
                        {t("services.benefits")}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Array.isArray(service.benefits) &&
                          service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white text-sm mt-0.5">
                                ✓
                              </div>
                              <p className="text-base leading-relaxed">
                                {benefit}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="p-8 bg-[#f2efe8]/50 rounded-xl">
                      <h3 className="text-2xl font-bold mb-6">
                        {t("services.process")}
                      </h3>
                      <div className="space-y-6">
                        {Array.isArray(service.process) &&
                          service.process.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                                {index + 1}
                              </div>
                              <div>
                                <p className="text-base leading-relaxed mt-2">
                                  {step}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* FAQ */}
                    <div className="p-8 bg-white rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-6">
                        {t("services.faq")}
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-2">
                            {t("services.deadline")}
                          </h4>
                          <p className="text-black/70">
                            {t("services.deadlineAnswer")}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">
                            {t("services.documents")}
                          </h4>
                          <p className="text-black/70">
                            {t("services.documentsAnswer")}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">
                            {t("services.timeProcess")}
                          </h4>
                          <p className="text-black/70">
                            {t("services.timeProcessAnswer")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="p-8 bg-[#f2efe8] rounded-xl text-center">
                      <h3 className="text-2xl font-bold mb-4">
                        {t("services.readyStart")}
                      </h3>
                      <p className="mb-6 text-lg">
                        {t("services.contactForService")}
                      </p>
                      <Link
                        to={`/contact?service=${serviceId}`}
                        className="px-8 py-4 bg-black !text-white rounded-lg hover:bg-black/80 inline-block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
                      >
                        {t("common.scheduleConsultation")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f2efe8]/30">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("services.otherServices")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceIds
              .filter((serviceId) => serviceId !== activeService)
              .slice(0, 3)
              .map((serviceId) => {
                const service = getTranslatedService(
                  serviceId as keyof typeof serviceTranslationKeys
                );
                return (
                  <div
                    key={serviceId}
                    className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center cursor-pointer"
                    onClick={() => {
                      setActiveService(serviceId);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto">
                        <Icon icon={service.icon} width="32" height="32" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-black/70 mb-6">{service.description}</p>
                    <button
                      className="text-black font-medium hover:underline"
                      onClick={() => {
                        setActiveService(serviceId);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {t("services.learnMore")} →
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

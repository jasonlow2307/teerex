import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Define service translation keys mapping
const serviceCategories = {
  "tax-filing": {
    translationKey: "taxFiling",
    services: [
      "form-be-e-m",
      "form-p",
      "form-b",
      "form-b-account",
      "form-c-pt",
    ],
  },
  "business-services": {
    translationKey: "businessServices",
    services: [
      "business-consultancy",
      "secretarial-service",
      "management-account",
    ],
  },
  licensing: {
    translationKey: "licensing",
    services: ["premise-license", "worker-license", "signboard-license"],
  },
  "audit-tax": {
    translationKey: "auditTax",
    services: ["audit-services", "tax-services"],
  },
};

const serviceTranslationKeys = {
  // Tax filing services
  "form-be-e-m": "formBEM",
  "form-p": "formP",
  "form-b": "formB",
  "form-b-account": "formBAccount",
  "form-c-pt": "formCPT",

  // Business services
  "business-consultancy": "businessConsultancy",
  "secretarial-service": "secretarialService",
  "management-account": "managementAccount",

  // Licensing services
  "premise-license": "premiseLicense",
  "worker-license": "workerLicense",
  "signboard-license": "signboardLicense",

  // Audit and tax services
  "audit-services": "auditServices",
  "tax-services": "taxServices",
};

// Define service icon mapping
const getServiceIcon = (serviceId: string): string => {
  const iconMap: { [key: string]: string } = {
    // Tax filing services
    "form-be-e-m": "mdi:file-document-outline",
    "form-p": "mdi:file-document-multiple",
    "form-b": "mdi:file-account",
    "form-b-account": "mdi:account-cash",
    "form-c-pt": "mdi:office-building",

    // Business services
    "business-consultancy": "mdi:briefcase-outline",
    "secretarial-service": "mdi:notebook-outline",
    "management-account": "mdi:chart-bar",

    // Licensing services
    "premise-license": "mdi:store",
    "worker-license": "mdi:account-hard-hat",
    "signboard-license": "mdi:sign-caution",

    // Audit and tax services
    "audit-services": "mdi:clipboard-check-outline",
    "tax-services": "mdi:calculator",
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
  const [activeCategory, setActiveCategory] = useState("tax-filing");
  const [activeService, setActiveService] = useState("form-be-e-m");
  const [visibleService, setVisibleService] = useState("form-be-e-m");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useDocumentTitle();

  // List of all service IDs
  const allServiceIds = Object.keys(serviceTranslationKeys);

  // Helper function to get translated category name
  const getTranslatedCategoryName = (
    categoryId: keyof typeof serviceCategories
  ) => {
    return t(
      `services.categories.${serviceCategories[categoryId].translationKey}`
    );
  };

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

  // Handle URL query parameters for initial service
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get("service");

    if (serviceParam && allServiceIds.includes(serviceParam)) {
      // Find which category contains this service
      const category = Object.keys(serviceCategories).find((catId) =>
        serviceCategories[
          catId as keyof typeof serviceCategories
        ].services.includes(serviceParam)
      );

      if (category) {
        setActiveCategory(category);
        setActiveService(serviceParam);
        setVisibleService(serviceParam);
      }
    }
  }, [location.search, allServiceIds]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to update active service and URL
  const handleServiceChange = (serviceId: string) => {
    if (serviceId === activeService) return; // Skip if already on this service

    // Find which category this service belongs to
    const category = Object.keys(serviceCategories).find((catId) =>
      serviceCategories[
        catId as keyof typeof serviceCategories
      ].services.includes(serviceId)
    );

    if (!category) return;

    // Start transition - fade out
    setIsTransitioning(true);

    // Update URL immediately
    navigate(`/services?service=${serviceId}`, { replace: true });

    // After fade out completes, change the category and service
    setTimeout(() => {
      setActiveCategory(category);
      setVisibleService(serviceId);
      setActiveService(serviceId);

      // After content is changed, start fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Function to change category
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;

    // Start transition
    setIsTransitioning(true);

    // Get the first service of the selected category
    const firstServiceInCategory =
      serviceCategories[categoryId as keyof typeof serviceCategories]
        .services[0];

    // Update URL
    navigate(`/services?service=${firstServiceInCategory}`, { replace: true });

    // After fade out completes, change category and service
    setTimeout(() => {
      setActiveCategory(categoryId);
      setVisibleService(firstServiceInCategory);
      setActiveService(firstServiceInCategory);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-8 md:pb-12 pt-30 md:pt-40 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
          <h1 className="text-3xl md:text-5xl font-bold mx-auto mb-4 md:mb-6 max-w-3xl leading-tight">
            {t("services.title")}
          </h1>
          <p className="text-base md:text-xl mx-auto mb-6 md:mb-10 max-w-2xl text-black/70 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="pt-4 md:pt-6 pb-2 md:pb-4 sticky top-[66px] md:top-[75px] bg-[#f2efe8]/95 backdrop-blur-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-nowrap gap-2 md:gap-4 justify-start md:justify-center overflow-x-auto pb-2 scrollbar-hide">
            {Object.keys(serviceCategories).map((categoryId) => (
              <button
                key={categoryId}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 whitespace-nowrap text-sm md:text-base font-medium ${
                  activeCategory === categoryId
                    ? "bg-black text-white shadow-md transform -translate-y-1 border-2 border-white"
                    : "bg-white/80 hover:bg-white hover:shadow-md text-black/80 hover:text-black border border-black/10"
                }`}
                onClick={() => handleCategoryChange(categoryId)}
              >
                {getTranslatedCategoryName(
                  categoryId as keyof typeof serviceCategories
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation - with consistent icon coloring */}
      <section className="pt-2 md:pt-3 pb-2 md:pb-3 bg-[#f2efe8]/80 backdrop-blur-sm z-30 transition-all duration-300 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-nowrap gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto pb-1 scrollbar-hide">
            {serviceCategories[
              activeCategory as keyof typeof serviceCategories
            ].services.map((serviceId) => {
              const service = getTranslatedService(
                serviceId as keyof typeof serviceTranslationKeys
              );
              return (
                <button
                  key={serviceId}
                  className={`px-3 md:px-5 py-1.5 md:py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeService === serviceId
                      ? "bg-black/90 text-white shadow-sm"
                      : "bg-white/60 hover:bg-white hover:shadow-sm text-black/70 hover:text-black"
                  }`}
                  onClick={() => handleServiceChange(serviceId)}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      icon={service.icon}
                      width="16"
                      height="16"
                      className={
                        activeService === serviceId
                          ? "text-white/70"
                          : "text-black/70"
                      }
                    />
                    <span>{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            ref={contentRef}
            className={`transition-opacity duration-200 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{ minHeight: "600px" }} // Ensure consistent height to prevent layout shifts
          >
            {allServiceIds.map((serviceId) => {
              const service = getTranslatedService(
                serviceId as keyof typeof serviceTranslationKeys
              );
              return (
                <div
                  key={serviceId}
                  className={`${
                    visibleService === serviceId ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="w-full md:w-1/3">
                      <div className="md:sticky md:top-[220px]">
                        <div className="mb-6 md:mb-8 flex items-center justify-center md:justify-start">
                          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#f2efe8] rounded-full flex items-center justify-center shadow-md">
                            <Icon
                              icon={service.icon}
                              width="40"
                              height="40"
                              className="md:w-[60px] md:h-[60px]"
                            />
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
                          {service.title}
                        </h2>
                        <p className="text-base md:text-lg text-black/70 mb-6 md:mb-8 text-center md:text-left">
                          {service.description}
                        </p>

                        <div className="p-4 md:p-6 bg-white rounded-xl shadow-md mb-6 md:mb-0">
                          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                            {t("services.pricing")}
                          </h3>
                          <p className="text-base md:text-lg">
                            {service.pricing}
                          </p>
                        </div>

                        <div className="mt-6 md:mt-10 hidden md:block">
                          <Link
                            to={`/contact?service=${serviceId}`}
                            className="px-6 md:px-8 py-3 md:py-4 bg-black !text-white rounded-lg hover:bg-black/80 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium relative overflow-hidden group w-full block text-center"
                          >
                            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                            <span className="relative">
                              {t("services.inquireService")}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service content */}
                    <div className="md:w-2/3 space-y-8 md:space-y-12">
                      {/* Service Details */}
                      <div className="space-y-6 md:space-y-8">
                        {Array.isArray(service.details) &&
                        service.details.length > 0 ? (
                          service.details.map((detail, index) => (
                            <div
                              key={index}
                              className="p-5 md:p-8 bg-white rounded-xl shadow-md"
                            >
                              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                                {detail.heading}
                              </h3>
                              <p className="text-base md:text-lg text-black/70">
                                {detail.content}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="p-5 md:p-8 bg-white rounded-xl shadow-md">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                              {service.title}
                            </h3>
                            <p className="text-base md:text-lg text-black/70">
                              {service.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="p-5 md:p-8 bg-[#f2efe8]/50 rounded-xl">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                          {t("services.benefits")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {Array.isArray(service.benefits) &&
                            service.benefits.map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white text-xs md:text-sm mt-0.5">
                                  ✓
                                </div>
                                <p className="text-sm md:text-base leading-relaxed">
                                  {benefit}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div className="p-5 md:p-8 bg-[#f2efe8]/50 rounded-xl">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                          {t("services.process")}
                        </h3>
                        <div className="space-y-4 md:space-y-6">
                          {Array.isArray(service.process) &&
                            service.process.map((step, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 md:gap-4"
                              >
                                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                                  {index + 1}
                                </div>
                                <div>
                                  <p className="text-sm md:text-base leading-relaxed mt-1 md:mt-2">
                                    {step}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* FAQ */}
                      <div className="p-5 md:p-8 bg-white rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                          {t("services.faq")}
                        </h3>
                        <div className="space-y-4 md:space-y-6">
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">
                              {t("services.deadline")}
                            </h4>
                            <p className="text-sm md:text-base text-black/70">
                              {t("services.deadlineAnswer")}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">
                              {t("services.documents")}
                            </h4>
                            <p className="text-sm md:text-base text-black/70">
                              {t("services.documentsAnswer")}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">
                              {t("services.timeProcess")}
                            </h4>
                            <p className="text-sm md:text-base text-black/70">
                              {t("services.timeProcessAnswer")}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="p-5 md:p-8 bg-[#f2efe8] rounded-xl text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                          {t("services.readyStart")}
                        </h3>
                        <p className="mb-4 md:mb-6 text-base md:text-lg">
                          {t("services.contactForService")}
                        </p>
                        <Link
                          to={`/contact?service=${serviceId}`}
                          className="px-6 md:px-8 py-3 md:py-4 bg-black !text-white rounded-lg hover:bg-black/80 inline-block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
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
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 md:py-16 bg-[#f2efe8]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("services.otherServices")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {Object.keys(serviceCategories)
              .filter((catId) => catId !== activeCategory)
              .slice(0, 3)
              .map((categoryId) => {
                // Get the first service from each category
                const firstServiceId =
                  serviceCategories[
                    categoryId as keyof typeof serviceCategories
                  ].services[0];
                const service = getTranslatedService(
                  firstServiceId as keyof typeof serviceTranslationKeys
                );

                return (
                  <div
                    key={categoryId}
                    className="p-5 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center cursor-pointer"
                    onClick={() => {
                      handleCategoryChange(categoryId);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div className="mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto">
                        <Icon
                          icon={service.icon}
                          width="24"
                          height="24"
                          className="md:w-8 md:h-8"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                      {getTranslatedCategoryName(
                        categoryId as keyof typeof serviceCategories
                      )}
                    </h3>
                    <p className="text-sm md:text-base text-black/70 mb-4 md:mb-6">
                      {t(
                        `services.categoryDescriptions.${
                          serviceCategories[
                            categoryId as keyof typeof serviceCategories
                          ].translationKey
                        }`
                      )}
                    </p>
                    <button
                      className="text-black font-medium text-sm md:text-base hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryChange(categoryId);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {t("services.exploreServices")} →
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

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import OrderButton from "../components/OrderButton";
import Header from "../components/Header";

const ServiceDetails = [
  {
    id: "form-be-e-m",
    title: "Tax Filing - Form BE, E, M",
    icon: "mdi:file-document-outline",
    description:
      "Expert assistance with filing Forms BE, E, and M to ensure accurate submissions and compliance with tax regulations for both individuals and businesses.",
    details: [
      {
        heading: "Form BE (For Self-Employed Individuals)",
        content:
          "Form BE is used by resident individuals who have income from business sources. Our professional tax services ensure your Form BE is accurately completed and submitted on time, maximizing eligible deductions while maintaining full compliance with Malaysian tax laws.",
      },
      {
        heading: "Form E (For Employees)",
        content:
          "Form E is an employer's return of remuneration, required to be submitted by every employer who employs individuals in Malaysia. We help businesses accurately prepare and submit Form E to ensure compliance with employment tax regulations.",
      },
      {
        heading: "Form M (For Non-Residents)",
        content:
          "Form M is for non-resident individuals with Malaysian-sourced income. Our tax experts understand the complexities of international taxation and can help navigate the specific requirements for non-residents.",
      },
    ],
    benefits: [
      "Maximized tax deductions and rebates",
      "Compliance with the latest tax regulations",
      "Minimized risk of penalties and audits",
      "Expert handling of complex tax situations",
      "Electronic filing for faster processing",
    ],
    process: [
      "Initial consultation to understand your financial situation",
      "Collection and organization of all relevant financial documents",
      "Identification of applicable deductions and tax credits",
      "Preparation and verification of tax forms",
      "Electronic submission to LHDN",
      "Post-filing support and representation",
    ],
    pricing: "Starting from RM 300, depending on complexity",
  },
  {
    id: "form-p",
    title: "Tax Filing - Form P",
    icon: "mdi:file-document-multiple",
    description:
      "Expert assistance with filing Form P to ensure compliance with tax regulations and accurate submissions for partnerships and other entities.",
    details: [
      {
        heading: "Partnership Income Reporting",
        content:
          "Form P is specifically designed for partnerships to report their business income and allocate profits or losses to individual partners. Our expert tax consultants ensure accurate distribution of partnership income among partners and proper documentation of all business deductions.",
      },
      {
        heading: "Partnership Tax Compliance",
        content:
          "We help partnerships understand and meet their tax obligations, ensuring all income is correctly declared and partnership agreements are properly reflected in tax filings.",
      },
    ],
    benefits: [
      "Accurate allocation of partnership profits and losses",
      "Proper documentation of partner contributions and distributions",
      "Strategic tax planning for partnerships",
      "Compliance with partnership tax regulations",
      "Minimized tax liabilities through legal optimization",
    ],
    process: [
      "Review of partnership agreement and structure",
      "Detailed analysis of partnership income and expenses",
      "Allocation of income and losses according to partnership interests",
      "Preparation and verification of Form P",
      "Electronic submission to tax authorities",
      "Coordination with individual partners' tax filings",
    ],
    pricing:
      "Starting from RM 500, based on partnership complexity and number of partners",
  },
  {
    id: "form-b",
    title: "Tax Filing - Form B",
    icon: "mdi:file-account",
    description:
      "Professional assistance with filing Form B to ensure accurate submissions and compliance with tax regulations for sole proprietors and partnerships.",
    details: [
      {
        heading: "Business Income Reporting",
        content:
          "Form B is for resident individuals with business income. This includes sole proprietors, partners in partnerships, and freelancers. Our comprehensive Form B filing service ensures all business income and expenses are accurately reported while maximizing legitimate deductions.",
      },
      {
        heading: "Self-Employment Tax Management",
        content:
          "We provide expertise in handling the unique tax situations faced by self-employed individuals, including proper expense categorization, home office deductions, and business asset depreciation.",
      },
    ],
    benefits: [
      "Comprehensive business expense deductions",
      "Accurate income reporting from multiple business sources",
      "Strategic tax planning for business owners",
      "Proper documentation to support claimed deductions",
      "Guidance on estimated tax payments and planning",
    ],
    process: [
      "Business financial review and analysis",
      "Categorization and verification of business expenses",
      "Income calculation and documentation",
      "Identification of applicable business deductions",
      "Preparation and filing of Form B",
      "Year-round tax planning and consultation",
    ],
    pricing: "Starting from RM 400, dependent on business size and complexity",
  },
  {
    id: "form-b-account",
    title: "Form B Account Management",
    icon: "mdi:account-cash",
    description:
      "Expert management of Form B accounts to ensure compliance with tax regulations and accurate financial reporting for sole proprietors and partnerships.",
    details: [
      {
        heading: "Financial Statement Preparation",
        content:
          "We prepare comprehensive financial statements for your business that comply with accounting standards and provide clear insights into your business's financial health. These statements serve as the foundation for accurate Form B filing.",
      },
      {
        heading: "Bookkeeping and Financial Management",
        content:
          "Our account management services include year-round bookkeeping, expense tracking, revenue recognition, and financial analysis to ensure your business records are always accurate and ready for tax filing.",
      },
      {
        heading: "Business Advisory Services",
        content:
          "Beyond just managing your Form B accounts, we provide valuable business insights, profitability analysis, and financial planning to help your business grow and optimize its tax position.",
      },
    ],
    benefits: [
      "Real-time financial visibility for better business decisions",
      "Properly maintained financial records that withstand scrutiny",
      "Reduced tax preparation time and costs",
      "Early identification of tax-saving opportunities",
      "Professionally prepared financial statements for financing applications",
      "Year-round tax and financial planning support",
    ],
    process: [
      "Initial financial system setup and organization",
      "Regular bookkeeping and transaction categorization",
      "Quarterly financial statement preparation and review",
      "Ongoing tax planning and consultation",
      "Year-end financial statement preparation",
      "Form B preparation based on managed financial records",
    ],
    pricing:
      "Monthly retainer starting from RM 800, based on transaction volume and business complexity",
  },
  {
    id: "form-c-pt",
    title: "Form C, Form PT",
    icon: "mdi:office-building",
    description:
      "Comprehensive assistance with filing Form C and Form PT to ensure compliance with corporate tax regulations and accurate submissions for businesses.",
    details: [
      {
        heading: "Corporate Tax Filing (Form C)",
        content:
          "Form C is for companies incorporated in Malaysia. Our corporate tax specialists ensure accurate preparation and filing of Form C, including proper treatment of business income, capital allowances, and tax incentives that apply to your industry.",
      },
      {
        heading: "Petroleum Tax Filing (Form PT)",
        content:
          "Form PT is specifically for companies involved in petroleum operations. We have specialized expertise in the complex tax regulations governing the petroleum industry and ensure full compliance with industry-specific requirements.",
      },
      {
        heading: "Corporate Tax Planning",
        content:
          "We work proactively with corporate clients to implement tax-efficient structures, identify applicable tax incentives, and develop strategies to minimize tax liabilities while maintaining full compliance.",
      },
    ],
    benefits: [
      "Expert handling of complex corporate tax matters",
      "Industry-specific tax knowledge and incentive identification",
      "Strategic corporate tax planning and optimization",
      "Compliance with corporate tax filing requirements",
      "Representation during corporate tax audits",
      "Reduced risk of penalties and compliance issues",
    ],
    process: [
      "Comprehensive review of corporate financial statements",
      "Analysis of tax provisions and applicable incentives",
      "Calculation of capital allowances and tax adjustments",
      "Preparation and verification of Form C or Form PT",
      "Electronic submission to Inland Revenue Board",
      "Corporate tax planning for future periods",
    ],
    pricing: "Starting from RM 1,500, based on company size and complexity",
  },
];

const Services = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState("form-be-e-m");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Check if there's a service selected from homepage
    const savedService = localStorage.getItem("activeService");
    if (savedService) {
      setActiveService(savedService);
      localStorage.removeItem("activeService"); // Clean up after use
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-12 pt-24 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            Our Tax Filing & Accounting Services
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            Comprehensive tax filing and accounting solutions tailored to your
            specific needs
          </p>
        </div>
      </section>

      {/* Services Navigation - with consistent icon coloring */}
      <section className="pt-6 pb-4 sticky top-[104px] bg-[#f2efe8]/95 backdrop-blur-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-nowrap gap-4 justify-center overflow-x-auto pb-2 scrollbar-hide">
            {ServiceDetails.map((service) => (
              <button
                key={service.id}
                className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                  activeService === service.id
                    ? "bg-black text-white shadow-md transform -translate-y-1 border-2 border-white" // Added border & more translation
                    : "bg-white/80 hover:bg-white hover:shadow-md text-black/80 hover:text-black border border-black/10"
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    icon={service.icon}
                    width="18"
                    height="18"
                    className="text-white/70" // Consistent icon color
                  />
                  <span>
                    {activeService === service.id
                      ? `• ${service.title} •`
                      : service.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {ServiceDetails.map((service) => (
            <div
              key={service.id}
              className={`${activeService === service.id ? "block" : "hidden"}`}
            >
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3">
                  <div className="sticky top-[220px]">
                    <div className="mb-8 flex items-center justify-center md:justify-start">
                      <div className="w-24 h-24 bg-[#f2efe8] rounded-full flex items-center justify-center shadow-md">
                        <Icon icon={service.icon} width="60" height="60" />
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-black/70 mb-8">
                      {service.description}
                    </p>

                    <div className="p-6 bg-white rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-4">Pricing</h3>
                      <p className="text-lg">{service.pricing}</p>
                    </div>

                    <div className="mt-10">
                      <Link
                        to="/#contact"
                        className="px-8 py-4 bg-black !text-white rounded-lg hover:bg-black/80 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium relative overflow-hidden group w-full block text-center"
                      >
                        <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                        <span className="relative">
                          Inquire About This Service
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-12">
                  {/* Service Details */}
                  <div className="space-y-8">
                    {service.details.map((detail, index) => (
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
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="p-8 bg-[#f2efe8]/50 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white text-sm mt-0.5">
                            ✓
                          </div>
                          <p className="text-base leading-relaxed">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="p-8 bg-[#f2efe8]/50 rounded-xl">
                    <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                    <div className="space-y-6">
                      {service.process.map((step, index) => (
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
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          When is the deadline for filing this form?
                        </h4>
                        <p className="text-black/70">
                          The filing deadline depends on your business
                          structure. For most individual taxpayers, the deadline
                          is April 30th following the tax year. For companies,
                          it's 7 months after the close of the accounting
                          period.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          What documents do I need to provide?
                        </h4>
                        <p className="text-black/70">
                          You'll need to provide income statements, expense
                          receipts, previous tax returns, business financial
                          statements, and any relevant supporting documentation
                          for deductions or credits you're claiming.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          How long does the process take?
                        </h4>
                        <p className="text-black/70">
                          The processing time varies depending on the complexity
                          of your tax situation. Generally, we complete most tax
                          filings within 1-2 weeks after receiving all necessary
                          documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-8 bg-[#f2efe8] rounded-xl text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to get started?
                    </h3>
                    <p className="mb-6 text-lg">
                      Contact us today to schedule a consultation about your{" "}
                      {service.title} needs.
                    </p>
                    <Link
                      to="/#contact"
                      className="px-8 py-4 bg-black !text-white rounded-lg hover:bg-black/80 inline-block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f2efe8]/30">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Other Services You Might Need
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ServiceDetails.filter((service) => service.id !== activeService)
              .slice(0, 3)
              .map((service) => (
                <div
                  key={service.id}
                  className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center cursor-pointer"
                  onClick={() => {
                    setActiveService(service.id);
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
                  <button className="text-black font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <OrderButton />
    </div>
  );
};

export default Services;

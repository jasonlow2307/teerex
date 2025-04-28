import logo from "./assets/images/logo.svg";
import taxIcon from "./assets/images/tax-icon.svg";
import financeIcon from "./assets/images/finance-icon.svg";
import advisoryIcon from "./assets/images/advisory-icon.svg";
import bookkeepingIcon from "./assets/images/bookkeeping-icon.svg";
import payrollIcon from "./assets/images/payroll-icon.svg";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <header
        className={`py-6 border-b border-black/10 sticky top-0 bg-[#f2efe8] z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Tee Rex & Associates Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div className="text-2xl font-semibold">Tee Rex & Associates</div>
          </div>
          <div className="flex gap-8">
            <a
              href="#services"
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#testimonials"
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating Order Button */}
      <div className="fixed bottom-6 right-6 group z-50">
        <button className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black/90 transition-all duration-300 group-hover:scale-105">
          <Icon
            icon="mdi:order-bool-descending-variant"
            width="24"
            height="24"
          />
        </button>
        <div className="absolute -top-10 right-0 bg-black text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Place an order
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-32 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-black/5 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-black/5 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-6xl font-bold mx-auto mb-8 max-w-4xl leading-tight">
            Professional Accounting & Business Advisory Services
          </h1>
          <p className="text-2xl mx-auto mb-12 max-w-2xl text-black/70 leading-relaxed">
            Helping businesses grow through strategic financial management and
            expert accounting solutions
          </p>
          <div className="flex gap-6 justify-center">
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-black/80 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative">Schedule a Consultation</span>
            </button>
            <button className="px-8 py-4 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium">
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-black/70">Years of Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-black/70">Satisfied Clients</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-black/70">Dedicated Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 text-center relative" id="services">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-black/10 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="mb-16 text-black/70 text-xl max-w-3xl mx-auto">
            Comprehensive accounting and business advisory services to help your
            business thrive in today's competitive market
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group relative overflow-hidden">
              {/* Add subtle hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/0 to-[#f2efe8]/0 group-hover:from-[#f2efe8]/50 group-hover:to-[#f2efe8]/10 transition-all duration-500"></div>

              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 relative">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <img
                    src={taxIcon}
                    alt="Tax Planning & Preparation"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative">
                Tax Planning & Preparation
              </h3>
              <p className="text-black/70 leading-relaxed relative">
                Strategic tax planning and preparation services for businesses
                and individuals to minimize tax burden and ensure compliance
                with changing regulations.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={financeIcon}
                    alt="Financial Statements"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Financial Statements</h3>
              <p className="text-black/70 leading-relaxed">
                Preparation of accurate financial statements to provide clear
                insights into your business's financial health and performance
                metrics.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={advisoryIcon}
                    alt="Business Advisory"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Advisory</h3>
              <p className="text-black/70 leading-relaxed">
                Expert business consulting to help optimize operations, improve
                profitability, and achieve strategic goals in a dynamic market.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={bookkeepingIcon}
                    alt="Bookkeeping"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bookkeeping</h3>
              <p className="text-black/70 leading-relaxed">
                Comprehensive bookkeeping services to maintain accurate
                financial records and streamline accounting processes for better
                decision-making.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={payrollIcon}
                    alt="Payroll Services"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Payroll Services</h3>
              <p className="text-black/70 leading-relaxed">
                End-to-end payroll processing solutions to ensure timely and
                accurate compensation management with full regulatory
                compliance.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={financeIcon}
                    alt="Cash Flow Management"
                    className="w-10 h-10 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cash Flow Management</h3>
              <p className="text-black/70 leading-relaxed">
                Strategic cash flow planning and analysis to optimize your
                business's financial resources and ensure sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f2efe8]/50" id="about">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="w-full h-96 bg-black/10 rounded-xl overflow-hidden">
                {/* Placeholder for actual team image */}
                <div className="w-full h-full bg-[#f2efe8] flex items-center justify-center">
                  <div className="text-3xl font-light text-black/30">
                    Team Image
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f2efe8] rounded-xl shadow-lg flex items-center justify-center p-4">
                <div className="text-4xl font-bold">15+ Years Experience</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">
              About Tee Rex & Associates
            </h2>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <p className="mb-6 text-lg">
              At Tee Rex & Associates, we combine expertise with a personalized
              approach to accounting and business advisory services. Our team of
              certified professionals is dedicated to helping your business
              achieve financial success.
            </p>
            <p className="mb-6 text-lg">
              With over 15 years of experience serving businesses across
              multiple industries, we understand the unique challenges and
              opportunities that come with financial management in today's
              dynamic business environment.
            </p>
            <p className="mb-8 text-lg">
              Our mission is to provide clear, strategic financial guidance that
              empowers businesses to make informed decisions and achieve their
              goals.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="font-semibold">Certified Professionals</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="font-semibold">Industry Expertise</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="font-semibold">Personalized Service</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="font-semibold">Timely Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative" id="testimonials">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/10 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 bg-[#f2efe8] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative hover:-translate-y-2 cursor-default">
              <div className="absolute -top-4 left-10 text-6xl text-black/20 transition-transform duration-300 group-hover:scale-110">
                "
              </div>
              <p className="mb-8 text-lg relative z-10">
                Tee Rex & Associates transformed our financial processes and
                provided strategic tax planning that saved our business
                thousands. Their team is responsive, knowledgeable, and truly
                cares about our success.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-lg font-medium">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-xl">Jane Doe</h3>
                  <p className="text-black/70">CEO, Tech Innovations Inc.</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-[#f2efe8] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative hover:-translate-y-2 cursor-default">
              <div className="absolute -top-4 left-10 text-6xl text-black/20 transition-transform duration-300 group-hover:scale-110">
                "
              </div>
              <p className="mb-8 text-lg relative z-10">
                Working with Tee Rex has been a game-changer for our business.
                Their accounting expertise and business advisory services have
                helped us navigate complex financial challenges and set us up
                for sustainable growth.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-lg font-medium">
                  MS
                </div>
                <div>
                  <h3 className="font-bold text-xl">Michael Smith</h3>
                  <p className="text-black/70">Founder, Smith Manufacturing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium">
              View More Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#f2efe8]/70" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 !text-left">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="mb-8 text-lg">
                Ready to take your business's financial management to the next
                level? Contact us today to schedule a consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="mt-9">
                    <Icon icon={"mdi:map-marker"} width="30" height="30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Office</h3>
                    <p className="text-black/70">
                      NO.149-G, 1234 Business Avenue
                      <br />
                      JALAN MERANTI 3/1,
                      <br />
                      47120 Puchong, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="mt-4">
                    <Icon icon={"mdi:phone"} width="30" height="30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-black/70">
                      <a href="tel:+60128186343">+6012 818 6343</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="mt-4">
                    <Icon icon={"mdi:email"} width="30" height="30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-black/70">
                      <a href="mailto:office@teerexassociates.com">
                        office@teerexassociates.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Schedule a Consultation
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();

                    // Get form values
                    const firstName = e.currentTarget.elements.namedItem(
                      "firstName"
                    ) as HTMLInputElement;
                    const lastName = e.currentTarget.elements.namedItem(
                      "lastName"
                    ) as HTMLInputElement;
                    const email = e.currentTarget.elements.namedItem(
                      "email"
                    ) as HTMLInputElement;
                    const phone = e.currentTarget.elements.namedItem(
                      "phone"
                    ) as HTMLInputElement;
                    const service = e.currentTarget.elements.namedItem(
                      "service"
                    ) as HTMLSelectElement;
                    const message = e.currentTarget.elements.namedItem(
                      "message"
                    ) as HTMLTextAreaElement;

                    // Format the WhatsApp message
                    const whatsappMessage = encodeURIComponent(
                      `*New Consultation Request*\n\n` +
                        `*Name:* ${firstName.value} ${lastName.value}\n` +
                        `*Email:* ${email.value}\n` +
                        `*Phone:* ${phone.value}\n` +
                        `*Service:* ${service.value}\n\n` +
                        `*Message:*\n${message.value}`
                    );

                    // Open WhatsApp with the pre-typed message
                    window.open(
                      `https://wa.me/+60128186343?text=${whatsappMessage}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300 hover:border-black/40"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300 hover:border-black/40"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
                    >
                      <option>Tax Planning & Preparation</option>
                      <option>Financial Statements</option>
                      <option>Business Advisory</option>
                      <option>Bookkeeping</option>
                      <option>Payroll Services</option>
                      <option>Cash Flow Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
                      rows={4}
                      placeholder="Tell us about your needs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-black text-white rounded-lg hover:bg-black/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
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
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon icon="mdi:whatsapp" width="25" height="25" />
                </a>
                <a
                  href="https://www.instagram.com/teerexassociates/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon icon="mdi:instagram" width="25" height="25" />
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
                    Tax Planning
                  </a>
                </li>
                <li>
                  <a
                    href="#statements"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Financial Statements
                  </a>
                </li>
                <li>
                  <a
                    href="#advisory"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Business Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="#bookkeeping"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Bookkeeping
                  </a>
                </li>
                <li>
                  <a
                    href="#payroll"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Payroll Services
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
    </div>
  );
}

export default App;

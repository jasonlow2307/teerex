import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

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
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-16 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/80 to-[#f2efe8]/60 z-10"></div>
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-black/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-black/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full border-8 border-black/10"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full border-8 border-black/10"></div>
        </div>

        <div className="max-wp-7xl mx-auto px-8 mt-30 relative z-20">
          <div className="flex items-center justify-center mb-8 animate-fadeIn">
            <img
              src="/src/assets/images/logo.svg"
              alt="Tee Rex & Associates Logo"
              className="w-150 rounded-lg transform transition-all duration-1000 hover:scale-105"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mx-auto mb-8 max-w-4xl leading-tight font-spartan animate-slideUp">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Professional Accounting & Business Advisory Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl mx-auto mb-12 max-w-2xl text-black/70 leading-relaxed animate-slideUp animation-delay-200 font-quicksand">
            Helping businesses grow through strategic financial planning and
            expert accounting solutions
          </p>

          <div className="flex flex-wrap gap-6 justify-center animate-slideUp animation-delay-300">
            <a
              href="#contact"
              className="px-10 py-5 bg-black text-white rounded-lg hover:bg-black/80 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center gap-2">
                <span className="text-white">Schedule a Consultation</span>
                <Icon
                  icon="mdi:arrow-right"
                  width="20"
                  height="20"
                  className="transform group-hover:translate-x-1 transition-transform text-white"
                />
              </span>
            </a>
            <a
              href="#services"
              className="px-10 py-5 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium group"
            >
              <span className="flex items-center gap-2">
                <span>Explore Our Services</span>
                <Icon
                  icon="mdi:chevron-down"
                  width="20"
                  height="20"
                  className="transform group-hover:translate-y-1 transition-transform"
                />
              </span>
            </a>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeIn animation-delay-500">
            {/* Stats Cards with Hover Effects */}
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-black/70">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-black/70">Satisfied Clients</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
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
            {/* First service card */}
            <Link
              to="/services"
              onClick={() =>
                localStorage.setItem("activeService", "form-be-e-m")
              }
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group relative overflow-hidden block"
            >
              {/* Add subtle hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/0 to-[#f2efe8]/0 group-hover:from-[#f2efe8]/50 group-hover:to-[#f2efe8]/10 transition-all duration-500"></div>

              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 relative">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon
                    icon="mdi:file-document-outline"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative">
                Tax Filing - Form BE, E, M
              </h3>
              <p className="text-black/70 leading-relaxed relative">
                Expert assistance with filing Forms BE, E, and M to ensure
                accurate submissions and compliance with tax regulations for
                both individuals and businesses.
              </p>
            </Link>

            {/* Second service card */}
            <Link
              to="/services"
              onClick={() => localStorage.setItem("activeService", "form-p")}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group block"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    icon="mdi:file-document-multiple"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tax Filing - Form P</h3>
              <p className="text-black/70 leading-relaxed">
                Expert assistance with filing Form P to ensure compliance with
                tax regulations and accurate submissions for partnerships and
                other entities.
              </p>
            </Link>

            {/* Third service card */}
            <Link
              to="/services"
              onClick={() => localStorage.setItem("activeService", "form-b")}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group block"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:file-account" width="40" height="40" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tax Filing - Form B</h3>
              <p className="text-black/70 leading-relaxed">
                Professional assistance with filing Form B to ensure accurate
                submissions and compliance with tax regulations for sole
                proprietors and partnerships.
              </p>
            </Link>
            <div className="lg:col-span-3 flex justify-center gap-10">
              {/* Fourth service card */}
              <Link
                to="/services"
                onClick={() =>
                  localStorage.setItem("activeService", "form-b-account")
                }
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group block"
              >
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon icon="mdi:account-cash" width="40" height="40" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Form B Account Management
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Expert management of Form B accounts to ensure compliance with
                  tax regulations and accurate financial reporting for sole
                  proprietors and partnerships.
                </p>
              </Link>

              {/* Fifth service card */}
              <Link
                to="/services"
                onClick={() =>
                  localStorage.setItem("activeService", "form-c-pt")
                }
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center w-full group block"
              >
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-20 h-20 bg-[#f2efe8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon icon="mdi:office-building" width="40" height="40" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Form C, Form PT</h3>
                <p className="text-black/70 leading-relaxed">
                  Comprehensive assistance with filing Form C and Form PT to
                  ensure compliance with corporate tax regulations and accurate
                  submissions for businesses.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f2efe8]/50" id="about">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="w-full  bg-black/10 rounded-xl overflow-hidden">
                <img src="/src/assets/images/team.png" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 !text-left">
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

          {/* <div className="text-center mt-16">
            <button className="px-8 py-4 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium">
              View More Testimonials
            </button>
          </div> */}
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
                    <a
                      href="https://maps.app.goo.gl/jRuDS2H7Ygk19YpT8"
                      aria-label="Google Maps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-black/70">
                        NO.149-G, BLOCK J, TANMING BOULEVARD
                        <br />
                        JALAN MERANTI 3/1,
                        <br />
                        47120 Puchong, Malaysia
                      </p>
                    </a>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

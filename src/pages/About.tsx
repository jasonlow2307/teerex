import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
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
      {/* Header */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pb-12 pt-24 flex flex-col items-center text-center bg-[#f2efe8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/90 to-[#f2efe8]/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <h1 className="text-5xl font-bold mx-auto mb-6 max-w-3xl leading-tight">
            About Tee Rex & Associates
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            Professional accounting and financial services with over 15 years of
            experience helping businesses thrive
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
                  src="/src/assets/images/team.png"
                  alt="Tee Rex Team"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f2efe8] rounded-xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4 !text-left">Our Story</h2>
              <div className="w-24 h-1 bg-black mb-8"></div>

              <p className="mb-6 text-lg">
                Founded in 2010, Tee Rex & Associates began with a simple
                mission: to provide businesses with clear, strategic financial
                guidance that empowers informed decision-making and sustainable
                growth.
              </p>

              <p className="mb-6 text-lg">
                What started as a small practice has grown into a trusted
                financial partner for businesses across various industries. Our
                growth stems from our unwavering commitment to personalized
                service and technical excellence.
              </p>

              <p className="text-lg">
                Today, Tee Rex & Associates continues to uphold these founding
                principles while adapting to the ever-changing financial
                landscape and embracing innovative technologies to better serve
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#f2efe8]/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we serve
              our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:shield-check" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-black/70">
                We uphold the highest ethical standards in all our dealings,
                providing honest advice and maintaining confidentiality of
                client information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:account-group" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Focus</h3>
              <p className="text-black/70">
                We prioritize understanding each client's unique needs and
                goals, crafting personalized solutions that align with their
                specific circumstances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <Icon icon="mdi:star" width="32" height="32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-black/70">
                We strive for excellence in all aspects of our service,
                continuously improving our knowledge, processes, and client
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Our team of certified professionals brings expertise and
              dedication to every client engagement
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
              <p className="text-black/70 mb-4">Founder & Managing Director</p>
              <p className="text-black/70 max-w-xs mx-auto">
                With over 20 years of experience, Sarah leads our team with
                expertise in complex tax matters and business advisory.
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
              <h3 className="text-2xl font-bold mb-2">Michael Lee</h3>
              <p className="text-black/70 mb-4">Tax Director</p>
              <p className="text-black/70 max-w-xs mx-auto">
                Michael specializes in corporate tax planning and compliance,
                helping businesses optimize their tax positions.
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
              <p className="text-black/70 mb-4">Accounting Manager</p>
              <p className="text-black/70 max-w-xs mx-auto">
                Jessica oversees our accounting services, ensuring accurate
                financial reporting and insightful business analysis.
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
                Our Approach
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Understanding Your Needs
                    </h3>
                    <p className="text-black/70">
                      We begin by listening carefully to understand your unique
                      business context, goals, and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Tailored Solutions
                    </h3>
                    <p className="text-black/70">
                      Our team develops customized strategies and solutions
                      aligned with your specific requirements and objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-black/70">
                      We execute with precision, ensuring all financial and tax
                      matters are handled accurately and efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                    <p className="text-black/70">
                      We provide continuous guidance, keeping you updated on
                      relevant changes and helping you adapt as needed.
                    </p>
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
            <h2 className="text-4xl font-bold mb-4">Our Credentials</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Our team maintains the highest professional standards through
              ongoing education and certification
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
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
            Let's discuss how our professional services can help your business
            succeed
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="/contact"
              className="px-10 py-5 bg-white text-black rounded-lg hover:bg-white/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="px-10 py-5 border-2 border-white !text-white rounded-lg bg-transparent hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium"
            >
              Explore Our Services
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

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  // Map service IDs to human-readable names for display
  const serviceNames = {
    "form-be-e-m": "Tax Filing - Form BE, E, M",
    "form-p": "Tax Filing - Form P",
    "form-b": "Tax Filing - Form B",
    "form-b-account": "Form B Account Management",
    "form-c-pt": "Form C, Form PT",
  };

  // Get the service name if a valid service ID was provided
  const selectedService = serviceParam
    ? serviceNames[serviceParam as keyof typeof serviceNames] || null
    : null;

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
            {selectedService
              ? `Inquire About ${selectedService}`
              : "Get in Touch With Us"}
          </h1>
          <p className="text-xl mx-auto mb-10 max-w-2xl text-black/70 leading-relaxed">
            {selectedService
              ? `Complete the form below to schedule a consultation about our ${selectedService} services.`
              : "Ready to take your business's financial management to the next level? Contact us today to schedule a consultation."}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="mb-8 text-lg">
                Our team of experts is ready to assist you with all your
                accounting and tax filing needs. Feel free to reach out through
                any of the following channels:
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="mt-1">
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
                  <div className="mt-1">
                    <Icon icon={"mdi:phone"} width="30" height="30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-black/70">
                      <a href="tel:+60128186343" className="hover:underline">
                        +6012 818 6343
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="mt-1">
                    <Icon icon={"mdi:email"} width="30" height="30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-black/70">
                      <a
                        href="mailto:office@teerexassociates.com"
                        className="hover:underline"
                      >
                        office@teerexassociates.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                <div className="flex gap-5">
                  <div className="font-bold">Monday - Sunday:</div>
                  <div>Always Open</div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/+60128186343"
                    aria-label="Whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black !text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:whatsapp" width="24" height="24" />
                  </a>
                  <a
                    href="https://www.instagram.com/teerexassociates/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black !text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:instagram" width="24" height="24" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Tee-Rex-Associates-Chartered-Accountants-%E9%9C%B8%E7%8E%8B%E7%89%B9%E8%AE%B8%E4%BC%9A%E8%AE%A1%E5%B8%88/61561326090219/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black !text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon icon="mdi:facebook" width="24" height="24" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm service={serviceParam ?? undefined} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f2efe8]/30">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Us</h2>

          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.1062493639729!2d101.6052737!3d2.9794644999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38dedac49cd%3A0xf6c2ee610f8c7990!2s149-G%2C%20Jalan%20Meranti%20Jaya%203%2F1%2C%20Taman%20Meranti%20Jaya%2C%2047120%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1745928446341!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can
              help your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">
                How quickly can you respond to inquiries?
              </h3>
              <p className="text-black/70">
                We typically respond to all inquiries within 24 business hours.
                For urgent matters, we recommend calling our office directly.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">
                Do you offer virtual consultations?
              </h3>
              <p className="text-black/70">
                Yes, we offer consultations via Zoom, Microsoft Teams, or
                WhatsApp video call for clients who prefer remote meetings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">
                What information should I prepare for my first consultation?
              </h3>
              <p className="text-black/70">
                For your first consultation, it's helpful to have your previous
                tax returns, financial statements, business registration
                documents, and a list of specific questions or concerns.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">
                Do you serve clients outside of Puchong?
              </h3>
              <p className="text-black/70">
                Absolutely! While our office is located in Puchong, we serve
                clients throughout Malaysia and can work remotely with
                international clients as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

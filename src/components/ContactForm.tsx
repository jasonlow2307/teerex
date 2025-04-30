import { useTranslation } from "react-i18next";

interface ContactFormProps {
  service?: string;
}

const ContactForm = ({ service }: ContactFormProps) => {
  const { t } = useTranslation();

  // Map service IDs to select option values
  const serviceOptions = {
    "form-be-e-m": "BE",
    "form-p": "P",
    "form-b": "B",
    "form-b-account": "BA",
    "form-c-pt": "C",
  };

  // Get the value for the select element
  const selectedValue =
    service && service in serviceOptions
      ? serviceOptions[service as keyof typeof serviceOptions]
      : "BE";

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">
        {t("common.scheduleConsultation")}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("common.firstName")}
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder={t("contactForm.enterFirstName")}
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("common.lastName")}
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder={t("contactForm.enterLastName")}
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("common.email")}
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={t("contactForm.enterEmail")}
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("common.phone")}
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t("contactForm.enterPhone")}
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("common.serviceInterestedIn")}
          </label>
          <select
            name="service"
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            defaultValue={selectedValue}
          >
            <option value="BE">{t("contactForm.taxFilingBE")}</option>
            <option value="P">{t("contactForm.taxFilingP")}</option>
            <option value="B">{t("contactForm.taxFilingB")}</option>
            <option value="BA">{t("contactForm.formBAccount")}</option>
            <option value="C">{t("contactForm.formCPT")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("common.message")}
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder={t("contactForm.messagePlaceholder")}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-black/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md font-medium"
        >
          {t("common.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

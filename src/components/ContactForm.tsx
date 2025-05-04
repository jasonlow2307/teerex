import { useTranslation } from "react-i18next";

interface ContactFormProps {
  service?: string;
}

const ContactForm = ({ service }: ContactFormProps) => {
  const { t } = useTranslation();

  // Map service IDs to select option values
  const serviceOptions = {
    // Tax filing services
    "form-be-e-m": "BE",
    "form-p": "P",
    "form-b": "B",
    "form-b-account": "BA",
    "form-c-pt": "C",

    // Business services
    "business-consultancy": "BC",
    "secretarial-service": "SS",
    "management-account": "MA",

    // Licensing services
    "premise-license": "PL",
    "worker-license": "WL",
    "signboard-license": "SL",

    // Audit and tax services
    "audit-services": "AS",
    "tax-services": "TS",
  };

  const serviceNameMap = {
    BE: "contactForm.taxFilingBE",
    P: "contactForm.taxFilingP",
    B: "contactForm.taxFilingB",
    BA: "contactForm.formBAccount",
    C: "contactForm.formCPT",
    BC: "contactForm.businessConsultancy",
    SS: "contactForm.secretarialService",
    MA: "contactForm.managementAccount",
    PL: "contactForm.premiseLicense",
    WL: "contactForm.workerLicense",
    SL: "contactForm.signboardLicense",
    AS: "contactForm.auditServices",
    TS: "contactForm.taxServices",
  };

  // Get the value for the select element
  const selectedValue =
    service && service in serviceOptions
      ? serviceOptions[service as keyof typeof serviceOptions]
      : "BE";

  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        {t("common.scheduleConsultation")}
      </h3>
      <form
        className="space-y-4 sm:space-y-6"
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

          // Get the full service name from the translation
          const serviceCode = service.value;
          const serviceTranslationKey =
            serviceNameMap[serviceCode as keyof typeof serviceNameMap];
          const fullServiceName = t(serviceTranslationKey);

          // Format the WhatsApp message with full service name
          const whatsappMessage = encodeURIComponent(
            `*New Consultation Request*\n\n` +
              `*Name:* ${firstName.value} ${lastName.value}\n` +
              `*Email:* ${email.value}\n` +
              `*Phone:* ${phone.value}\n` +
              `*Service:* ${fullServiceName}\n\n` +
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
            <label className="block text-sm font-medium mb-1 sm:mb-2">
              {t("common.firstName")}
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder={t("contactForm.enterFirstName")}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 sm:mb-2">
              {t("common.lastName")}
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder={t("contactForm.enterLastName")}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 sm:mb-2">
              {t("common.email")}
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={t("contactForm.enterEmail")}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 sm:mb-2">
              {t("common.phone")}
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t("contactForm.enterPhone")}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 sm:mb-2">
            {t("common.serviceInterestedIn")}
          </label>
          <select
            name="service"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 bg-white"
            defaultValue={selectedValue}
          >
            {/* Tax Filing Services */}
            <optgroup label={t("services.categories.taxFiling")}>
              <option value="BE">{t("contactForm.taxFilingBE")}</option>
              <option value="P">{t("contactForm.taxFilingP")}</option>
              <option value="B">{t("contactForm.taxFilingB")}</option>
              <option value="BA">{t("contactForm.formBAccount")}</option>
              <option value="C">{t("contactForm.formCPT")}</option>
            </optgroup>

            {/* Business Services */}
            <optgroup label={t("services.categories.businessServices")}>
              <option value="BC">{t("contactForm.businessConsultancy")}</option>
              <option value="SS">{t("contactForm.secretarialService")}</option>
              <option value="MA">{t("contactForm.managementAccount")}</option>
            </optgroup>

            {/* Licensing Services */}
            <optgroup label={t("services.categories.licensing")}>
              <option value="PL">{t("contactForm.premiseLicense")}</option>
              <option value="WL">{t("contactForm.workerLicense")}</option>
              <option value="SL">{t("contactForm.signboardLicense")}</option>
            </optgroup>

            {/* Audit & Tax Services */}
            <optgroup label={t("services.categories.auditTax")}>
              <option value="AS">{t("contactForm.auditServices")}</option>
              <option value="TS">{t("contactForm.taxServices")}</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 sm:mb-2">
            {t("common.message")}
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder={t("contactForm.messagePlaceholder")}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-black/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md font-medium text-base"
        >
          {t("common.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

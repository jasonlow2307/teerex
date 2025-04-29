interface ContactFormProps {
  service?: string;
}

const ContactForm = ({ service }: ContactFormProps) => {
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
      <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
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
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300 hover:border-black/40"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
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
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
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
            defaultValue={selectedValue || "BE"}
          >
            <option value="BE">Tax Filing - Form BE, E, M</option>
            <option value="P">Tax Filing - Form P</option>
            <option value="B">Tax Filing - Form B</option>
            <option value="BA">Form B Account Management</option>
            <option value="C">Form C, Form PT</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
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
  );
};

export default ContactForm;

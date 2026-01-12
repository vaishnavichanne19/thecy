export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container main-spread">
    <div className="term-condition-section">
      <h2>Privacy Policy</h2>

      <p className="my-4">
        We value your privacy and are committed to protecting your personal information.
      </p>

      <Section title="Information We Collect">
        We may collect personal details such as name, email address, phone number, and usage data.
      </Section>

      <Section title="How We Use Information">
        Information is used to provide services, improve our website, communicate with users, and ensure security.
      </Section>

      <Section title="Cookies">
        Our website uses cookies to enhance user experience and analyze website traffic.
      </Section>

      <Section title="Data Security">
        We implement appropriate technical measures to protect your personal data.
      </Section>

      <Section title="Third-Party Links">
        We are not responsible for privacy practices of third-party websites linked from our site.
      </Section>

      <Section title="Contact Us">
        If you have any questions regarding this policy, please contact our support team.
      </Section>
    </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-600 mt-1">{children}</p>
    </div>
  );
}

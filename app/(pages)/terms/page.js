export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <div className="container main-spread">
    <div className="term-condition-section">
      <h2>Terms & Conditions</h2>

      <p className="my-4">
       Welcome to <b>Customization & You</b>. By using our website and services, you agree to these Terms & Conditions. Please read them carefully.
      </p>

      <Section title="Services">
       We provide web design, development, and related digital services. Deliverables and scope are defined in your project agreement.
      </Section>

      <Section title="Payment Terms">
        A 50% deposit is required to start work. The remaining balance is due upon project completion before launch.
      </Section>

      <Section title="Revisions">
        We offer up to 3 rounds of revisions per project phase. Additional changes may incur extra fees.
      </Section>

      <Section title="Intellectual Property">
        Ownership of the website and assets is transferred to the client after full payment.
      </Section>

        <Section title="Confidentiality">
       We treat client data and materials as confidential and will not share them publicly without consent.
      </Section>

      <Section title="Limitation of Liability">
        We are not responsible for any indirect or consequential damages arising from the use of our services.
      </Section>

      <Section title="Governing Law">
        These terms are governed by the laws of India.
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

export const metadata = {
  title: "Support & FAQ",
};

export default function SupportPage() {
  return (
    <div className="container main-spread">
    <div className="term-condition-section">
      <h2>Support & Frequently Asked Questions</h2>

      <div className="space-y-6">
        <FAQ
          q="What services do you offer?"
          a="We provide website design & development, UI/UX design, e-commerce solutions, and website maintenance."
        />
        <FAQ
          q="How long does it take to build a website?"
          a="Most websites are completed within 2–6 weeks depending on project requirements."
        />
        <FAQ
          q="Do you provide hosting and domain services?"
          a="Yes, we assist with domain registration and secure hosting solutions."
        />
        <FAQ
          q="Can I update my website myself?"
          a="Yes, we build websites with easy-to-manage CMS options and provide basic training."
        />
        <FAQ
          q="How can I contact support?"
          a="You can reach us via email or through the contact form on our website."
        />
      </div>
    </div>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold text-lg">{q}</h3>
      <p className="text-gray-600 mt-2">{a}</p>
    </div>
  );
}

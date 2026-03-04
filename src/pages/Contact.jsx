import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Qorsheyn";
    return () => {
      document.title = "Qorsheyn";
    };
  }, []);

  return (
    <article className="max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Contact
      </h1>
      <p className="mt-3 text-slate-600">
        Get in touch with the Qorsheyn team. We’re here to help with support,
        privacy, and general questions.
      </p>

      <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">
        Email
      </h2>
      <p className="text-slate-600">
        <a
          href="mailto:ismailbulbul381@gmail.com"
          className="text-xasuus-purple font-medium hover:text-xasuus-purple-dark"
        >
          ismailbulbul381@gmail.com
        </a>
      </p>

      <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
        What you can contact us for
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-slate-600">
        <li><strong className="text-slate-800">App support</strong> – Troubleshooting, bugs, or how to use features</li>
        <li><strong className="text-slate-800">Privacy & data</strong> – Access, correction, or portability requests</li>
        <li><strong className="text-slate-800">Account deletion</strong> – To remove your account and data, see our <Link to="/delete-account" className="text-xasuus-purple hover:underline">Delete Account</Link> page or email us with the subject &quot;Delete my account&quot;</li>
        <li><strong className="text-slate-800">Terms & policies</strong> – Questions about our Privacy Policy or Terms of Service</li>
        <li><strong className="text-slate-800">Feedback</strong> – Suggestions or ideas for Qorsheyn</li>
      </ul>

      <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
        Response time
      </h2>
      <p className="text-slate-600">
        We aim to reply within a few business days. For account deletion
        requests, we process them within 30 days as described on our{" "}
        <Link to="/delete-account" className="text-xasuus-purple hover:underline">Delete Account</Link> page.
      </p>
    </article>
  );
}

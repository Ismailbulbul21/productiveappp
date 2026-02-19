import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Xasuus";
    return () => { document.title = "Xasuus"; };
  }, []);
  return (
    <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Terms of Service</h1>
      <p className="text-sm text-slate-500 mt-1">Last updated: February 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Acceptance</h2>
      <p>
        By downloading, installing, or using the Xasuus app, you agree to these
        Terms of Service. If you do not agree, do not use the app.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Eligibility</h2>
      <p>
        You must have a valid account to use the app. By using the app, you
        confirm that you provide accurate information and meet any age
        requirements in your jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Account</h2>
      <p>
        You must provide accurate information when creating your account. You
        are responsible for keeping your login details secure and for all
        activity under your account. Notify us promptly if you suspect
        unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Use of the app</h2>
      <p>
        The app is for personal productivity use only. You agree not to: reverse
        engineer, copy, or misuse the app; share your account; post illegal or
        inappropriate content; or use the app for any purpose that violates
        applicable laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Content</h2>
      <p>
        Tasks and goals you create are your content. We do not claim ownership of
        your data. You grant us the right to store and process your data to
        provide the service.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Payments</h2>
      <p>
        The app is free. There are no subscriptions or in-app purchases.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Termination</h2>
      <p>
        We may suspend or terminate your account if you breach these terms. You
        may delete your account at any time (see our{" "}
        <Link to="/delete-account">Delete Account</Link> page).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Disclaimers</h2>
      <p>
        The app is provided &quot;as is.&quot; We do not guarantee uninterrupted
        service or specific outcomes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of liability</h2>
      <p>
        To the extent permitted by law, Xasuus and its providers are not liable
        for indirect, incidental, or consequential damages arising from your use
        of the app.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes</h2>
      <p>
        We may update these terms. Continued use of the app after changes
        constitutes acceptance. We will communicate significant changes in the
        app or by email where appropriate.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>
        For questions about these terms:{" "}
        <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a>
      </p>
    </article>
  );
}

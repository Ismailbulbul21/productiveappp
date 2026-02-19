import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Xasuus";
    return () => { document.title = "Xasuus"; };
  }, []);
  return (
    <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-8 mb-2">Who we are</h2>
      <p>
        Xasuus is a productivity mobile app for Somali-speaking users. We help
        you plan your day, manage tasks (Maanta, Hawlaha), track goals
        (Yoolalka), and get reminders. This policy explains how we collect,
        use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data we collect</h2>
      <ul>
        <li>
          <strong>Account:</strong> Email address, password (stored in hashed
          form), and optional name.
        </li>
        <li>
          <strong>Profile:</strong> Focus type (Student, Shaqo, Ganacsi, Horumar
          Shakhsi), notification preferences (on/off), and goal reminder settings
          (day of week, time, frequency).
        </li>
        <li>
          <strong>Tasks:</strong> Task title, due date, due time, priority,
          status, optional link to a goal, and reminder timing (e.g. 10 min
          before, 30 min before, 1 hour before).
        </li>
        <li>
          <strong>Goals:</strong> Goal title, type (weekly, monthly, quarterly,
          yearly), and deadline.
        </li>
      </ul>
      <p>
        We do not collect payment information. We do not run ads or third-party
        analytics. We do not have chat or social features.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">How we use it</h2>
      <p>
        We use your data to: provide the app (tasks, goals, reminders), send
        local push notifications, manage your account and profile, and respond
        to support requests.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Where it&apos;s stored</h2>
      <p>
        Your data is stored with Supabase, a secure hosted platform. We use Row
        Level Security (RLS), HTTPS for data in transit, and industry-standard
        security practices.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Sharing</h2>
      <p>
        We do not sell your personal data. We do not share your data with third
        parties for marketing. Data stays within our systems to run the app.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Retention</h2>
      <p>
        Account, profile, tasks, and goals are kept until you delete your
        account. After deletion, data is permanently removed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Security</h2>
      <p>
        We use hashed passwords, HTTPS, and database security (RLS) to protect
        your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Children</h2>
      <p>
        The app is for general use. Parents and guardians may supervise use by
        minors. We do not knowingly collect data from children under 13 without
        appropriate consent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your rights</h2>
      <p>
        You have the right to: access your data, correct your data (e.g. via
        profile editing in the app), delete your account and associated data
        (see our Delete Account page), and request a copy of your data (data
        portability). To exercise these rights, contact us at the email below.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. Significant changes
        will be communicated in the app or by email. Continued use of the app
        after changes constitutes acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>
        For privacy requests, questions, or complaints:{" "}
        <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a>
      </p>
    </article>
  );
}

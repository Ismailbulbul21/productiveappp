import { useEffect } from "react";

export default function DeleteAccount() {
  useEffect(() => {
    document.title = "Delete Account & Data | Qorsheyn";
    return () => { document.title = "Qorsheyn"; };
  }, []);
  return (
    <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Delete Account & Data
      </h1>
      <p className="mt-2">
        You can permanently delete your Qorsheyn account and associated data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        What happens when you delete your account
      </h2>
      <p>Deleting your account permanently removes:</p>
      <ul>
        <li>Your account (email, password)</li>
        <li>Your profile (focus type, notification preferences, goal reminder settings)</li>
        <li>All your tasks</li>
        <li>All your goals</li>
      </ul>
      <p>
        This cannot be undone. We cannot restore your account or data after
        deletion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">How to delete your account</h2>
      <ul>
        <li>
          <strong>By email:</strong> Send an email to{" "}
          <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a> with the
          subject line &quot;Delete my account&quot; and the email address you
          used to sign up. We will process your request within 30 days.
        </li>
        <li>
          <strong>In the app:</strong> Go to Dejinta (Settings) and use the
          Delete Account option when available.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>
        For account deletion or other requests:{" "}
        <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a>
      </p>
    </article>
  );
}

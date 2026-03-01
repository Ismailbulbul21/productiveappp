import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DataSafety() {
  useEffect(() => {
    document.title = "Data Safety | Qorsheyn";
    return () => { document.title = "Qorsheyn"; };
  }, []);
  return (
    <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Data Safety</h1>
      <p className="mt-2">
        This page summarizes our data practices for transparency and app store
        requirements (e.g. Google Play Data Safety).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data we collect</h2>
      <ul>
        <li>
          <strong>Account:</strong> Email, password (hashed), optional name
        </li>
        <li>
          <strong>Profile:</strong> Focus type, notification preferences, goal
          reminder settings
        </li>
        <li>
          <strong>Tasks:</strong> Title, due date, due time, priority, status,
          reminder timing
        </li>
        <li>
          <strong>Goals:</strong> Title, type, deadline
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">How we use it</h2>
      <p>
        To provide the app: display tasks and goals, send reminders, manage your
        account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data sharing</h2>
      <p>
        We do not share your data with third parties. We do not sell your data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data security</h2>
      <p>
        Data is encrypted in transit (HTTPS). Passwords are hashed. We use Row
        Level Security in our database.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your rights</h2>
      <p>
        You can access, correct, or delete your data. See our{" "}
        <Link to="/privacy">Privacy Policy</Link> and{" "}
        <Link to="/delete-account">Delete Account</Link> page for details.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>
        <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a>
      </p>
    </article>
  );
}

import { Link } from "react-router-dom";

const links = [
  { to: "/privacy", label: "Privacy Policy", desc: "How we collect, use, and protect your data." },
  { to: "/terms", label: "Terms of Service", desc: "Rules for using the Xasuus app." },
  { to: "/delete-account", label: "Delete Account & Data", desc: "Permanently remove your account and data." },
  { to: "/data-safety", label: "Data Safety", desc: "Summary for app store listings." },
];

export default function Home() {
  return (
    <article className="max-w-none">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Xasuus
        </h1>
        <p className="text-lg text-xasuus-purple font-medium mb-2">
          Abaabul Maalintaada. Gaadh Yoolalkaaga.
        </p>
        <p className="text-slate-600 leading-relaxed max-w-xl">
          Xasuus is a productivity app for Somali-speaking users. Plan your day,
          manage tasks, and reach your goals with smart reminders.
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {links.map(({ to, label, desc }) => (
          <Link
            key={to}
            to={to}
            className="block rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm no-underline transition-all hover:border-xasuus-purple/40 hover:shadow-md hover:bg-slate-50/50"
          >
            <span className="font-semibold text-slate-900 block mb-1">{label}</span>
            <span className="text-sm text-slate-500">{desc}</span>
          </Link>
        ))}
      </div>
    </article>
  );
}

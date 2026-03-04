import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/delete-account", label: "Delete Account" },
  { to: "/data-safety", label: "Data Safety" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
            <Link
              to="/"
              className="text-xl font-bold text-xasuus-purple hover:text-xasuus-purple-dark no-underline tracking-tight"
            >
              Qorsheyn
            </Link>
            <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
              {navLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={
                      "rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors " +
                      (isActive
                        ? "bg-xasuus-purple text-white hover:bg-xasuus-purple-dark"
                        : "text-slate-600 hover:bg-slate-100 hover:text-xasuus-purple")
                    }
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white mt-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 text-sm text-slate-500">
          <Link
            to="/"
            className="text-xasuus-purple font-medium no-underline hover:underline"
          >
            Qorsheyn
          </Link>
          <span className="mx-2">·</span>
          <a
            href="mailto:ismailbulbul381@gmail.com"
            className="text-slate-600 no-underline hover:text-xasuus-purple hover:underline"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-offwhite py-14">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-[15px] font-bold tracking-[0.08em] text-ink">
              M&Z's Dental Clinic
            </span>
            <p className="mt-3 max-w-xs text-sm text-ink/55">{footer.statement}</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-ink/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-ink/65 hover:text-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-ink/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              <li>{footer.contact.address}</li>
              <li>{footer.contact.phone}</li>
              <li>{footer.contact.email}</li>
            </ul>
            <ul className="mt-4 space-y-1 text-sm text-ink/55">
              {footer.hours.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-deep/10 pt-6 text-xs text-ink/40 lg:flex-row">
          <span>© {new Date().getFullYear()} Dentex. All rights reserved.</span>
          <div className="flex gap-5">
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-deep">
                {s.label}
              </a>
            ))}
          </div>
          <span className="text-ink/30">Built by Zen-C Solutions</span>
        </div>
      </div>
    </footer>
  );
}

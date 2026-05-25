import Image from "next/image";
import Link from "next/link";
import { quickLinks, servicesLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src="/logos/Floral_dark_background.png"
              alt="Floral Park HVAC Logo"
              width={239}
              height={58}
              className="footer__logo"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="footer__desc">
            <strong>Floral Park HVAC</strong> is a licensed, insured, and bonded HVAC contractor
            serving Nassau County, Western Suffolk, and Northern Queens — with honest pricing,
            fast response, and quality workmanship on every job.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/floralparkhvac/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">Copyright {new Date().getFullYear()} Floral Park HVAC Corp. All rights reserved.</p>
        <div className="footer__legal">
          <span className="footer__legal-link">7 Florence St, Floral Park, NY 11001</span>
          <a href="tel:+15168554328" className="footer__legal-link">(516) 855-4328</a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.01_260)] text-white/70">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div style={{background:'#000000', padding:'6px 12px', borderRadius:'4px', display:'inline-flex', alignItems:'center'}}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663303940668/AycblvbxNWaahnTc.png"
                alt="ASAP Accounting"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Professional accounting, tax, and financial advisory services for individuals and businesses across South Florida.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61570792025498" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[oklch(0.62_0.12_75)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/asapaccountingllc/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[oklch(0.62_0.12_75)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/susanrodriguezasap" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[oklch(0.62_0.12_75)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/bookkeeping" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Bookkeeping</Link></li>
              <li><Link href="/services/tax-preparation" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Tax Preparation</Link></li>
              <li><Link href="/services/tax-planning" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Tax Planning</Link></li>
              <li><Link href="/services/payroll" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Payroll Services</Link></li>
              <li><Link href="/services/financial-planning" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Financial Planning</Link></li>
              <li><Link href="/services/retirement-wealth-planning" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Retirement Planning</Link></li>
              <li><Link href="/services/life-insurance" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Life Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">About Us</Link></li>
              <li><Link href="/our-team" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Our Team</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[oklch(0.62_0.12_75)] transition-colors">Book a Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[oklch(0.62_0.12_75)]" />
                <div>
                  <a href="tel:+13058777107" className="text-sm hover:text-white transition-colors">(305) 877-7107</a>
                  <p className="text-xs text-white/40 mt-0.5">Mon–Fri, 9am–5pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[oklch(0.62_0.12_75)]" />
                <a href="mailto:susan@asap-accounting.us" className="text-sm hover:text-white transition-colors">susan@asap-accounting.us</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[oklch(0.62_0.12_75)]" />
                <span className="text-sm">Doral, FL 33178<br />Serving all of South Florida</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[oklch(0.62_0.12_75)]" />
                <div className="text-sm">
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-white/40">Sat - Sun: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ASAP Accounting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="text-xs text-white/40 hover:text-[oklch(0.62_0.12_75)] transition-colors">Terms of Service</Link>
            <span className="text-white/20 text-xs">|</span>
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-[oklch(0.62_0.12_75)] transition-colors">Privacy Policy</Link>
            <span className="text-white/20 text-xs">|</span>
            <p className="text-xs text-white/40">Doral, FL | Serving Miami-Dade, Broward &amp; South Florida</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

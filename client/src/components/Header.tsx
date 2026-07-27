import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Bookkeeping", href: "/services/bookkeeping" },
  { name: "Tax Preparation", href: "/services/tax-preparation" },
  { name: "Tax Planning", href: "/services/tax-planning" },
  { name: "Payroll Services", href: "/services/payroll" },
  { name: "Financial Planning", href: "/services/financial-planning" },
  { name: "Retirement & Wealth Planning", href: "/services/retirement-wealth-planning" },
  { name: "Life Insurance", href: "/services/life-insurance" },
  { name: "Audit & Attestation", href: "/services/audit" },
  { name: "International Tax", href: "/services/international-tax" },
  { name: "Non-Profit Services", href: "/services/non-profit" },
  { name: "Cooperative Associations", href: "/services/cooperative-associations" },
];

const locations = [
  { name: "Doral", href: "/locations/doral" },
  { name: "Miami", href: "/locations/miami" },
  { name: "Hialeah", href: "/locations/hialeah" },
  { name: "Coral Gables", href: "/locations/coral-gables" },
  { name: "Kendall", href: "/locations/kendall" },
  { name: "Miami Lakes", href: "/locations/miami-lakes" },
  { name: "Miami Beach", href: "/locations/miami-beach" },
  { name: "Homestead", href: "/locations/homestead" },
  { name: "Pembroke Pines", href: "/locations/pembroke-pines" },
  { name: "Miramar", href: "/locations/miramar" },
  { name: "Fort Lauderdale", href: "/locations/fort-lauderdale" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div style={{background:'#000000', padding:'5px 10px', borderRadius:'4px', display:'inline-flex', alignItems:'center'}}>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663303940668/AycblvbxNWaahnTc.png"
              alt="ASAP Accounting"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`text-sm tracking-wide transition-colors ${location === '/' ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm tracking-wide transition-colors ${location === '/about' ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${location.startsWith('/services') ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
              Services <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-gray-200 rounded-sm py-2 min-w-[240px] shadow-xl">
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  All Services
                </Link>
                <div className="h-px bg-white/10 my-1" />
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Dropdown */}
          <div className="relative group">
            <button className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${location.startsWith('/locations') ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
              Locations <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-gray-200 rounded-sm py-2 min-w-[200px] shadow-xl">
                {locations.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/testimonials" className={`text-sm tracking-wide transition-colors ${location === '/testimonials' ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
            Testimonials
          </Link>
          <Link href="/contact" className={`text-sm tracking-wide transition-colors ${location === '/contact' ? 'text-[oklch(0.62_0.12_75)]' : 'text-gray-700 hover:text-gray-900'}`}>
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/contact" className="hidden lg:block btn-gold rounded-sm" style={{color: '#ffffff', fontSize: '0.75rem'}}>
          Book a Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-700 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <nav className="container py-6 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide">
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-600 hover:text-gray-900 text-sm">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-600 hover:text-gray-900 text-sm">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide"
              >
                Locations <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="pl-4 space-y-1">
                  {locations.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-600 hover:text-gray-900 text-sm">
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/testimonials" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide">
              Testimonials
            </Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide">
              FAQ
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 hover:text-gray-900 text-sm tracking-wide">
              Contact
            </Link>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-center btn-gold rounded-sm text-xs">
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

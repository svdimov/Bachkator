import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const PHONE_NUMBER = '+359 889084864';

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center"
              aria-label="Бачкатор - Начало"
            >
              <img
                src="/logo.png"
                alt="Бачкатор — Домашен майстор"
                className="h-12 w-auto object-contain sm:h-20"
              />
            </button>


        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'border-slate-200 text-slate-700 hover:border-primary-300 hover:text-primary-600'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <span className="text-base leading-none">{lang === 'bg' ? '🇧🇬' : '🇬🇧'}</span>
            {lang === 'bg' ? 'BG' : 'EN'}
          </button>

          {/* Call button */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/40 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {t.nav.callNow}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            {t.nav.callNow}
          </a>
        </nav>
      )}
    </header>
  );
}

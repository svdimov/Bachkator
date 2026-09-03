import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const PHONE_NUMBER = '+359 889084864';
const EMAIL = 'dimovg280@gmail.com';

export default function Footer() {
  const { t, lang } = useLang();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
         
                {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center"
              aria-label="Бачкатор - Начало"
            >
              <img
                src="/logo.png"
                alt="Бачкатор — Домашен майстор" 
                className="h-20 w-auto object-contain"
              />
            </button>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {t.services.items.slice(0, 5).map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{t.footer.contactTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm transition-colors hover:text-primary-400">
                  <Phone className="h-4 w-4 text-primary-500" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm transition-colors hover:text-primary-400">
                  <Mail className="h-4 w-4 text-primary-500" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary-500" />
                {lang === 'bg' ? 'Велико Търново, България' : 'Veliko Tarnovo, Bulgaria'}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{t.footer.hoursTitle}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary-500" />
                {t.footer.hoursWeek}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary-500" />
                {t.footer.hoursSat}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary-500" />
                {t.footer.hoursSun}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Бачкатор {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

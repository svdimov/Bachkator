import { ArrowRight, Hammer, PaintRoller, Layers, Brush, Grid3x3, DoorOpen, Home } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const SERVICE_ICONS = [Hammer, Layers, Grid3x3, PaintRoller, Brush, Grid3x3, DoorOpen, Home];

export default function Services() {
  const { t } = useLang();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            {t.nav.services}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">{t.services.title}</h2>
          <p className="text-lg text-slate-600">{t.services.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => {
            const Icon = SERVICE_ICONS[i] ?? Hammer;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/20 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-display text-xl font-bold text-slate-900">{service.name}</h3>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{service.desc}</p>

                  {/* Link */}
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    {t.services.getQuote}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Clock, BadgeDollarSign, ShieldCheck, Sparkles } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const FEATURE_ICONS = [Clock, BadgeDollarSign, ShieldCheck, Sparkles];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=940&h=900"
                alt="Professional handyman at work"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white shadow-xl sm:block">
              <div className="font-display text-4xl font-bold">15+</div>
              <div className="text-sm text-primary-100">{t.hero.stats.years}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              {t.nav.about}
            </div>
            <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">{t.about.title}</h2>
            <p className="mb-10 text-lg text-slate-600">{t.about.subtitle}</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {t.about.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i] ?? Clock;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold text-slate-900">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

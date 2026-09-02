import { Phone, ArrowRight, Star, Hammer, PaintRoller, Wrench } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const PHONE_NUMBER = '+359 889084864';

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
          alt="Home renovation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/70" />
      </div>

      {/* Floating icons */}
      <div className="pointer-events-none absolute right-10 top-1/4 hidden lg:block">
        <div className="animate-float rounded-2xl bg-white/10 p-4 backdrop-blur-md">
          <Hammer className="h-8 w-8 text-primary-400" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-32 top-1/2 hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="animate-float rounded-2xl bg-white/10 p-4 backdrop-blur-md">
          <PaintRoller className="h-8 w-8 text-primary-400" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-16 top-2/3 hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="animate-float rounded-2xl bg-white/10 p-4 backdrop-blur-md">
          <Wrench className="h-8 w-8 text-primary-400" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-primary-400 text-primary-400" />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 className="mb-6 animate-fade-up font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.1s' }}>
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex animate-fade-up flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {t.hero.callCta}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '15+', label: t.hero.stats.years },
              { value: '500+', label: t.hero.stats.projects },
              { value: '300+', label: t.hero.stats.clients },
              { value: '24м', label: t.hero.stats.guarantee },
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="font-display text-3xl font-bold text-primary-400">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

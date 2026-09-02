import { Star, Quote } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="reviews" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-2 text-sm font-semibold text-primary-400">
            {t.nav.reviews}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-white">{t.testimonials.title}</h2>
          <p className="text-lg text-slate-400">{t.testimonials.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonials.items.map((review, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all hover:border-primary-500/30 hover:bg-slate-800"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-10 w-10 text-primary-500/40" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary-400 text-primary-400" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-slate-300 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 font-display text-lg font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-slate-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLang } from '@/i18n/LanguageContext';

const GALLERY_IMAGES = [
  { src: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Боядисване', en: 'Painting' } },
  { src: 'https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Гипсокартон', en: 'Drywall' } },
  { src: 'https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Ламинат', en: 'Laminate' } },
  { src: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Шпакловка', en: 'Plastering' } },
  { src: 'https://images.pexels.com/photos/5493677/pexels-photo-5493677.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Монтаж', en: 'Installation' } },
  { src: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&w=600&h=600', label: { bg: 'Реновация', en: 'Renovation' } },
];

export default function Gallery() {
  const { t, lang } = useLang();

  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            {t.nav.gallery}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">{t.gallery.title}</h2>
          <p className="text-lg text-slate-600">{t.gallery.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl ${
                i === 0 ? 'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.label[lang]}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? 'h-full min-h-[300px] sm:h-64' : 'h-64'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-lg bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white shadow-lg">
                  {img.label[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

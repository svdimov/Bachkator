import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { createContactRequest } from '@/services/api';

const PHONE_NUMBER = '+359 889084864';
const EMAIL = 'dimovg280@gmail.com';
const ADDRESS = { bg: 'Велико Търново, България', en: 'Sofia, Bulgaria' };

export default function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = (formData.get('email') as string) || null;
    const service = (formData.get('service') as string) || null;
    const message = (formData.get('message') as string) || null;

try {
  await createContactRequest({
    name,
    phone,
    email,
    service,
    message,
    lang,
  });

  setStatus('success');
  (e.target as HTMLFormElement).reset();
  setTimeout(() => setStatus('idle'), 6000);
} catch {
  setStatus('error');
  setTimeout(() => setStatus('idle'), 6000);
}
  };

  const contactInfo = [
    { icon: Phone, label: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}` },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: ADDRESS[lang], href: undefined },
    { icon: Clock, label: lang === 'bg' ? 'Пон–Съб 08:00–19:00' : 'Mon–Sat 08:00–19:00', href: undefined },
  ];

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            {t.nav.contact}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">{t.contact.title}</h2>
          <p className="text-lg text-slate-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
              <h3 className="mb-8 font-display text-2xl font-bold">{t.footer.contactTitle}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20">
                        <Icon className="h-6 w-6 text-primary-400" />
                      </div>
                      <span className="text-slate-200">{info.label}</span>
                    </div>
                  );
                  return info.href ? (
                    <a key={i} href={info.href} className="block transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Decorative bottom */}
              <div className="mt-10 border-t border-slate-700 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{lang === 'bg' ? 'Обадете ни се сега' : 'Call us now'}</div>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="font-display text-lg font-bold text-white hover:text-primary-400">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{t.contact.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{t.contact.service}</label>
                  <select
                    name="service"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="">{t.contact.selectService}</option>
                    {t.services.items.map((s, i) => (
                      <option key={i} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">{t.contact.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/40 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t.contact.submit}
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-green-700 animate-fade-in">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.contact.success}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-red-700 animate-fade-in">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.contact.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

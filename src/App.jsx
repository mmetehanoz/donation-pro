import React, { useState, useEffect } from 'react';
import {
  Menu, X, Check, BarChart3, Mail, Database, Shield, Globe, Users,
  Activity, FileBarChart, Calculator, PieChart, Filter, MessageSquare,
  Receipt, Video, Search, Palette, Zap, CreditCard, ShieldCheck, MapPin, Link
} from 'lucide-react';

// --- DATA CONSTANTS ---
const FEATURES = [
  {
    icon: <Activity className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Bağış Takibi",
    description: "Bağışçılarınızın tüm hareketlerini anlık olarak izleyin, geçmiş bağışları detaylıca görüntüleyin."
  },
  {
    icon: <FileBarChart className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Bağış Raporları",
    description: "Kampanya bazlı, dönemsel veya bağışçı özelinde detaylı grafiksel raporlar oluşturun."
  },
  {
    icon: <Calculator className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Zekat Hesaplama",
    description: "Entegre hesaplama modülü ile bağışçılarınızın zekat tutarlarını kolayca belirlemelerini sağlayın."
  },
  {
    icon: <PieChart className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Kurban Hisse Sistemi",
    description: "Kurban organizasyonlarınızda hisse takibini, eşleştirmeleri ve kesim durumunu yönetin."
  },
  {
    icon: <Filter className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Gelişmiş Filtreleme",
    description: "Veritabanınızdaki binlerce kaydı akıllı filtrelerle saniyeler içinde segmente edin."
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "SMS Sistemi",
    description: "Toplu SMS gönderimi ile kampanya duyurularını ve bayram kutlamalarını anında iletin."
  },
  {
    icon: <Mail className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Mail Sistemi",
    description: "Özelleştirilebilir şablonlarla profesyonel e-bültenler ve bilgilendirme mailleri gönderin."
  },
  {
    icon: <Receipt className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Otomatik Makbuz",
    description: "Her bağış sonrası yasal geçerliliği olan dijital makbuzları otomatik oluşturup gönderin."
  },
  {
    icon: <Video className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Kurban Video Sistemi",
    description: "Kesim videolarını kişiye özel kısa linkler ile otomatik olarak bağışçıya ulaştırın."
  },
  {
    icon: <Search className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "SEO Uyumlu",
    description: "Arama motorlarında üst sıralarda yer almanızı sağlayacak teknik altyapı."
  },
  {
    icon: <Palette className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Modern Tasarım",
    description: "Kullanıcı deneyimini ön planda tutan, mobil uyumlu ve şık arayüzler."
  },
  {
    icon: <Zap className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Sürekli Güncel Teknoloji",
    description: "Sisteminiz her zaman en son web teknolojileri ve güvenlik yamalarıyla güncel kalsın."
  },
  {
    icon: <CreditCard className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Ödeme Altyapısı",
    description: "Tüm banka ve kredi kartlarıyla uyumlu, hızlı ve kesintisiz ödeme alma sistemi."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Güvenli Ödeme & Barındırma",
    description: "256-bit SSL sertifikası ve düzenli yedeklenen güvenli sunucu altyapısı."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Veri Analizi",
    description: "Bağışçı davranışlarını analiz ederek gelecek kampanyalarınızı verilerle planlayın."
  },
  {
    icon: <MapPin className="w-10 h-10 text-emerald-500 mb-4" />,
    title: "Haritalandırma Sistemi",
    description: "Yardım dağıtımlarını ve bağışçı lokasyonlarını harita üzerinde görselleştirin."
  }
];

const PRICING_PLANS = [
  {
    name: "Temel",
    price: "₺499",
    period: "/ay",
    features: ["5.000 Bağışçı Kaydı", "Temel Raporlama", "E-Posta Desteği"],
    cta: "Başla",
    highlight: false
  },
  {
    name: "Büyüyen",
    price: "₺999",
    period: "/ay",
    features: ["20.000 Bağışçı Kaydı", "Gelişmiş Raporlama", "SMS Entegrasyonu", "7/24 Destek"],
    cta: "Hemen Geç",
    highlight: true // "En Popüler"
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "",
    features: ["Sınırsız Kayıt", "Özel API Entegrasyonu", "Dedike Müşteri Temsilcisi", "Yerinde Eğitim"],
    cta: "İletişime Geç",
    highlight: false
  }
];

const REFERENCES = [
  { name: "Global Hope", logo: "GH" },
  { name: "Future Foundation", logo: "FF" },
  { name: "Green World", logo: "GW" },
  { name: "EduCare", logo: "EC" },
  { name: "Life Support", logo: "LS" }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="flex items-center text-white font-bold text-xl">
                <Shield className="w-6 h-6 text-emerald-500 mr-2" />
                DonationSys
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Özellikler</a>
                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Paketler</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Referanslar</a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Özellikler</a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Paketler</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Referanslar</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % FEATURES.length);
    }, 2000); // 2 saniyede bir değişim
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Vakfınızın</span>
              <span className="block text-emerald-500">Dijital Dönüşümü</span>
              <span className="block">Burada Başlıyor</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-l md:mt-5 md:text-xl lg:mx-0">
              Bağışçılarınızı daha iyi tanıyın, kampanyalarınızı verilerle yönetin ve gelirlerinizi artırın. Modern, güvenli ve ölçeklenebilir yönetim platformu.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-700/30 transition-all transform hover:-translate-y-1">
                Toplantı Talep Et
              </button>
              <p className="mt-3 text-sm text-gray-500">5 gün ücretsiz deneme • Kredi kartı gerekmez</p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-800 border border-slate-700 group cursor-default h-[40rem]">
              {/* Animated Donation Dashboard */}
              <div className="p-6 relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-emerald-500">Canlı Bağış Akışı</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6 flex-1 flex flex-col">
                  {/* Total Donation Card */}
                  <div className="bg-slate-700/40 p-5 rounded-xl border border-slate-600/50 backdrop-blur-sm relative overflow-hidden group-hover:bg-slate-700/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Activity className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1 font-medium">Toplam Toplanan Bağış</p>
                    <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                      ₺1,842,500
                      <span className="text-emerald-400 text-sm font-semibold px-2 py-0.5 bg-emerald-500/10 rounded flex items-center border border-emerald-500/20">
                        +%12 <Activity className="w-3 h-3 ml-1" />
                      </span>
                    </h3>
                    {/* Progress Bar Animation */}
                    <div className="mt-5 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 w-3/4 animate-[shimmer_2s_infinite] relative">
                        <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Donations List */}
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider pl-1">Son Bağışlar</p>
                    {[1, 2, 3].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {i === 0 ? <ShieldCheck className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-200 font-medium">{i === 0 ? 'Anonim Bağışçı' : `Bağışçı #${4820 + i}`}</span>
                            <span className="text-xs text-gray-500">{item} dk önce</span>
                          </div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded text-sm">+₺{i === 0 ? '5.000' : 250 * (i + 1)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rotating Features Module */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between bg-emerald-900/10 p-3 rounded-lg border border-emerald-500/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                        <span className="text-xs text-emerald-100 font-medium">Aktif Modüller</span>
                      </div>
                      <span key={textIndex} className="text-sm font-bold text-emerald-400 animate-[fadeIn_0.5s_ease-in-out]">
                        {FEATURES[textIndex].title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-emerald-500 font-semibold tracking-wide uppercase">Yetenekler</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Vakıf Yönetimi İçin İhtiyacınız Olan Her Şey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Zekattan kurbana, bağış takibinden video paylaşımına kadar tüm süreçlerinizi dijitalleştirin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div key={index} className="relative group bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2 flex flex-col items-start h-full justify-between">
              <div>
                <div className="group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{feature.description}</p>
              </div>
              <button className="w-full py-2 px-4 rounded-lg border border-slate-600 hover:border-emerald-500 hover:bg-emerald-500 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 group-hover:border-emerald-500/50">
                Teklife Ekle
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            İhtiyacınıza Uygun Paketler
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Şeffaf fiyatlandırma, gizli ücret yok.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border ${plan.highlight
                ? 'bg-slate-800 border-emerald-500 scale-105 shadow-2xl shadow-emerald-900/30 z-10'
                : 'bg-slate-900 border-slate-700 opacity-90'
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  En Popüler
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-white">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-xl font-medium text-gray-400">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                    <span className="ml-3 text-base text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-4 rounded-lg font-bold transition-colors ${plan.highlight
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          Güvenen 500+ Vakıf ve Dernek
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {REFERENCES.map((ref, i) => (
            <div key={i} className="flex items-center justify-center h-12">
              <span className="text-2xl font-black text-slate-800">{ref.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    donorCount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Verileri:', formData);
    alert("Talebiniz alınmıştır! (Veriler konsola yazıldı)");
    setFormData({ name: '', organization: '', phone: '', donorCount: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="demo-form" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Kurumunuz İçin Özel Çözüm Mü Arıyorsunuz?
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            İhtiyaçlarınızı belirleyelim, size en uygun dijital dönüşüm planını birlikte oluşturalım.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 py-8 px-4 shadow-2xl rounded-2xl border border-slate-700">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Ad Soyad
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-slate-600 rounded-lg shadow-sm placeholder-gray-500 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
                  placeholder="Adınız Soyadınız"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-300">
                Kurum Adı
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-slate-600 rounded-lg shadow-sm placeholder-gray-500 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
                  placeholder="Vakıf veya Dernek Adı"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Telefon
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-slate-600 rounded-lg shadow-sm placeholder-gray-500 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
                  placeholder="0555 555 55 55"
                />
              </div>
            </div>

            <div>
              <label htmlFor="donorCount" className="block text-sm font-medium text-gray-300">
                Tahmini Bağışçı Sayısı
              </label>
              <div className="mt-1">
                <select
                  id="donorCount"
                  name="donorCount"
                  required
                  value={formData.donorCount}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-slate-900 text-white transition-all"
                >
                  <option value="" disabled>Seçiniz</option>
                  <option value="0-1000">0 - 1.000</option>
                  <option value="1000-5000">1.000 - 5.000</option>
                  <option value="5000-10000">5.000 - 10.000</option>
                  <option value="10000+">10.000+</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Ücretsiz Demo Talep Et
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Shield className="w-6 h-6 text-slate-600" />
          <span className="text-gray-400 font-semibold">DonationSys &copy; 2024</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Gizlilik</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Kullanım Şartları</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">İletişim</a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-gray-100 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <DemoRequestForm />
      <Footer />
    </div>
  );
}

export default App;

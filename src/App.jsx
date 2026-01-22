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
                {/* <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Paketler</a> */}

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
            {/* <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Paketler</a> */}

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
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Vakfınızın</span>
              <span className="block text-emerald-500">Dijital Dönüşümü</span>
              <span className="block">Burada Başlıyor</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-l md:mt-5 md:text-xl lg:mx-0">
              Bağışçılarınızı daha iyi tanıyın, kampanyalarınızı verilerle yönetin ve gelirlerinizi artırın. Modern, güvenli ve ölçeklenebilir yönetim platformu.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Selamun Aleykum, derneğimiz-vakfımız için bağış sistemi hakkında görüşmek istiyoruz...");
                  window.open(`https://wa.me/905058326123?text=${message}`, '_blank');
                }}
                className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-700/30 transition-all transform hover:-translate-y-1"
              >
                Toplantı Talep Et
              </button>

            </div>
          </div>

          {/* Right Visual */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-800 border border-slate-700 group cursor-default h-[28rem] sm:h-[40rem]">
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

const SignageSection = () => {
  const [isBabilActive, setIsBabilActive] = useState(false);

  return (
    <section className="py-12 bg-slate-900 flex flex-col items-center justify-center border-t border-slate-800">
      {/* Control Panel */}
      <div className="mb-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-lg flex flex-col items-center gap-2">
        <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">TIKLAYIN, PARLAYIN</span>
        <button
          onClick={() => setIsBabilActive(!isBabilActive)}
          className={`
            relative px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95
            ${isBabilActive
              ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-105'
              : 'bg-slate-700 text-slate-500 hover:bg-slate-600'
            }
          `}
        >
          <div className="flex items-center gap-2">
            <Zap className={`w-5 h-5 ${isBabilActive ? 'fill-current' : ''}`} />
            Babil
          </div>
          {/* Indicator Light */}
          <div className={`absolute top-2 right-2 w-2 h-2 rounded-full transition-colors duration-300 ${isBabilActive ? 'bg-white shadow-[0_0_5px_white]' : 'bg-slate-900'}`}></div>
        </button>
      </div>

      {/* The Signage */}
      <div className="relative group perspective-1000">
        {/* Wire/Hanging effect */}
        <div className="absolute -top-12 left-10 w-1 h-12 bg-slate-800"></div>
        <div className="absolute -top-12 right-10 w-1 h-12 bg-slate-800"></div>

        <div className={`
          relative px-12 py-8 rounded-2xl border-4 transition-all duration-700
          ${isBabilActive
            ? 'border-emerald-500 bg-slate-900/50 shadow-[0_0_50px_rgba(16,185,129,0.3),inset_0_0_30px_rgba(16,185,129,0.1)]'
            : 'border-slate-800 bg-slate-900 shadow-none'
          }
        `}>
          <h2 className={`
            text-3xl md:text-6xl font-black text-center uppercase tracking-tighter transition-all duration-300 select-none
            ${isBabilActive
              ? 'text-white drop-shadow-[0_0_10px_rgba(16,185,129,1)]'
              : 'text-slate-800 drop-shadow-none'
            }
          `}>
            <span className={isBabilActive ? 'animate-pulse' : ''}>İnsani</span>
            <span className="mx-4">Yardım</span>
            <span className={isBabilActive ? 'animate-[pulse_3s_infinite]' : ''}>Derneği</span>
          </h2>

          {/* Flickering subtitle effect */}
          <p className={`
            mt-2 text-center font-mono text-sm tracking-[0.5em] transition-all duration-500
            ${isBabilActive ? 'text-emerald-400 opacity-90 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-slate-800 opacity-20'}
          `}>
            EST. 2024
          </p>
        </div>

        {/* Reflection on floor */}
        <div className={`
            absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl transition-opacity duration-500 pointer-events-none
            ${isBabilActive ? 'opacity-100' : 'opacity-0'}
        `}></div>
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



const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    donorCount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*Yeni Demo Talebi*%0A%0A` +
      `*Ad Soyad:* ${formData.name}%0A` +
      `*Kurum:* ${formData.organization}%0A` +
      `*Telefon:* ${formData.phone}%0A` +
      `*Bağışçı Sayısı:* ${formData.donorCount}`;

    window.open(`https://wa.me/905058326123?text=${message}`, '_blank');

    // Formu temizle
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

      </div>
    </footer>
  );
};

const FloatingWhatsAppButton = () => {
  // Işık efekti için state (6 saniyede bir tetiklenecek)
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShine(true);
      // Animasyon 1sn sürdüğü için 1sn sonra state'i resetle (CSS animation-iteration-count: 1 yapabilmek için class toggle)
      setTimeout(() => setShine(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shine-move {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { left: 200%; opacity: 0; }
        }
      `}</style>
      <a
        href="https://wa.me/905058326123?text=Selamun%20Aleykum%2C%20derne%C4%9Fimiz-vakf%C4%B1m%C4%B1z%20i%C3%A7in%20ba%C4%9F%C4%B1%C5%9F%20sistemi%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center justify-center"
        aria-label="WhatsApp ile iletişime geç"
      >
        <div
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300"
          style={{ animation: 'heartbeat 2s infinite ease-in-out' }}
        >
          {/* WhatsApp Icon (Lucide MessageSquare kullanıyoruz ama benzetebiliriz veya text ekleyebiliriz) 
               Burada MessageSquare yerine daha spesifik bir ikon yoksa, basit bir SVG veya MessageSquare kullanalım.
               Lucide içinde 'MessageCircle' daha yuvarlak ve benzer.
           */}
          {/* WhatsApp SVG Logo */}
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Online Indicator Badge */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>

          {/* Işık Efekti */}
          <div className={`absolute top-0 w-full h-full rounded-full overflow-hidden pointer-events-none`}>
            <div
              className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 ${shine ? 'block' : 'hidden'}`}
              style={{ animation: shine ? 'shine-move 1s ease-in-out forwards' : 'none' }}
            />
          </div>
        </div>
      </a>
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-gray-100 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SignageSection />
      <Features />
      {/* <Pricing /> */}


      <DemoRequestForm />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;

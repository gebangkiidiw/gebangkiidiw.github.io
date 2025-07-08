import { AffiliateCard } from "./AffiliateCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, DollarSign, Gift, CreditCard, Zap, Play } from "lucide-react";
import { useDynamicLinks } from "@/hooks/useDynamicLinks";

const affiliateLinks = [
  {
    id: 1,
    title: "PINJOL MUDAH CAIR",
    subtitle: "Aman & Terpercaya",
    description: "Dapatkan pinjaman instan dengan bunga rendah dan proses cepat dalam 5 menit!",
    amount: "Limit s/d 20 Juta",
    url: "https://i.adapundi.co/t87bzq8",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-green-400 to-emerald-600",
    badge: "POPULER",
    features: ["Proses 5 Menit", "Bunga Rendah", "Tanpa Jaminan"]
  },
  {
    id: 2,
    title: "AKULAKU VOUCHER",
    subtitle: "Bonus Langsung Rp150.000",
    description: "Klaim voucher gratis senilai Rp150.000 untuk belanja atau cicilan 0%!",
    amount: "Rp150.000",
    url: "https://s.akulaku.com/Vi4NE4",
    icon: <Gift className="w-6 h-6" />,
    color: "from-purple-400 to-pink-600",
    badge: "TERBATAS",
    features: ["Gratis Voucher", "Cicilan 0%", "Cashback"]
  },
  {
    id: 3,
    title: "NEOBANK VOUCHER",
    subtitle: "Bonus Langsung Rp115.000",
    description: "Buka rekening digital dan dapatkan bonus langsung Rp115.000 di akun kamu!",
    amount: "Rp115.000",
    url: "https://s.bankneo.co.id/ro1h10",
    icon: <CreditCard className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-600",
    badge: "TRENDING",
    features: ["Bonus Instan", "Rekening Digital", "Tanpa Biaya Admin"]
  },
  {
    id: 4,
    title: "DANA KAGET",
    subtitle: "Hadiah Mendadak Untukmu",
    description: "Kejutan dana mendadak bisa datang kapan saja! Buruan klaim sebelum kehabisan!",
    amount: "Hadiah Misterius",
    url: "#",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-400 to-red-600",
    badge: "SEGERA",
    features: ["Hadiah Acak", "Claim Harian", "Bonus Surprise"]
  },
  {
    id: 5,
    title: "TELEGRAM CHANNEL",
    subtitle: "Join Komunitas Cuan",
    description: "Bergabung dengan ribuan member yang sudah merasakan cuan dari tips terbaru!",
    amount: "10K+ Members",
    url: "https://t.me/gebangkiidiw",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-indigo-400 to-purple-600",
    badge: "KOMUNITAS",
    features: ["Tips Cuan", "Update Harian", "Diskusi Gratis"]
  },
  {
    id: 6,
    title: "LOOPSTREAM TOOLS",
    subtitle: "Live Streaming 24/7",
    description: "Aplikasi live streaming otomatis tanpa RDP. Hasilkan cuan dari konten kamu!",
    amount: "Streaming Otomatis",
    url: "https://lynk.id/gebangkiidiw",
    icon: <Play className="w-6 h-6" />,
    color: "from-teal-400 to-green-600",
    badge: "TOOLS",
    features: ["24/7 Streaming", "Tanpa RDP", "Auto Pilot"]
  }
];

export const AffiliateLinkSection = () => {
  const { getDanaKagetLink, loading } = useDynamicLinks();
  const danaKagetLink = getDanaKagetLink();

  // Update the DANA KAGET link with dynamic data
  const affiliateLinksWithDynamic = affiliateLinks.map(link => {
    if (link.id === 4 && danaKagetLink) {
      return {
        ...link,
        url: danaKagetLink.url,
        title: danaKagetLink.title || link.title,
        description: danaKagetLink.description || link.description
      };
    }
    return link;
  });

  return (
    <section id="affiliate-links" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-success bg-clip-text text-transparent">
              Peluang Cuan Terbaik
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pilih platform terpercaya dan mulai raih penghasilan dari hp kamu hari ini juga! 
            <span className="text-accent font-bold"> Terbukti membayar!</span>
          </p>
        </div>
        
        {/* Affiliate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {affiliateLinksWithDynamic.map((link) => (
            <AffiliateCard
              key={link.id}
              id={link.id}
              title={link.title}
              subtitle={link.subtitle}
              description={link.description}
              amount={link.amount}
              url={link.url}
              icon={link.icon}
              color={link.color}
              badge={link.badge}
              features={link.features}
            />
          ))}
        </div>
        
        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Telegram Channel */}
          <div className="gradient-card p-8 rounded-lg glass border border-white/10 hover:border-primary/30 transition-smooth group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center shadow-neon">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                💬 TELEGRAM CHANNEL
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join channel eksklusif untuk tips, trik, dan update terbaru tentang peluang cuan! 
                <span className="text-success font-semibold">Gratis akses selamanya!</span>
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://t.me/gebangkiidiw', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Gabung Channel
              </Button>
            </div>
          </div>
          
          {/* LoopStream Tools */}
          <div className="gradient-card p-8 rounded-lg glass border border-white/10 hover:border-secondary/30 transition-smooth group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center shadow-neon">
                <Wrench className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-smooth">
                🔧 LOOPSTREAM TOOLS
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Aplikasi live streaming 24/7 tanpa RDP! Perfect untuk content creator dan affiliate marketer.
                <span className="text-accent font-semibold"> Tool wajib punya!</span>
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://lynk.id/gebangkiidiw', '_blank')}
              >
                <Wrench className="w-5 h-5 mr-2" />
                Download Tools
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 gradient-card rounded-lg glass border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-accent">
            🚀 Siap Mulai Journey Cuan Kamu?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Ribuan member sudah merasakan hasilnya. Sekarang giliran kamu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://t.me/gebangkiidiw', '_blank')}
            >
              Join Komunitas
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Kembali ke Atas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
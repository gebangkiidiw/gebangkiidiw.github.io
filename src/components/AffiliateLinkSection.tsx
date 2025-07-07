import { AffiliateCard } from "./AffiliateCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench } from "lucide-react";

const affiliateLinks = [
  {
    title: "🏦 PINJOL MUDAH CAIR",
    description: "Platform pinjaman online terpercaya dengan proses cepat dan bunga rendah. Approval rate tinggi dengan persyaratan mudah!",
    url: "https://i.adapundi.co/t87bzq8",
    icon: "money" as const,
    variant: "cta" as const,
    urgent: true
  },
  {
    title: "🎁 AKULAKU VOUCHER",
    description: "Dapatkan voucher gratis senilai Rp150.000 untuk belanja online atau top up game favorit kamu!",
    amount: "Rp150.000",
    url: "https://s.akulaku.com/Vi4NE4",
    icon: "gift" as const,
    variant: "success" as const,
    urgent: true
  },
  {
    title: "💳 NEOBANK VOUCHER", 
    description: "Klaim voucher eksklusif senilai Rp115.000 dari NeoBank. Limited time offer, jangan sampai terlewat!",
    amount: "Rp115.000",
    url: "https://s.bankneo.co.id/ro1h10",
    icon: "coins" as const,
    variant: "success" as const,
    urgent: true
  },
  {
    title: "💸 DANA KAGET",
    description: "Surprise cash setiap hari! Raih kesempatan mendapat dana kaget dengan nominal fantastis. Buruan klaim sebelum kehabisan!",
    url: "#",
    icon: "trending" as const,
    variant: "neon" as const,
    urgent: true
  }
];

export const AffiliateLinkSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {affiliateLinks.map((link, index) => (
            <AffiliateCard
              key={index}
              title={link.title}
              description={link.description}
              amount={link.amount}
              url={link.url}
              icon={link.icon}
              variant={link.variant}
              urgent={link.urgent}
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
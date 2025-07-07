import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/30 rounded-full animate-bounce-subtle"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-secondary/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-accent font-semibold">TRENDING #1 AFFILIATE</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Bang Joss
          </span>
          <br />
          <span className="text-foreground">💸 Gebang Kiidiw</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Cuan Terus dari HP Kamu!
        </p>
        
        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="text-accent font-bold">EKSKLUSIF!</span> Akses langsung ke semua platform 
          <span className="text-success font-semibold"> TERPERCAYA</span> untuk 
          <span className="text-primary font-bold"> CUAN MAKSIMAL</span> setiap hari!
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-success">1000+</div>
            <div className="text-sm text-muted-foreground">Member Sukses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Terpercaya</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-4 group"
            onClick={() => document.getElementById('affiliate-links')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-smooth" />
            Mulai Cuan Sekarang!
          </Button>
          
          <Button 
            variant="neon" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://t.me/gebangkiidiw', '_blank')}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Join Telegram
          </Button>
        </div>
        
        {/* Urgency Text */}
        <p className="text-warning font-bold mt-6 animate-pulse">
          ⚡ BURUAN! Slot Terbatas - Jangan Sampai Ketinggalan! ⚡
        </p>
      </div>
    </section>
  );
};
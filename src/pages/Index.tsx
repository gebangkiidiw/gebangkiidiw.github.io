import { HeroSection } from "@/components/HeroSection";
import { AffiliateLinkSection } from "@/components/AffiliateLinkSection";
import { FloatingElements } from "@/components/FloatingElements";
import { UserDataForm } from "@/components/UserDataForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <HeroSection />
      
      {/* User Data Collection Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Join Member Eksklusif
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Daftar sekarang dan dapatkan akses prioritas ke semua promo dan tips terbaru! 
            <span className="text-accent font-bold"> Gratis selamanya!</span>
          </p>
        </div>
        <UserDataForm />
      </section>

      <AffiliateLinkSection />
    </div>
  );
};

export default Index;

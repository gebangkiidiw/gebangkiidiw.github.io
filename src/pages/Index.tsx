import { HeroSection } from "@/components/HeroSection";
import { AffiliateLinkSection } from "@/components/AffiliateLinkSection";
import { FloatingElements } from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <HeroSection />
      <AffiliateLinkSection />
    </div>
  );
};

export default Index;

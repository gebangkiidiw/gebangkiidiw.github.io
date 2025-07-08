import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface AffiliateCardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  amount: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  features: string[];
}

export const AffiliateCard = ({ 
  id,
  title, 
  subtitle,
  description, 
  amount, 
  url, 
  icon, 
  color,
  badge,
  features
}: AffiliateCardProps) => {
  const handleClick = () => {
    // Special handling for DANA KAGET - auto redirect to Shopee
    if (id === 4) {
      // Open original URL first
      if (url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
      
      // Auto redirect to Shopee after 2 seconds (only once per session)
      const hasRedirected = sessionStorage.getItem('danaKagetRedirected');
      if (!hasRedirected) {
        sessionStorage.setItem('danaKagetRedirected', 'true');
        setTimeout(() => {
          window.open('https://shopee.co.id/', '_blank', 'noopener,noreferrer');
        }, 2000);
      }
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -top-2 -right-2 z-10">
        <Badge variant="destructive" className="animate-pulse-glow font-bold text-xs">
          {badge}
        </Badge>
      </div>
      
      <div className="gradient-card p-6 rounded-lg glass border border-white/10 hover:border-white/20 transition-smooth group-hover:shadow-glow group-hover:scale-105 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-neon`}>
                <div className="text-white">
                  {icon}
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-xl text-foreground group-hover:text-primary transition-smooth">
                {title}
              </h3>
              <p className="text-accent font-semibold text-sm">
                {subtitle}
              </p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Amount */}
          <div className="inline-flex items-center gap-1 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-bold mb-4">
            {amount}
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-white/5 text-muted-foreground px-2 py-1 rounded-full border border-white/10"
              >
                ✓ {feature}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={handleClick}
            variant="cta"
            className="w-full group/btn"
            size="lg"
          >
            <span className="mr-2">Klaim Sekarang</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </div>
  );
};
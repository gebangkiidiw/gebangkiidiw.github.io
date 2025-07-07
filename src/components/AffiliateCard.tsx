import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Gift, Coins, TrendingUp } from "lucide-react";

interface AffiliateCardProps {
  title: string;
  description: string;
  amount?: string;
  url: string;
  icon: "money" | "gift" | "coins" | "trending";
  variant: "default" | "success" | "cta" | "neon";
  urgent?: boolean;
}

const iconMap = {
  money: Zap,
  gift: Gift,
  coins: Coins,
  trending: TrendingUp,
};

export const AffiliateCard = ({ 
  title, 
  description, 
  amount, 
  url, 
  icon, 
  variant,
  urgent = false 
}: AffiliateCardProps) => {
  const IconComponent = iconMap[icon];
  
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative group">
      {urgent && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow">
            TERBATAS!
          </div>
        </div>
      )}
      
      <div className="gradient-card p-6 rounded-lg glass border border-white/10 hover:border-white/20 transition-smooth group-hover:shadow-glow group-hover:scale-105">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-neon">
              <IconComponent className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-smooth">
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            {amount && (
              <div className="inline-flex items-center gap-1 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Coins className="w-4 h-4" />
                {amount}
              </div>
            )}
            
            <Button 
              onClick={handleClick}
              variant={variant}
              className="w-full group/btn"
              size="lg"
            >
              <span className="mr-2">Klaim Sekarang</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
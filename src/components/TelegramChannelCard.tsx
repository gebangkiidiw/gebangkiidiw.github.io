import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const TelegramChannelCard = () => {
  return (
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
  );
};
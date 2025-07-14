import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export const LoopStreamCard = () => {
  return (
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
  );
};
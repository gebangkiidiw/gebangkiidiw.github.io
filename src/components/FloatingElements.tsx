import { Coins, Zap, Gift, TrendingUp } from "lucide-react";

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Money Icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Coins className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-subtle opacity-15" style={{animationDelay: '1s'}}>
        <Zap className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float opacity-20" style={{animationDelay: '2s'}}>
        <Gift className="w-10 h-10 text-success" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce-subtle opacity-15" style={{animationDelay: '3s'}}>
        <TrendingUp className="w-7 h-7 text-secondary" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-32 left-1/3 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float opacity-40"></div>
      <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-r from-secondary/10 to-success/10 rounded-full blur-xl animate-bounce-subtle opacity-30"></div>
    </div>
  );
};
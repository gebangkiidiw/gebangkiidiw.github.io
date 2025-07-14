import { Button } from "@/components/ui/button";

export const BottomCTA = () => {
  return (
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
  );
};
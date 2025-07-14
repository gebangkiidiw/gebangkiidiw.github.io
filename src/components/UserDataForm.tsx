import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Gift, Sparkles, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  danaNumber: string;
  email: string;
}

export const UserDataForm = () => {
  console.log("UserDataForm is rendering!");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    danaNumber: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.danaNumber) {
      toast({
        title: "Data tidak lengkap",
        description: "Nama dan nomor DANA wajib diisi!",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('user_submissions')
        .insert([
          {
            full_name: formData.fullName,
            dana_number: formData.danaNumber,
            email: formData.email || null
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Data berhasil disimpan! 🎉",
        description: "Terima kasih! Data kamu sudah kami terima.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", danaNumber: "", email: "" });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Gagal menyimpan data",
        description: "Terjadi kesalahan, coba lagi ya!",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto gradient-card glass border border-success/30 shadow-neon animate-scale-in">
        <CardContent className="pt-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-success to-accent flex items-center justify-center shadow-neon">
            <CheckCircle className="w-8 h-8 text-success-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-success">
            Data Tersimpan! 🎉
          </h3>
          <p className="text-muted-foreground">
            Terima kasih sudah bergabung dengan komunitas cuan!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto gradient-card glass border border-primary/30 hover:border-primary/50 transition-smooth shadow-neon">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center shadow-neon animate-pulse">
          <Gift className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          Daftar Member VIP
          <Sparkles className="w-5 h-5 text-accent" />
        </CardTitle>
        <CardDescription className="text-base">
          Dapatkan akses eksklusif ke <span className="text-accent font-semibold">tips cuan terbaru</span> dan 
          <span className="text-success font-semibold"> bonus spesial!</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Lengkap */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Nama Lengkap *
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Masukkan nama lengkap kamu"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="glass border-white/20 focus:border-primary/50 text-base"
              required
            />
          </div>

          {/* Nomor DANA */}
          <div className="space-y-2">
            <Label htmlFor="danaNumber" className="text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Nomor DANA *
            </Label>
            <Input
              id="danaNumber"
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={formData.danaNumber}
              onChange={(e) => handleInputChange('danaNumber', e.target.value)}
              className="glass border-white/20 focus:border-primary/50 text-base"
              pattern="[0-9]*"
              required
            />
          </div>

          {/* Email (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email (opsional)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="glass border-white/20 focus:border-primary/50 text-base"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold gradient-primary hover:scale-105 transition-smooth shadow-neon"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                Menyimpan...
              </>
            ) : (
              <>
                <Gift className="w-5 h-5 mr-2" />
                Daftar Sekarang!
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            * Data kamu aman dan tidak akan dibagikan ke pihak ketiga
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
import { MessageCircle, Wrench, DollarSign, Gift, CreditCard, Zap, Play } from "lucide-react";
import { ReactElement } from "react";

export interface AffiliateLink {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  amount: string;
  url: string;
  icon: ReactElement;
  color: string;
  badge: string;
  features: string[];
}

export const affiliateLinks: AffiliateLink[] = [
  {
    id: 1,
    title: "PINJOL MUDAH CAIR",
    subtitle: "Aman & Terpercaya",
    description: "Dapatkan pinjaman instan dengan bunga rendah dan proses cepat dalam 5 menit!",
    amount: "Limit s/d 20 Juta",
    url: "https://i.adapundi.co/t87bzq8",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-green-400 to-emerald-600",
    badge: "POPULER",
    features: ["Proses 5 Menit", "Bunga Rendah", "Tanpa Jaminan"]
  },
  {
    id: 2,
    title: "AKULAKU VOUCHER",
    subtitle: "Bonus Langsung Rp150.000",
    description: "Klaim voucher gratis senilai Rp150.000 untuk belanja atau cicilan 0%!",
    amount: "Rp150.000",
    url: "https://s.akulaku.com/Vi4NE4",
    icon: <Gift className="w-6 h-6" />,
    color: "from-purple-400 to-pink-600",
    badge: "TERBATAS",
    features: ["Gratis Voucher", "Cicilan 0%", "Cashback"]
  },
  {
    id: 3,
    title: "NEOBANK VOUCHER",
    subtitle: "Bonus Langsung Rp115.000",
    description: "Buka rekening digital dan dapatkan bonus langsung Rp115.000 di akun kamu!",
    amount: "Rp115.000",
    url: "https://s.bankneo.co.id/ro1h10",
    icon: <CreditCard className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-600",
    badge: "TRENDING",
    features: ["Bonus Instan", "Rekening Digital", "Tanpa Biaya Admin"]
  },
  {
    id: 4,
    title: "DANA KAGET",
    subtitle: "Hadiah Mendadak Untukmu",
    description: "Kejutan dana mendadak bisa datang kapan saja! Buruan klaim sebelum kehabisan!",
    amount: "Hadiah Misterius",
    url: "#",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-400 to-red-600",
    badge: "SEGERA",
    features: ["Hadiah Acak", "Claim Harian", "Bonus Surprise"]
  },
  {
    id: 5,
    title: "TELEGRAM CHANNEL",
    subtitle: "Join Komunitas Cuan",
    description: "Bergabung dengan ribuan member yang sudah merasakan cuan dari tips terbaru!",
    amount: "10K+ Members",
    url: "https://t.me/gebangkiidiw",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-indigo-400 to-purple-600",
    badge: "KOMUNITAS",
    features: ["Tips Cuan", "Update Harian", "Diskusi Gratis"]
  },
  {
    id: 6,
    title: "LOOPSTREAM TOOLS",
    subtitle: "Live Streaming 24/7",
    description: "Aplikasi live streaming otomatis tanpa RDP. Hasilkan cuan dari konten kamu!",
    amount: "Streaming Otomatis",
    url: "https://lynk.id/gebangkiidiw",
    icon: <Play className="w-6 h-6" />,
    color: "from-teal-400 to-green-600",
    badge: "TOOLS",
    features: ["24/7 Streaming", "Tanpa RDP", "Auto Pilot"]
  }
];
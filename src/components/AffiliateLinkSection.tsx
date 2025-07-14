import { AffiliateCard } from "./AffiliateCard";
import { TelegramChannelCard } from "./TelegramChannelCard";
import { LoopStreamCard } from "./LoopStreamCard";
import { BottomCTA } from "./BottomCTA";
import { useDynamicLinks } from "@/hooks/useDynamicLinks";
import { affiliateLinks } from "@/data/affiliateLinks";

export const AffiliateLinkSection = () => {
  const { getDanaKagetLink, loading } = useDynamicLinks();
  const danaKagetLink = getDanaKagetLink();

  // Update the DANA KAGET link with dynamic data
  const affiliateLinksWithDynamic = affiliateLinks.map(link => {
    if (link.id === 4 && danaKagetLink) {
      return {
        ...link,
        url: danaKagetLink.url,
        title: danaKagetLink.title || link.title,
        description: danaKagetLink.description || link.description
      };
    }
    return link;
  });

  return (
    <section id="affiliate-links" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-success bg-clip-text text-transparent">
              Peluang Cuan Terbaik
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pilih platform terpercaya dan mulai raih penghasilan dari hp kamu hari ini juga! 
            <span className="text-accent font-bold"> Terbukti membayar!</span>
          </p>
        </div>
        
        {/* Affiliate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {affiliateLinksWithDynamic.map((link) => (
            <AffiliateCard
              key={link.id}
              id={link.id}
              title={link.title}
              subtitle={link.subtitle}
              description={link.description}
              amount={link.amount}
              url={link.url}
              icon={link.icon}
              color={link.color}
              badge={link.badge}
              features={link.features}
            />
          ))}
        </div>
        
        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TelegramChannelCard />
          <LoopStreamCard />
        </div>
        
        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
};
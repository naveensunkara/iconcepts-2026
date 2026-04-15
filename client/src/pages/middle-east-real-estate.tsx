import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SignatureOrbit, GlitchText, FadeIn } from "@/components/animations";
import { HeroGridLines } from "@/components/decorative-shapes";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { SEO } from "@/components/seo";

const KEY_POINTS = [
  "8M+ Indians in the Gulf with strong South Indian diaspora presence and intent to invest in India.",
  "NRI buyer profile has shifted toward value-driven, premium-focused and high purchasing-power segments.",
  "Currency advantage (AED/SAR to INR) increases affordability and speeds up buying decisions.",
  "Gulf News offers digital, print, social amplification, email, newsletter and tele-calling touchpoints.",
  "Campaign model is built around visibility, trust, and conversion with engagement tools like webinars and virtual tours.",
] as const;

const VALUE_UNLOCKS = [
  "Direct access to high-intent GCC property buyers",
  "Media-backed credibility and premium brand positioning",
  "Qualified investor engagement with managed execution",
  "Potential for faster inventory movement and long-term NRI pipeline",
] as const;

export default function MiddleEastRealEstatePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <main>
      <SEO
        path="/middle-east/real-estate"
        title="Middle East Opportunity - Real Estate"
        description="Gulf NRI real estate opportunity: market context, campaign direction, and media pathway through Gulf News."
      />

      <section
        ref={containerRef}
        className="relative min-h-[80vh] bg-[#F8F8F8] overflow-hidden"
      >
        <HeroGridLines />
        <div className="absolute top-[11%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
          <SignatureOrbit
            text={SIGNATURE_ORBIT_TEXT}
            size={120}
            progress={scrollYProgress}
            minOpacity={0.06}
            maxOpacity={0.18}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-28 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <GlitchText
              text="Gulf NRI Real Estate"
              className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] max-w-5xl"
          >
            Unlocking Gulf NRI demand for
            <span className="font-display italic text-primary"> real estate growth.</span>
          </motion.h1>

          <p className="mt-8 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
            This page is built from the provided presentation and captures the core strategy:
            earn visibility in trusted GCC media environments, build confidence with story-led
            messaging, and convert intent through structured buyer journeys.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-[-0.02em]">
                Strategic takeaways
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {KEY_POINTS.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <div className="border border-border/40 rounded-xl p-5">
                  <p className="text-muted-foreground text-sm lg:text-base leading-[1.8]">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h3 className="font-heading text-2xl lg:text-3xl font-extrabold mb-8">
            What this can unlock
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VALUE_UNLOCKS.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <div className="bg-white border border-border/40 rounded-xl px-5 py-4 text-sm text-foreground/80">
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

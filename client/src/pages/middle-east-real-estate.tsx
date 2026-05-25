import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SignatureOrbit, GlitchText, FadeIn } from "@/components/animations";
import { HeroGridLines } from "@/components/decorative-shapes";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { SEO } from "@/components/seo";

const OPPORTUNITY_STATS = [
  {
    headline: "8 Million+ Prospects",
    body: "A massive Indian diaspora across the Gulf, featuring a dense concentration of South Indian professionals with a strong intent to invest back home.",
  },
  {
    headline: "The Currency Advantage",
    body: "The strength of the AED and SAR against the INR significantly boosts their purchasing power, accelerating closing times and decision-making.",
  },
  {
    headline: "The Premium Shift",
    body: "Modern Gulf NRI buyers are heavily focused on luxury developments, gated communities, and high-yield commercial real estate.",
  },
] as const;

const STRATEGIC_PILLARS = [
  {
    index: "01",
    pillar: "Earn Visibility",
    strategy: "Dominate the premium media environments your prospects trust daily.",
    touchpoints: "Digital, Print, & Newsletter Takeovers",
  },
  {
    index: "02",
    pillar: "Build Trust",
    strategy: "Replace cold pitches with story-led messaging that highlights ROI and security.",
    touchpoints: "Editorial Features & Social Amplification",
  },
  {
    index: "03",
    pillar: "Convert Intent",
    strategy: "Drive prospects into a structured, highly engaged sales funnel.",
    touchpoints: "Webinars, Virtual Tours, & Tele-calling",
  },
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
        title="Capture the Gulf NRI Real Estate Surge"
        description="Scale property sales by tapping into the high-purchasing-power Gulf NRI diaspora. iConcepts pairs 360° marketing with premium media partnerships to connect inventory with high-intent buyers."
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
            Capture the Gulf NRI
            <span className="font-display italic text-primary"> Real Estate Surge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-foreground/85 text-lg lg:text-xl font-medium max-w-3xl"
          >
            Scale your property sales by tapping into a high-purchasing-power diaspora.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl"
          >
            The Gulf Cooperation Council (GCC) region holds an untapped goldmine for Indian
            real estate developers. iConcepts bridges the gap, combining 360° marketing
            expertise with premium media partnerships to connect your inventory directly
            with high-intent NRI buyers.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" aria-hidden>🌐</span>
              <span className="text-primary text-xs font-mono font-bold uppercase tracking-[0.3em]">
                The Middle East Opportunity
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] max-w-4xl">
              The opportunity, by the
              <span className="font-display italic text-primary"> numbers.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
              The shift in the Gulf NRI profile means buyers are no longer just looking for
              modest retirement homes—they are actively investing in premium, luxury, and
              value-driven Indian real estate.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {OPPORTUNITY_STATS.map((stat, i) => (
              <FadeIn key={stat.headline} delay={i * 0.08}>
                <div className="group relative h-full bg-[#FAFAFA] border border-border/40 rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:bg-white hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-primary text-xs font-mono font-bold tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-[1px] bg-primary/40 mt-2" />
                  </div>
                  <h3 className="font-heading text-xl lg:text-2xl font-extrabold tracking-[-0.01em] mb-4">
                    {stat.headline}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-[1.8]">
                    {stat.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" aria-hidden>⚡</span>
              <span className="text-primary text-xs font-mono font-bold uppercase tracking-[0.3em]">
                Our Strategic Framework
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] max-w-4xl">
              Visibility to
              <span className="font-display italic text-primary"> conversion.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
              We don't just run ads; we build structured buyer journeys through trusted,
              high-credibility media environments like Gulf News. Our multi-channel campaign
              model is engineered across three core pillars.
            </p>
          </FadeIn>

          <div className="mt-12 hidden lg:grid grid-cols-12 gap-4 px-6 pb-4 border-b border-border/40">
            <div className="col-span-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
              #
            </div>
            <div className="col-span-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Pillar
            </div>
            <div className="col-span-5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Action Strategy
            </div>
            <div className="col-span-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Touchpoints Used
            </div>
          </div>

          <div className="mt-4 space-y-4 lg:space-y-2">
            {STRATEGIC_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.pillar} delay={i * 0.08}>
                <div className="group bg-white border border-border/40 rounded-2xl p-6 lg:p-0 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
                  <div className="hidden lg:grid grid-cols-12 gap-4 items-center px-6 py-6">
                    <div className="col-span-1">
                      <span className="font-display italic text-3xl text-primary">
                        {pillar.index}
                      </span>
                    </div>
                    <div className="col-span-3">
                      <h3 className="font-heading text-xl xl:text-2xl font-extrabold tracking-[-0.01em]">
                        {pillar.pillar}
                      </h3>
                    </div>
                    <div className="col-span-5">
                      <p className="text-muted-foreground text-sm xl:text-base leading-[1.7]">
                        {pillar.strategy}
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-foreground/85 text-sm xl:text-base font-medium leading-[1.6]">
                        {pillar.touchpoints}
                      </p>
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-display italic text-2xl text-primary">
                        {pillar.index}
                      </span>
                      <h3 className="font-heading text-xl font-extrabold tracking-[-0.01em]">
                        {pillar.pillar}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-[1.8] mb-4">
                      {pillar.strategy}
                    </p>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Touchpoints
                      </p>
                      <p className="text-foreground/85 text-sm font-medium">
                        {pillar.touchpoints}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

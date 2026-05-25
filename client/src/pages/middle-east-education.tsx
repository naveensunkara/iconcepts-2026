import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SignatureOrbit, GlitchText, FadeIn } from "@/components/animations";
import { HeroGridLines } from "@/components/decorative-shapes";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { SEO } from "@/components/seo";

const OPPORTUNITY_STATS = [
  {
    headline: "A Multi-Generational Diaspora",
    body: "Millions of Indian families in the Gulf actively evaluate long-term education pathways back home, with continuity, cultural alignment, and global exposure driving the shortlist.",
  },
  {
    headline: "The Affordability Advantage",
    body: "Gulf-based earnings combined with the AED and SAR strength against the INR give parents the confidence to commit to premium tuition, boarding, and full-cycle programs.",
  },
  {
    headline: "The Quality-First Shift",
    body: "Modern Gulf NRI parents prioritize institutional reputation, academic outcomes, safety, and environment — they are buying long-term value, not the lowest fee.",
  },
] as const;

const STRATEGIC_PILLARS = [
  {
    index: "01",
    pillar: "Earn Visibility",
    strategy: "Show up where Gulf NRI parents already make trusted, informed decisions about their children's future.",
    touchpoints: "Digital, Print, & Newsletter Takeovers on Gulf News",
  },
  {
    index: "02",
    pillar: "Build Trust",
    strategy: "Replace generic creatives with editorial-led storytelling around outcomes, faculty, safety, and student life.",
    touchpoints: "Editorial Features & Social Amplification on Instagram, Facebook, LinkedIn & X",
  },
  {
    index: "03",
    pillar: "Convert Intent",
    strategy: "Move qualified prospects into a structured, high-engagement admissions funnel that closes confidently.",
    touchpoints: "Webinars, Virtual Campus Tours & Counsellor Tele-calling",
  },
] as const;

export default function MiddleEastEducationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <main>
      <SEO
        path="/middle-east/education"
        title="Win the Gulf NRI Admissions Race"
        description="Convert high-intent Gulf NRI families into confident enrollments. iConcepts pairs 360° marketing with Gulf News partnerships to deliver premium, story-led admissions journeys."
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
              text="Middle East NRI Admissions"
              className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] max-w-5xl"
          >
            Win the Gulf NRI
            <span className="font-display italic text-primary"> Admissions Race.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-foreground/85 text-lg lg:text-xl font-medium max-w-3xl"
          >
            Convert high-intent NRI families into confident enrollments at your campus.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl"
          >
            The Gulf is one of the most fertile admissions catchments for Indian institutions —
            a multi-generational diaspora with the means, intent, and quality bar to commit to
            premium education back home. iConcepts bridges the distance, combining 360° marketing
            expertise with premium media partnerships like Gulf News to put your institution in
            front of NRI parents the moment they begin shortlisting.
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
              The audience, by the
              <span className="font-display italic text-primary"> signal.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
              Today's Gulf NRI parent is more discerning, more informed, and more willing to
              invest in long-term educational outcomes than ever before. Reaching them takes
              more than awareness — it takes the right environment and the right narrative.
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
              <span className="font-display italic text-primary"> enrollment.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
              We don't just run ads; we build structured admissions journeys through trusted,
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

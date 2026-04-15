import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SignatureOrbit, GlitchText, FadeIn } from "@/components/animations";
import { HeroGridLines } from "@/components/decorative-shapes";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { SEO } from "@/components/seo";

const AUDIENCE_INSIGHTS = [
  "A significant segment of Indian families in the Gulf actively evaluate long-term education pathways in India.",
  "Decision factors include institutional reputation, academic outcomes, environment, safety, and continuity.",
  "Gulf-based earnings improve affordability and accelerate confident admissions decisions.",
  "Institutions in India remain strongly preferred for cultural alignment with global exposure.",
] as const;

const GULF_NEWS_CHANNELS = [
  "Digital articles on GulfNews.com",
  "Social amplification on Instagram, Facebook, LinkedIn and X",
  "Targeted lead-generation campaigns for NRI audiences",
  "Print coverage and curated newsletter/email outreach",
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
        title="Middle East Opportunity - Education"
        description="Middle East NRI admissions opportunity overview with Gulf News powered outreach strategy."
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
            Tap Middle East NRI families for
            <span className="font-display italic text-primary"> premium admissions.</span>
          </motion.h1>

          <p className="mt-8 text-muted-foreground text-base lg:text-lg leading-[1.85] max-w-3xl">
            This page translates the submitted deck into a web-ready narrative:
            why the audience matters, why timing is critical, and how a Gulf News-led
            approach can improve enrollment quality and pipeline consistency.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-[-0.02em]">
                Audience and market signal
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {AUDIENCE_INSIGHTS.map((item, i) => (
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
            Gulf News delivery channels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GULF_NEWS_CHANNELS.map((item, i) => (
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

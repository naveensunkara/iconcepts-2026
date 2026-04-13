import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FadeIn,
  GlitchText,
  MagneticElement,
  SignatureOrbit,
  TiltCard,
} from "@/components/animations";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";
import { SEO } from "@/components/seo";
import { HeroGridLines } from "@/components/decorative-shapes";

const AI_LOGO = "/logos/iconcepts_ai.jpeg";

const BODY_PARAGRAPHS = [
  "We are an INS Accredited 360° advertising agency with a dedicated AI wing Audio/Video. Through this, we are able to produce a wide range of advertisements at a fraction of the traditional cost and turnaround time.",
  "Our team brings deep industry experience, allowing us to create high-quality content that can be generated within minutes while still maintaining strong creative direction and storytelling. One of our key strengths lies in our repository of Indian faces, voices, and tones, enabling us to produce content that feels highly local, relatable, and culturally aligned.",
  "A major focus for us is ensuring that the final output feels human-made rather than AI-generated. We prioritize realism, authenticity, and believability, avoiding anything that feels overly artificial. This helps the content connect better with audiences across different segments.",
  "We can tailor everything to match your brand's requirements. Additionally, we can also seamlessly incorporate any images or videos you provide to further enhance realism and brand alignment.",
  "Overall, our AI-driven approach allows us to deliver faster, more cost-effective solutions without compromising on quality or impact.",
] as const;

function IconceptsAIHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen bg-[#F8F8F8] overflow-hidden"
      data-testid="section-ai-hero"
    >
      <HeroGridLines />

      <div className="absolute top-[8%] -right-[8%] pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(8rem,18vw,16rem)] font-extrabold text-foreground/[0.035] leading-none block"
        >
          AI
        </motion.span>
      </div>

      <div className="absolute top-[11%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
        <SignatureOrbit
          text={SIGNATURE_ORBIT_TEXT}
          size={120}
          progress={scrollYProgress}
          minOpacity={0.06}
          maxOpacity={0.18}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end lg:min-h-[72vh]">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <GlitchText
                text="iConcepts AI"
                className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 72 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.25rem,6.5vw,7rem)] font-extrabold text-foreground leading-[0.9] tracking-[-0.03em]"
              data-testid="text-ai-headline"
            >
              Audio &amp; video
              <br />
              <span className="font-display italic text-primary">at speed,</span>
              <br />
              <span className="text-foreground/25">without the artificial feel.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-10 text-muted-foreground text-sm leading-relaxed max-w-lg"
            >
              A dedicated AI wing for advertisements that cost less, ship faster, and stay grounded in strong creative direction and local authenticity.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[320px]"
            >
              <TiltCard className="rounded-2xl border border-border/40 bg-white p-3 shadow-sm">
                <div className="overflow-hidden rounded-xl bg-[#0A0C14] aspect-square flex items-center justify-center">
                  <img
                    src={AI_LOGO}
                    alt="iConcepts AI"
                    className="w-full h-full object-contain"
                  />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/25 via-transparent to-transparent" />
    </section>
  );
}

function AIStorySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white" data-testid="section-ai-story">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="flex items-center gap-3 lg:sticky lg:top-28">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="The approach"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 lg:col-start-4 space-y-8">
            {BODY_PARAGRAPHS.map((text, i) => (
              <FadeIn key={i} delay={0.06 * i}>
                <p className="text-muted-foreground text-base lg:text-lg leading-[1.85]">
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pt-12 border-t border-border/30">
            <p className="text-foreground font-display italic text-xl lg:text-2xl max-w-xl leading-snug">
              Ready to explore AI-driven audio and video for your next campaign?
            </p>
            <MagneticElement strength={0.2}>
              <motion.button
                type="button"
                onClick={scrollToContact}
                className="inline-flex shrink-0 items-center gap-3 px-7 py-3.5 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                whileHover={{ scale: 1.05, gap: "14px" }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-ai-get-in-touch"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </MagneticElement>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function IconceptsAIPage() {
  return (
    <main>
      <SEO
        path="/ai"
        title="iConcepts AI"
        description="INS Accredited 360° advertising agency with a dedicated AI wing for audio and video. Fast, cost-effective ads with strong creative direction, local voices, and human-feeling output."
      />
      <IconceptsAIHero />
      <AIStorySection />
    </main>
  );
}

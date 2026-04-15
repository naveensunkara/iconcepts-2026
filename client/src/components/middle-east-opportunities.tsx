import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const GULF_LOGO = "/logos/Gulf News logo.png";
const REAL_ESTATE_LOGO = "/logos/middle-east-real-estate.svg";
const EDUCATION_LOGO = "/logos/middle-east-education.svg";

type Step = "cta" | "gulf" | "sectors";

const logoTileClass =
  "rounded-xl border border-border/40 bg-white p-[2px] shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const logoInnerClass = "flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-lg bg-black lg:h-[76px] lg:w-[76px]";

export function MiddleEastOpportunities({ className = "" }: { className?: string }) {
  const [step, setStep] = useState<Step>("cta");
  const [, setLocation] = useLocation();

  return (
    <div
      className={`flex flex-col items-center justify-end pb-8 text-center ${className}`}
      data-testid="middle-east-opportunities"
    >
      <AnimatePresence mode="wait">
        {step === "cta" && (
          <motion.button
            key="cta"
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            onClick={() => setStep("gulf")}
            className="group max-w-[14rem] text-balance border-b border-transparent pb-0.5 text-sm font-medium leading-snug text-foreground/70 transition-colors hover:border-primary hover:text-primary"
          >
            Explore Opportunities in Middle East
          </motion.button>
        )}

        {step === "gulf" && (
          <motion.div
            key="gulf"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-2"
          >
            <button
              type="button"
              onClick={() => setStep("sectors")}
              className={logoTileClass}
              aria-label="Show sector opportunities"
            >
              <div className={`${logoInnerClass} bg-black`}>
                <img src={GULF_LOGO} alt="" className="h-full w-full object-cover" />
              </div>
            </button>
            <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-foreground/40">Gulf News</span>
          </motion.div>
        )}

        {step === "sectors" && (
          <motion.div
            key="sectors"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col items-center gap-2">
              <div className={logoTileClass + " cursor-default hover:border-border/40 hover:shadow-sm"}>
                <div className={`${logoInnerClass} bg-black`}>
                  <img src={GULF_LOGO} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-foreground/40">Gulf News</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <button
                  type="button"
                  className={logoTileClass}
                  aria-label="View real estate opportunities page"
                  onClick={() => setLocation("/middle-east/real-estate")}
                >
                  <div className={`${logoInnerClass} bg-white`}>
                    <img src={REAL_ESTATE_LOGO} alt="" className="h-[70%] w-[70%] object-contain" />
                  </div>
                </button>
                <span className="max-w-[4.5rem] text-[8px] font-mono font-bold uppercase leading-tight tracking-[0.12em] text-foreground/40">
                  Real estate
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <button
                  type="button"
                  className={logoTileClass}
                  aria-label="View education opportunities page"
                  onClick={() => setLocation("/middle-east/education")}
                >
                  <div className={`${logoInnerClass} bg-white`}>
                    <img src={EDUCATION_LOGO} alt="" className="h-[70%] w-[70%] object-contain" />
                  </div>
                </button>
                <span className="max-w-[4.5rem] text-[8px] font-mono font-bold uppercase leading-tight tracking-[0.12em] text-foreground/40">
                  Education
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

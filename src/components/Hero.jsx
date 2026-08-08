import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import heroArchitecture from "@/assets/hero-architecture.jpg";
import heroDetail1 from "@/assets/hero-detail-1.jpg";
import heroDetail2 from "@/assets/hero-detail-2.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const floatX1 = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const floatY1 = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  const floatX2 = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const floatY2 = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 100]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container relative z-10 px-5 pt-24 pb-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />

              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.1] mb-4"
            >
              {t("hero.title1")}
              <span className="block text-gradient">
                {t("hero.title2")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground mb-3 tracking-wide"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity min-h-11"
              >
                {t("hero.cta1")}
                <ArrowRight size={16} />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-md font-medium text-sm hover:bg-muted transition-colors min-h-11"
              >
                {t("hero.cta2")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.9,
              ease: "easeOut",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              y: parallaxY,
              perspective: 1200,
            }}
            className="relative h-95 sm:h-115 lg:h-140 w-full max-w-130 mx-auto"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-border/50"
            >
              <img
                src={heroArchitecture}
                alt="AP Engineering architectural blueprint visualization"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-transparent to-accent/10" />
            </motion.div>

            <motion.div
              style={{
                x: floatX1,
                y: floatY1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="absolute -top-6 -right-2 sm:-right-8 w-28 sm:w-40 h-36 sm:h-52 rounded-xl overflow-hidden shadow-xl border-2 border-background hidden sm:block"
            >
              <img
                src={heroDetail1}
                alt="Modern architectural facade detail"
                width={768}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              style={{
                x: floatX2,
                y: floatY2,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="absolute -bottom-6 -left-2 sm:-left-10 w-32 sm:w-44 h-24 sm:h-32 rounded-xl overflow-hidden shadow-xl border-2 border-background hidden sm:block"
            >
              <img
                src={heroDetail2}
                alt="Engineer reviewing architectural blueprints"
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              style={{
                x: floatX2,
                y: floatY1,
              }}
              className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-md rounded-lg px-4 py-3 shadow-xl border border-border"
            >
              <div className="text-2xl font-display font-bold text-primary">
                15+
              </div>

              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t("hero.yearsBadge")}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown
            size={20}
            className="text-muted-foreground animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
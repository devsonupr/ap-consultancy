import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Eye, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl font-bold text-primary font-display"
    >
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const stats = [
    {
      label: t("about.stats.years"),
      value: 10,
      suffix: "+",
    },
    {
      label: t("about.stats.projects"),
      value: 500,
      suffix: "+",
    },
    {
      label: t("about.stats.clients"),
      value: 350,
      suffix: "+",
    },
    {
      label: t("about.stats.team"),
      value: 25,
      suffix: "+",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-section-alt"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block"
          >
            {t("about.eyebrow")}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4"
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-sm sm:text-base"
          >
            {t("about.desc")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users size={28} className="text-primary" />
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-1">
              {t("about.foundedTitle")}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.foundedDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                <Target size={18} className="text-accent" />
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {t("about.missionTitle")}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {t("about.missionDesc")}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Eye size={18} className="text-primary" />
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {t("about.visionTitle")}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {t("about.visionDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.5,
              }}
              className="text-center p-4 rounded-xl bg-card border border-border"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />

              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
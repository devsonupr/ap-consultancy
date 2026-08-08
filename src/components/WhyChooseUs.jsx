import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Clock,
  Lightbulb,
  HeartHandshake,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = [
  { key: "quality", icon: ShieldCheck },
  { key: "ontime", icon: Clock },
  { key: "innovative", icon: Lightbulb },
  { key: "client", icon: HeartHandshake },
  { key: "licensed", icon: BadgeCheck },
  { key: "support", icon: Headphones },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            {t("whyUs.eyebrow")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("whyUs.title")}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            {t("whyUs.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureKeys.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <f.icon size={20} className="text-accent" />
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {t(`whyUs.items.${f.key}.title`)}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`whyUs.items.${f.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
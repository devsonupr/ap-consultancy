import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileCheck,
  LayoutGrid,
  Compass,
  Zap,
  Map,
  Home,
  Building2,
  Paintbrush,
  Box,
  HardHat,
  Calculator,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const serviceKeys = [
  { key: "approval", icon: FileCheck },
  { key: "space", icon: LayoutGrid },
  { key: "vastu", icon: Compass },
  { key: "mep", icon: Zap },
  { key: "land", icon: Map },
  { key: "residential", icon: Home },
  { key: "commercial", icon: Building2 },
  { key: "arch", icon: Paintbrush },
  { key: "render", icon: Box },
  { key: "site", icon: HardHat },
  { key: "estimation", icon: Calculator },
  { key: "d2d", icon: Truck },
];

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10 md:mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            {t("services.eyebrow")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("services.title")}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            {t("services.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {serviceKeys.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>

                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {t(`services.items.${service.key}.title`)}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`services.items.${service.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
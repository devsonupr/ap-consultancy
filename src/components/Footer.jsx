import { Phone, MapPin, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const quickLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

const serviceItems = ["residential", "commercial", "render", "site"];

const Footer = () => {
  const { t } = useTranslation();

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border">
      <div className="container section-padding py-10! md:py-14!">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">
                  AP
                </span>
              </div>

              <span className="font-semibold text-foreground text-sm">
                AP Engineering
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">
              {t("footer.quickLinks")}
            </h4>

            <div className="space-y-2">
              {quickLinks.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(`nav.${l.key}`)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">
              {t("footer.services")}
            </h4>

            <div className="space-y-2">
              {serviceItems.map((s) => (
                <span
                  key={s}
                  className="block text-xs text-muted-foreground"
                >
                  {t(`services.items.${s}.title`)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">
              {t("footer.contact")}
            </h4>

            <div className="space-y-2">
              <div className="flex gap-2 items-start">
                <MapPin
                  size={14}
                  className="text-muted-foreground shrink-0 mt-0.5"
                />

                <span className="text-xs text-muted-foreground">
                  Jharsuguda, Odisha 768202
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Phone
                  size={14}
                  className="text-muted-foreground shrink-0"
                />

                <a
                  href="tel:8328917899"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  8328917899
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AP Engineering Consultancy.{" "}
            {t("footer.rights")}
          </p>

          <button
            onClick={scrollTop}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label={t("footer.backTop")}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
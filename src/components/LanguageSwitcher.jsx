import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const langs = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "or", label: "ଓଡ଼ିଆ", short: "ଓଡ଼" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  console.log("I8N: ",i18n);
  console.log(typeof i18n.changeLanguage);


  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = langs.find((l) => l.code === i18n.language) || langs[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const change = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("nav.language")}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-full hover:bg-muted transition-colors text-xs font-medium text-foreground"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{current.short}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => change(l.code)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <span>{l.label}</span>
              {l.code === current.code && (
                <Check size={14} className="text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

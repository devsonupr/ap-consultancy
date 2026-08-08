import { Phone, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const MobileCTA = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
      <a
        href="tel:8328917899"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md text-sm font-medium min-h-11"
      >
        <Phone size={16} />
        {t("mobileCta.call")}
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground py-3 rounded-md text-sm font-medium min-h-11"
      >
        <FileText size={16} />
        {t("mobileCta.quote")}
      </a>
    </div>
  );
};

export default MobileCTA;

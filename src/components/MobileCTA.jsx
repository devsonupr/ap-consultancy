import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MobileCTA = () => {
  const { t } = useTranslation();

  const whatsappNumber = "918328917899";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to get more information."
  );

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
  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-md text-sm font-medium min-h-11"
>
  <FaWhatsapp size={19} />
  {t("mobileCta.whatsapp")}
</a>
    </div>
  );
};

export default MobileCTA;
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Send, Navigation } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(t("contact.success"));
    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        {/* EYEBROW */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
          {t("contact.eyebrow")}
        </p>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
          {t("contact.title")}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base text-muted-foreground">
          {t("contact.desc")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="bg-card rounded-xl border border-border p-6 space-y-4 text-left"
        >
          {/* NAME */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block text-left">
              {t("contact.name")}
            </label>

            <input
              type="text"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[44px]"
              placeholder={t("contact.namePh")}
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block text-left">
              {t("contact.phone")}
            </label>

            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[44px]"
              placeholder={t("contact.phonePh")}
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block text-left">
              {t("contact.message")}
            </label>

            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              placeholder={t("contact.messagePh")}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Send size={16} />

            {t("contact.send")}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="space-y-4"
        >
          {/* ADDRESS + PHONE */}
          <div className="bg-card rounded-xl border border-border p-5 space-y-4">
            {/* ADDRESS */}
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />

              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {t("contact.address")}
                </p>

                <p className="text-xs text-muted-foreground">
                  {t("contact.addressLine")}
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-3 items-start">
              <Phone size={18} className="text-primary shrink-0 mt-0.5" />

              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {t("contact.phone")}
                </p>

                <a
                  href="tel:8328917899"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors block"
                >
                  8328917899
                </a>

                <a
                  href="tel:9658741853"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors block"
                >
                  9658741853
                </a>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden border border-border aspect-4/3">
            <iframe
              title="AP Engineering Consultancy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29464.06!2d84.00!3d21.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20d5ccff0ae8d3%3A0x7fc0aa3a7e0d8b0a!2sJharsuguda%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* DIRECTIONS */}
          <a
            href="https://www.google.com/maps/dir//Jharsuguda,+Odisha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors min-h-11"
          >
            <Navigation size={16} />

            {t("contact.directions")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;






// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Quote,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const Testimonials = () => {
//   const { t } = useTranslation();

//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-80px",
//   });

//   const [current, setCurrent] = useState(0);

//   const rawItems = t("testimonials.items", {
//     returnObjects: true,
//   });

//   const items = Array.isArray(rawItems) ? rawItems : [];

//   const prev = () =>
//     setCurrent((c) =>
//       c === 0 ? items.length - 1 : c - 1
//     );

//   const next = () =>
//     setCurrent((c) =>
//       c === items.length - 1 ? 0 : c + 1
//     );

//   return (
//     <section
//       className="section-padding bg-section-alt"
//       ref={ref}
//     >
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto text-center mb-10"
//         >
//           <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
//             {t("testimonials.eyebrow")}
//           </span>

//           <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
//             {t("testimonials.title")}
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.2 }}
//           className="max-w-xl mx-auto"
//         >
//           <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 relative">
//             <Quote
//               size={32}
//               className="text-primary/10 absolute top-4 left-4"
//             />

//             <div className="flex gap-0.5 mb-4 justify-center">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star
//                   key={i}
//                   size={16}
//                   className="fill-accent text-accent"
//                 />
//               ))}
//             </div>

//             <p className="text-sm sm:text-base text-foreground text-center leading-relaxed mb-6 italic">
//               "{items?.[current]?.text}"
//             </p>

//             <div className="text-center">
//               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
//                 <span className="text-sm font-bold text-primary">
//                   {items?.[current]?.name?.[0]}
//                 </span>
//               </div>

//               <p className="font-semibold text-foreground text-sm">
//                 {items?.[current]?.name}
//               </p>

//               <p className="text-xs text-muted-foreground">
//                 {items?.[current]?.role}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center justify-center gap-4 mt-6">
//             <button
//               onClick={prev}
//               className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
//               aria-label="Previous"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <div className="flex gap-2">
//               {items.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`w-2 h-2 rounded-full transition-all ${
//                     i === current
//                       ? "bg-primary w-6"
//                       : "bg-border"
//                   }`}
//                   aria-label={`Go to ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={next}
//               className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
//               aria-label="Next"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [current, setCurrent] = useState(0);

  const rawItems = t("testimonials.items", {
    returnObjects: true,
  });

  const items = Array.isArray(rawItems) ? rawItems : [];

  const prev = () => {
    setCurrent((c) =>
      c === 0 ? items.length - 1 : c - 1
    );
  };

  const next = () => {
    setCurrent((c) =>
      c === items.length - 1 ? 0 : c + 1
    );
  };

  return (
    <section
      className="section-padding bg-section-alt"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            {t("testimonials.eyebrow")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 relative">
            <Quote
              size={32}
              className="text-primary/10 absolute top-4 left-4"
            />

            <div className="flex gap-0.5 mb-4 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-accent text-accent"
                />
              ))}
            </div>

            <p className="text-sm sm:text-base text-foreground text-center leading-relaxed mb-6 italic">
              "{items?.[current]?.text}"
            </p>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 border border-border">
                <img
                  src={items?.[current]?.image}
                  alt={items?.[current]?.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="font-semibold text-foreground text-sm">
                {items?.[current]?.name}
              </p>

              <p className="text-xs text-muted-foreground">
                {items?.[current]?.role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-primary w-6"
                      : "bg-border"
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
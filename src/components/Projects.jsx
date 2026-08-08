// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { ExternalLink } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const projectKeys = [
//   { key: "villa", cat: "residential" },
//   { key: "tower", cat: "commercial" },
//   { key: "apartment", cat: "residential" },
//   { key: "mall", cat: "commercial" },
//   { key: "duplex", cat: "residential" },
//   { key: "office", cat: "commercial" },
// ];

// const filterKeys = ["all", "residential", "commercial"];

// const colors = [
//   "from-primary/80 to-secondary/80",
//   "from-secondary/80 to-primary/80",
//   "from-accent/60 to-primary/80",
//   "from-primary/70 to-accent/60",
//   "from-secondary/70 to-accent/60",
//   "from-accent/50 to-secondary/80",
// ];

// const Projects = () => {
//   const { t } = useTranslation();

//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-80px",
//   });

//   const [filter, setFilter] = useState("all");

//   const filtered =
//     filter === "all"
//       ? projectKeys
//       : projectKeys.filter((p) => p.cat === filter);

//   return (
//     <section
//       id="projects"
//       className="section-padding bg-section-alt"
//       ref={ref}
//     >
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto text-center mb-8"
//         >
//           <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
//             {t("projects.eyebrow")}
//           </span>

//           <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
//             {t("projects.title")}
//           </h2>

//           <p className="text-sm sm:text-base text-muted-foreground">
//             {t("projects.desc")}
//           </p>
//         </motion.div>

//         <div className="flex justify-center gap-2 mb-8">
//           {filterKeys.map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[44px] ${
//                 filter === f
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-muted-foreground hover:bg-muted/80"
//               }`}
//             >
//               {t(`projects.filters.${f}`)}
//             </button>
//           ))}
//         </div>

//         <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
//           {filtered.map((p, i) => (
//             <motion.div
//               key={p.key}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.08, duration: 0.5 }}
//               className="group relative min-w-[280px] md:min-w-0 snap-center aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shrink-0 md:shrink"
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${
//                   colors[i % colors.length]
//                 }`}
//               />

//               <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
//                   {t(`projects.filters.${p.cat}`)}
//                 </span>

//                 <h3 className="text-lg font-semibold text-primary-foreground">
//                   {t(`projects.items.${p.key}.title`)}
//                 </h3>

//                 <p className="text-xs text-primary-foreground/80 mt-1">
//                   {t(`projects.items.${p.key}.desc`)}
//                 </p>
//               </div>

//               <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent md:group-hover:opacity-0 transition-opacity">
//                 <span className="text-[10px] uppercase tracking-wider text-accent font-medium block md:hidden">
//                   {t(`projects.filters.${p.cat}`)}
//                 </span>

//                 <h3 className="text-sm font-semibold text-primary-foreground md:hidden">
//                   {t(`projects.items.${p.key}.title`)}
//                 </h3>
//               </div>

//               <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ExternalLink
//                   size={14}
//                   className="text-primary-foreground"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectKeys = [
  {
    key: "villa",
    cat: "residential",
    image:
      "https://i.pinimg.com/1200x/19/87/e3/1987e30057b0b71d32304a66f9383455.jpg",
  },
  {
    key: "tower",
    cat: "commercial",
    image:
      "https://i.pinimg.com/736x/05/6c/a7/056ca7f201ae21d35281d8d383a8b81c.jpg",
  },
  {
    key: "apartment",
    cat: "residential",
    image:
      "https://i.pinimg.com/1200x/6b/8c/cd/6b8ccdecfa47678b778c3a1397938cb6.jpg",
  },
  {
    key: "mall",
    cat: "commercial",
    image:
      "https://i.pinimg.com/1200x/29/2f/c2/292fc2917ab3a49e950a10ac0f1e5891.jpg",
  },
  {
    key: "duplex",
    cat: "residential",
    image:
      "https://i.pinimg.com/736x/e3/70/29/e37029bbef391ce685559127334e6573.jpg",
  },
  {
    key: "office",
    cat: "commercial",
    image:
      "https://i.pinimg.com/736x/b8/18/2a/b8182a14f13023be0f083040f02b64c9.jpg",
  },
];

const filterKeys = ["all", "residential", "commercial"];

const Projects = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projectKeys
      : projectKeys.filter((p) => p.cat === filter);

  return (
    <section
      id="projects"
      className="section-padding bg-section-alt"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-8"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            {t("projects.eyebrow")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("projects.title")}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            {t("projects.desc")}
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {filterKeys.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[44px] ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t(`projects.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
          {filtered.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative min-w-[280px] md:min-w-0 snap-center aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shrink-0 md:shrink"
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={t(`projects.items.${p.key}.title`)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                  {t(`projects.filters.${p.cat}`)}
                </span>

                <h3 className="text-lg font-semibold text-white">
                  {t(`projects.items.${p.key}.title`)}
                </h3>

                <p className="text-xs text-white/80 mt-1">
                  {t(`projects.items.${p.key}.desc`)}
                </p>
              </div>

              {/* Mobile Title */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent md:group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] uppercase tracking-wider text-accent font-medium block md:hidden">
                  {t(`projects.filters.${p.cat}`)}
                </span>

                <h3 className="text-sm font-semibold text-white md:hidden">
                  {t(`projects.items.${p.key}.title`)}
                </h3>
              </div>

              {/* External Link Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink
                  size={14}
                  className="text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
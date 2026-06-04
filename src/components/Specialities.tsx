import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Bone, ChevronRight, ChevronLeft, Crosshair, Stethoscope, Zap, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface Speciality {
  icon: React.ReactElement;
  title: string;
  desc: string;
  details: string;
  highlights: string[];
}

const specialities: Speciality[] = [
  {
    icon: <Activity />,
    title: "Trauma Care",
    desc: "Advanced emergency orthopedic response.",
    details:
      "Our trauma care unit provides specialized emergency orthopedic services for fractures, dislocations, and accident-related injuries using modern surgical and rehabilitation techniques for faster recovery.",
    highlights: [
      "24/7 Emergency Care",
      "Fracture Stabilization",
      "Accident Injury Management",
      "Rapid Recovery Programs",
    ],
  },
  {
    icon: <Crosshair />,
    title: "Arthroscopy",
    desc: "Minimally invasive joint surgery.",
    details:
      "Advanced arthroscopic procedures performed through tiny incisions using high-definition cameras and specialized instruments for precise diagnosis and treatment of joint conditions.",
    highlights: [
      "Keyhole Surgery",
      "Knee Arthroscopy",
      "Shoulder Arthroscopy",
      "Ligament Repair",
    ],
  },
  {
    icon: <Bone />,
    title: "Joint Replacement",
    desc: "Modern joint restoration solutions.",
    details:
      "Comprehensive joint replacement procedures using advanced implant technology and precision surgical techniques to restore mobility and improve quality of life.",
    highlights: [
      "Knee Replacement",
      "Hip Replacement",
      "Advanced Implants",
      "Faster Rehabilitation",
    ],
  },
  {
    icon: <Zap />,
    title: "Spine Treatment",
    desc: "Comprehensive spinal care solutions.",
    details:
      "Specialized diagnosis and treatment for spinal disorders including disc problems, back pain, and spinal degeneration using both conservative and surgical approaches.",
    highlights: [
      "Disc Herniation Care",
      "Back Pain Treatment",
      "Minimally Invasive Spine Care",
      "Spinal Rehabilitation",
    ],
  },
  {
    icon: <Stethoscope />,
    title: "Pain Management",
    desc: "Targeted chronic pain relief.",
    details:
      "Advanced pain management procedures designed to treat chronic orthopedic and nerve-related pain using image-guided injections, regenerative therapies, and minimally invasive interventions.",
    highlights: [
      "Nerve Block Procedures",
      "PRP Therapy",
      "Radiofrequency Ablation",
      "Image-Guided Injections",
    ],
  },
];

const SpecialityCardUI = ({ spec }: { spec: Speciality }) => (
  <>
    <div className="absolute -right-6 -top-6 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors duration-500"></div>
    <div className="w-12 h-12 border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(spec.icon, { className: 'w-5 h-5 stroke-[1.5]' } as React.SVGProps<SVGSVGElement>)}
    </div>
    <h4 className="text-lg font-cinzel mb-2 text-white group-hover:text-gold-300 transition-colors">{spec.title}</h4>
    <p className="text-slate-400 text-xs font-light leading-relaxed">{spec.desc}</p>

    <div className="mt-4 flex items-center text-gold-500 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
      Learn more <ChevronRight className="w-3 h-3 ml-1" />
    </div>
  </>
);

const Specialities = () => {
  const [selectedSpec, setSelectedSpec] = useState<Speciality | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedSpec) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedSpec]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setCurrentIndex(0);
  }, [isMobile]);

  // Handle manual navigation
  const navigate = (newDirection: number) => {
    if (isAnimating) return;
    setDirection(newDirection);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= specialities.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = specialities.length - 1;
      return nextIndex;
    });
  };

  // Automatic advancement timer
  useEffect(() => {
    if (!isMobile || selectedSpec || isHovered || isAnimating) return;

    const timer = setInterval(() => {
      setDirection(1); // Auto-slide always goes right
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialities.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile, selectedSpec, isHovered, isAnimating]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="specialities" className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-montserrat">Areas of Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-playfair mb-6">Our Premium <span className="text-gradient">Specialities</span></h3>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-[500px] lg:h-[600px] w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-gold-500/20 via-transparent to-gold-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border border-gold-500/20 bg-navy-900/50 backdrop-blur-sm">
              <img
                src="/ortho-specialities.png"
                alt="Orthopedic Specialities - Spine and Joint Care"
                width="800"
                height="600"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-montserrat">Advanced Orthopedic Care</p>
                <p className="text-white/70 text-sm font-light mt-1">Precision diagnostics & treatment for bones, joints & spine</p>
              </div>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div 
            className={isMobile ? "relative min-h-[350px] flex items-center justify-center w-full mx-auto" : "grid sm:grid-cols-2 gap-6 relative"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {isMobile ? (
              <div className="w-full h-full flex items-center justify-center relative">
                
                <button 
                  onClick={() => navigate(-1)}
                  aria-label="Previous speciality"
                  className="absolute left-0 z-20 w-10 h-10 -ml-2 rounded-full bg-navy-900/80 border border-gold-500/20 text-gold-400 flex items-center justify-center backdrop-blur-sm hover:bg-gold-500/10 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="w-full max-w-[280px] sm:max-w-sm relative flex justify-center items-center h-[250px] overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="wait" onExitComplete={() => setIsAnimating(false)}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      onClick={() => setSelectedSpec(specialities[currentIndex])}
                      className="glass-card glass-card-hover p-6 rounded-xl group relative overflow-hidden cursor-pointer w-full h-fit absolute"
                    >
                      <SpecialityCardUI spec={specialities[currentIndex]} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button 
                  onClick={() => navigate(1)}
                  aria-label="Next speciality"
                  className="absolute right-0 z-20 w-10 h-10 -mr-2 rounded-full bg-navy-900/80 border border-gold-500/20 text-gold-400 flex items-center justify-center backdrop-blur-sm hover:bg-gold-500/10 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute -bottom-8 flex justify-center gap-2 w-full">
                  {specialities.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-gold-400' : 'w-1.5 bg-slate-600'}`}
                    />
                  ))}
                </div>

              </div>
            ) : (
              specialities.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setSelectedSpec(spec)}
                  className={`glass-card glass-card-hover p-6 rounded-xl group relative overflow-hidden cursor-pointer ${index === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <SpecialityCardUI spec={spec} />
                </motion.div>
              ))
            )}
          </div>

        </div>
      </div>

      {/* Modal Popup (Remains unchanged) */}
      <AnimatePresence>
        {selectedSpec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedSpec(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-card rounded-2xl p-8 md:p-10 max-w-lg w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-yellow-200 to-gold-400"></div>
              
              <button
                onClick={() => setSelectedSpec(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400 mb-6">
                {React.cloneElement(selectedSpec.icon, { className: 'w-7 h-7 stroke-[1.5]' } as React.SVGProps<SVGSVGElement>)}
              </div>

              <h3 className="text-2xl font-cinzel text-white mb-4">{selectedSpec.title}</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">{selectedSpec.details}</p>

              <div className="flex flex-col gap-3">
                <h4 className="text-gold-500 text-xs uppercase tracking-widest font-montserrat">Key Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSpec.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0"></span>
                      <span className="font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSpec(null);
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 w-full py-3 rounded-sm bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(201,167,100,0.3)] transition-all duration-300"
              >
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Specialities;
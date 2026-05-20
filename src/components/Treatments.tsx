import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ItemDetail {
  title: string;
  desc?: string;
  details: string;
  highlights: string[];
}

const conditions: ItemDetail[] = [
  
  {
    title: "Fractures",
    details:
      "Expert treatment for all types of fractures including simple, compound, stress, and pathological fractures using advanced fixation techniques and personalized rehabilitation protocols.",
    highlights: [
      "Internal & External Fixation",
      "Minimally Invasive Plating",
      "Cast & Splint Management",
      "Post-Fracture Rehab",
    ],
  },
  {
    title: "Back Pain / Spondylosis",
    details:
      "Comprehensive care for chronic and acute back pain, lumbar spondylosis, and spinal degeneration using modern diagnostic methods, physiotherapy, and minimally invasive pain management techniques.",
    highlights: [
      "Spine Pain Evaluation",
      "Postural Correction",
      "Physiotherapy Support",
      "Pain Relief Procedures",
    ],
  },
  {
    title: "Disc Herniation / Sciatica",
    details:
      "Specialized treatment for slipped discs, nerve compression, and sciatica with conservative therapies and advanced spinal interventions for long-term relief and mobility restoration.",
    highlights: [
      "MRI-Based Diagnosis",
      "Nerve Decompression",
      "Sciatica Pain Relief",
      "Minimally Invasive Spine Care",
    ],
  },
  {
    title: "Sports Injuries",
    details:
      "Dedicated sports injury management for ligament tears, muscle strains, tendon injuries, and joint instability with rehabilitation programs focused on safe recovery and performance restoration.",
    highlights: [
      "Ligament Repair",
      "Sports Rehabilitation",
      "Muscle Recovery Programs",
      "Return-to-Play Guidance",
    ],
  },
  {
    title: "Neck and Shoulder Pain",
    details:
      "Advanced diagnosis and treatment for cervical pain, frozen shoulder, muscle stiffness, and nerve-related shoulder disorders using targeted therapies and rehabilitation techniques.",
    highlights: [
      "Cervical Spine Care",
      "Shoulder Mobilization",
      "Nerve Pain Management",
      "Muscle Strengthening",
    ],
  },
  {
    title: "Knee Pain / Arthritis",
    details:
      "Comprehensive knee care for arthritis, ligament injuries, cartilage damage, and age-related degeneration using both non-surgical and surgical treatment options.",
    highlights: [
      "Arthroscopy",
      "Joint Injection Therapy",
      "Cartilage Protection",
      "Knee Rehabilitation",
    ],
  },
  {
    title: "Muscle and Tendon Injuries",
    details:
      "Expert treatment for muscle tears, tendon inflammation, repetitive strain injuries, and overuse conditions with advanced rehabilitation and regenerative therapies.",
    highlights: [
      "Tendon Repair",
      "Soft Tissue Rehabilitation",
      "PRP Therapy",
      "Strength Recovery Programs",
    ],
  },
  {
    title: "Joint Pain / Arthritis",
    details:
      "Specialized arthritis and joint pain management for hips, knees, shoulders, and small joints using medication, physiotherapy, injections, and surgical solutions when required.",
    highlights: [
      "Joint Preservation",
      "Arthritis Management",
      "Pain Reduction Therapy",
      "Mobility Improvement",
    ],
  },
  {
    title: "Headaches / Migraine",
    details:
      "Comprehensive evaluation and treatment for chronic headaches, migraine disorders, and cervicogenic pain with personalized treatment plans and preventive care strategies.",
    highlights: [
      "Migraine Management",
      "Trigger Identification",
      "Pain Control Therapy",
      "Lifestyle Guidance",
    ],
  },
  {
    title: "Neuropathic Pain",
    details:
      "Advanced management of nerve-related pain conditions including diabetic neuropathy, nerve compression, and chronic neuralgia using modern pain relief techniques and medication support.",
    highlights: [
      "Nerve Pain Assessment",
      "Medication Therapy",
      "Interventional Pain Procedures",
      "Long-Term Pain Management",
    ],
  },
];


const treatments: ItemDetail[] = [
  {
    title: "Surgical Procedures",
    desc: "Advanced orthopedic surgery",
    details:
      "Comprehensive orthopedic surgical solutions including fracture fixation, joint replacement, spine procedures, and minimally invasive keyhole surgeries for faster recovery and improved mobility.",
    highlights: [
      "Plating & Nailing",
      "Joint Replacement",
      "Spine Surgery",
      "Keyhole Procedures",
    ],
  },
  {
    title: "Without Surgery Treatments",
    desc: "Conservative pain management",
    details:
      "Non-surgical orthopedic treatments focused on reducing pain, improving mobility, and preventing surgery through advanced rehabilitation and interventional care techniques.",
    highlights: [
      "Medication Therapy",
      "Rehabilitation Programs",
      "Lifestyle Modification",
      "Pain Management Plans",
    ],
  },
  {
    title: "POP, Cast & Splinting Procedures",
    desc: "Fracture immobilization",
    details:
      "Expert fracture and injury immobilization services using high-quality plaster casts, splints, and supportive braces for proper healing and stabilization.",
    highlights: [
      "Fracture Casting",
      "Custom Splinting",
      "Immobilization Support",
      "Post-Injury Care",
    ],
  },
  {
    title: "Images Guided Pain Procedures",
    desc: "Precision pain relief",
    details:
      "Ultrasound and fluoroscopy-guided pain management procedures ensuring accurate targeting of affected nerves, joints, and soft tissues for effective long-lasting relief.",
    highlights: [
      "Ultrasound Guidance",
      "Fluoroscopy Procedures",
      "Precision Injections",
      "Targeted Pain Therapy",
    ],
  },
  {
    title: "Nerve Root and Facet Injections",
    desc: "Spine pain management",
    details:
      "Specialized spinal injection therapies for nerve compression, facet joint pain, and chronic back conditions using image-guided techniques for precise treatment delivery.",
    highlights: [
      "Facet Joint Blocks",
      "Nerve Root Injections",
      "Epidural Steroid Therapy",
      "Chronic Spine Pain Relief",
    ],
  },
  {
    title: "Platelet Rich Plasma (PRP) & BMAC Injections",
    desc: "Regenerative medicine",
    details:
      "Advanced regenerative therapies using PRP and Bone Marrow Aspirate Concentrate (BMAC) to stimulate natural healing in joints, tendons, ligaments, and muscles.",
    highlights: [
      "PRP Therapy",
      "BMAC Regeneration",
      "Tissue Healing",
      "Sports Injury Recovery",
    ],
  },
  {
    title: "Viscosupplements",
    desc: "Joint lubrication therapy",
    details:
      "Hyaluronic acid viscosupplement injections designed to improve joint lubrication, reduce arthritis pain, and enhance movement in weight-bearing joints like the knee.",
    highlights: [
      "Knee Arthritis Relief",
      "Joint Lubrication",
      "Mobility Improvement",
      "Non-Surgical Joint Care",
    ],
  },
  {
    title: "Radio Frequency Ablations",
    desc: "Long-lasting nerve pain relief",
    details:
      "Minimally invasive radiofrequency ablation procedures that target and deactivate pain-transmitting nerves, providing extended relief for chronic spine and joint pain conditions.",
    highlights: [
      "Facet Joint RFA",
      "Chronic Pain Control",
      "Nerve Signal Blocking",
      "Minimally Invasive Treatment",
    ],
  },
  {
    title: "Physio Therapy",
    desc: "Rehabilitation and recovery",
    details:
      "Personalized physiotherapy programs for orthopedic rehabilitation, injury recovery, pain reduction, and mobility improvement using evidence-based therapeutic techniques.",
    highlights: [
      "Post-Surgical Rehab",
      "Strengthening Exercises",
      "Manual Therapy",
      "Mobility Training",
    ],
  },
];

const Treatments = () => {
  const [selectedItem, setSelectedItem] = useState<ItemDetail | null>(null);
  const [activeTreatmentIndex, setActiveTreatmentIndex] = useState(0);
  
  // States for smooth sliding
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle manual navigation
  const navigate = (newDirection: number) => {
    if (isAnimating) return;
    setDirection(newDirection);
    setIsAnimating(true);
    setActiveTreatmentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= treatments.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = treatments.length - 1;
      return nextIndex;
    });
  };

  // Auto-slide effect
  useEffect(() => {
    if (selectedItem || isHovered || isAnimating) return;

    const timer = setInterval(() => {
      setDirection(1); // Default right slide for auto
      setIsAnimating(true);
      setActiveTreatmentIndex((prev) => (prev + 1) % treatments.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [selectedItem, isHovered, isAnimating]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  // Spring animations for a smooth, simultaneous cross-fade slide
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      transition: {
        x: { type: "spring" as const, stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="treatments" className="py-24 relative bg-navy-900 border-y border-white/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Conditions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-gold-500 uppercase tracking-widest font-montserrat mb-2">Diagnosis</h2>
            <h3 className="text-3xl md:text-4xl font-playfair mb-10">Conditions Treated</h3>
            
            <div className="flex flex-col gap-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-gold-500/50 before:via-gold-500/20 before:to-transparent">
              {conditions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-6 relative group cursor-pointer"
                >
                  <div className="w-[23px] h-[23px] rounded-full bg-navy-950 border border-gold-500/50 flex items-center justify-center z-10 group-hover:border-gold-400 group-hover:shadow-[0_0_10px_rgba(201,167,100,0.5)] transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
                  </div>
                  <span className="text-lg text-slate-300 font-light group-hover:text-white group-hover:translate-x-2 transition-all duration-300">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Treatments */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <h2 className="text-sm text-gold-500 uppercase tracking-widest font-montserrat mb-2">Solutions</h2>
            <h3 className="text-3xl md:text-4xl font-playfair mb-10">Treatments Offered</h3>
            
            {/* Desktop View */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-4">
              {treatments.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedItem(t)}
                  className="glass border border-gold-500/10 p-5 rounded-lg hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 group cursor-pointer"
                >
                  <h4 className="text-white font-cinzel mb-1 group-hover:text-gold-400 transition-colors">{t.title}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile View (Slider) */}
            <div 
              className="sm:hidden w-full flex items-center justify-center relative min-h-[140px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
            >
              
              {/* Left Arrow */}
              <button 
                onClick={() => navigate(-1)}
                className="absolute left-0 z-20 w-10 h-10 -ml-2 rounded-full bg-navy-900/80 border border-gold-500/20 text-gold-400 flex items-center justify-center backdrop-blur-sm hover:bg-gold-500/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Slider Container */}
              <div className="w-full max-w-[280px] relative flex justify-center items-center h-[120px] overflow-visible">
                <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                  <motion.div
                    key={activeTreatmentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    onClick={() => setSelectedItem(treatments[activeTreatmentIndex])}
                    className="glass border border-gold-500/10 p-5 rounded-lg hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 group cursor-pointer w-full absolute top-1/2 -translate-y-1/2"
                  >
                    <h4 className="text-white font-cinzel mb-1 group-hover:text-gold-400 transition-colors">{treatments[activeTreatmentIndex].title}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{treatments[activeTreatmentIndex].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => navigate(1)}
                className="absolute right-0 z-20 w-10 h-10 -mr-2 rounded-full bg-navy-900/80 border border-gold-500/20 text-gold-400 flex items-center justify-center backdrop-blur-sm hover:bg-gold-500/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute -bottom-8 flex justify-center gap-2 w-full">
                {treatments.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (i === activeTreatmentIndex || isAnimating) return;
                      setDirection(i > activeTreatmentIndex ? 1 : -1);
                      setIsAnimating(true);
                      setActiveTreatmentIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTreatmentIndex ? 'bg-gold-500 w-4' : 'bg-white/20 w-1.5'}`}
                    aria-label={`Go to treatment ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
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
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-2xl font-cinzel text-white mb-2">{selectedItem.title}</h3>
              {selectedItem.desc && <p className="text-gold-500 text-xs uppercase tracking-widest font-montserrat mb-4">{selectedItem.desc}</p>}

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">{selectedItem.details}</p>

              <div className="flex flex-col gap-3">
                <h4 className="text-gold-500 text-xs uppercase tracking-widest font-montserrat">Key Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0"></span>
                      <span className="font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedItem(null);
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

export default Treatments;
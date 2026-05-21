
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Syringe } from 'lucide-react';

const Hero = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      {/* Floating particles/shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemFadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-montserrat">Premium Medical Excellence</span>
          </motion.div>
          
          <motion.h1 variants={itemFadeIn} className="text-5xl lg:text-7xl leading-tight font-playfair font-medium">
            Restoring <span className="text-gradient font-style-italic font-light">Mobility</span>,<br /> 
            Relieving <span className="text-gradient font-style-italic font-light">Pain</span>
          </motion.h1>
          
          <motion.p variants={itemFadeIn} className="text-lg text-slate-400 max-w-xl font-light leading-relaxed">
            Experience the pinnacle of orthopedic care and interventional pain management in a luxurious, state-of-the-art environment designed for your ultimate recovery.
          </motion.p>
          
          <motion.div variants={itemFadeIn} className="flex flex-wrap gap-4 pt-4">
            <a href="#contact">
            <button className="px-8 py-4 rounded-sm bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_25px_rgba(201,167,100,0.5)] transition-all duration-300 flex items-center gap-2">
              Consult Now <ArrowRight className="w-4 h-4" />
            </button>
            </a>
            <a href="#specialities">
            <button className="px-8 py-4 rounded-sm border border-gold-500/50 text-gold-400 uppercase tracking-wider text-sm hover:bg-gold-500/10 transition-all duration-300">
              Explore Treatments
            </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 rounded-full border-2 border-gold-500/50 p-1 flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-[spin_10s_linear_infinite]"></div>
                <img src="https://ui-avatars.com/api/?name=Vishal+Manoharan&background=0a192f&color=c9a764&size=128" alt="Dr. Vishal Manoharan" className="w-full h-full rounded-full object-cover" />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="inline-block px-2 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] uppercase tracking-widest font-montserrat w-fit">Head Surgeon</div>
                <h3 className="text-2xl font-cinzel text-white">Dr. Vishal Manoharan</h3>
                <p className="text-sm text-gold-400 font-montserrat font-medium">MBBS., MS Ortho., FIPM</p>
                
                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300 font-light">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-gold-500" />
                    <span>Consultant Orthopaedic Surgeon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Syringe className="w-4 h-4 text-gold-500" />
                    <span>Interventional Pain Management Surgeon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

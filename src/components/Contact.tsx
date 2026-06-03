import { motion } from 'framer-motion';
import { Bone, Clock, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  // 1. Setup state to capture form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    department: 'Orthopedics',
    message: ''
  });

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Format and send to WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message with line breaks and bold text for WhatsApp
    const messageText = `*New Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Department:* ${formData.department}%0A*Message:* ${formData.message}`;
    
    // Target WhatsApp Number (without + or spaces)
    const whatsappNumber = "919710998466";
    
    // Create the wa.me link and open in a new tab
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-950 overflow-hidden">
      {/* Large faint logo background */}
      <div className="absolute right-[-10%] bottom-[-20%] opacity-[0.03] pointer-events-none hidden md:block">
        <Bone className="w-[800px] h-[800px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-sm text-gold-500 uppercase tracking-widest font-montserrat mb-2">Connect With Us</h2>
              <h3 className="text-4xl font-playfair mb-6">Visit Our <span className="text-gradient">Clinic</span></h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Ready to take the first step towards a pain-free life? Contact us today to schedule your consultation with Dr. Vishal Manoharan.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-1 font-montserrat">Emergency & Appointments</h4>
                  <p className="text-xl text-white font-medium font-cinzel">+91 97109 98466 <br/>+91 97897 89643</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-1 font-montserrat">Location</h4>
                  <p className="text-white font-light">No.2, Jothi illam, <br/>Eswaran Koil Street, <br/>Urapakkam, <br/>Chennai-603210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-1 font-montserrat">Working Hours</h4>
                  <p className="text-white font-light">Mon - Sat: 05:00 PM - 09:00 PM<br/>Sunday : 09:00AM - 01:00PM<br/><span className="text-gold-500 text-sm">Available For Emergency 24/7</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div id="appointment" className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-yellow-200 to-gold-400"></div>
              <h4 className="text-2xl font-cinzel text-white mb-8">Book a Consultation</h4>
              
              <form className="flex flex-col gap-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-300 font-montserrat">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-navy-950/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-slate-300 font-montserrat">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-navy-950/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors" 
                      placeholder="+91 00000 00000" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-xs uppercase tracking-widest text-slate-300 font-montserrat">Date</label>
                    {/* FIXED: Added style={{ colorScheme: 'dark' }} to force native icons to render light on dark background */}
                    <input 
                      type="date" 
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      style={{ colorScheme: 'dark' }}
                      className="bg-navy-950/50 border border-white/10 rounded-md px-4 py-3 text-slate-300 focus:outline-none focus:border-gold-500/50 transition-colors" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="department" className="text-xs uppercase tracking-widest text-slate-300 font-montserrat">Department</label>
                    {/* FIXED: Ensure options text inherits dark mode rendering or set explicit background on options if needed, 
                        though native dropdowns usually respect the parent background. appearance-none removed to show native arrow, 
                        or keep it and add a custom SVG arrow via CSS if you prefer full control. */}
                    <select 
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      style={{ colorScheme: 'dark' }}
                      className="bg-navy-950/50 border border-white/10 rounded-md px-4 py-3 text-slate-300 focus:outline-none focus:border-gold-500/50 transition-colors"
                    >
                      <option value="Fractures">Fractures</option>
<option value="Back Pain / Spondylosis">Back Pain / Spondylosis</option>
<option value="Disc Herniation / Sciatica">Disc Herniation / Sciatica</option>
<option value="Sports Injuries">Sports Injuries</option>
<option value="Neck and Shoulder Pain">Neck and Shoulder Pain</option>
<option value="Knee Pain / Arthritis">Knee Pain / Arthritis</option>
<option value="Muscle and Tendon Injuries">Muscle and Tendon Injuries</option>
<option value="Joint Pain / Arthritis">Joint Pain / Arthritis</option>
<option value="Headaches / Migraine">Headaches / Migraine</option>
<option value="Neuropathic Pain">Neuropathic Pain</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-300 font-montserrat">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-navy-950/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors min-h-[100px] resize-y" 
                    placeholder="Tell us briefly about your condition..." 
                  />
                </div>

                <button type="submit" className="mt-4 w-full py-4 rounded-sm bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(201,167,100,0.3)] transition-all duration-300">
                  Confirm Appointment
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
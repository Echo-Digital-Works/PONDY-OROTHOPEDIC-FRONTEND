import { Mail, Phone, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 pt-20 pb-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">

          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-6">


            <div>
              <h3 className="text-gold-500 font-montserrat mb-3">About Us</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                We want to help bring talented students and unique startups together.
              </p>
            </div>

            <div>
              <h3 className="text-gold-500 font-montserrat mb-3">Contact Us</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+919999999999" className="flex items-center gap-3 text-slate-300 text-sm font-light hover:text-gold-400 transition-colors">
                  <Phone className="w-4 h-4 text-gold-500" />
                  +91 97109 98466
                </a>
                <a href="mailto:youremailid.com" className="flex items-center gap-3 text-slate-300 text-sm font-light hover:text-gold-400 transition-colors">
                  <Mail className="w-4 h-4 text-gold-500" />
                  vishaldhana07@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 className="text-gold-500 font-montserrat mb-6">Our Specialties</h3>
            <ul className="flex flex-col gap-3">
              {['Trauma Care', 'Arthroscopy', 'Joint Replacement', 'Spine Treatment', 'Pain Management'].map((link) => (
                <li key={link}>
                  <a href="#specialities" className="text-slate-300 text-sm font-light hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Helpful Links */}
          <div>
            <h3 className="text-gold-500 font-montserrat mb-6">Helpful Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Specialities', href: '#specialities' },
                { label: 'Treatments', href: '#treatments' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 text-sm font-light hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-white font-montserrat mb-6">Subscribe More Info</h3>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-navy-900" />
              </div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-white text-navy-950 py-2.5 pl-10 pr-4 rounded-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <button className="bg-gold-500 hover:bg-gold-400 transition-colors text-white py-2 px-6 rounded-sm text-sm font-semibold">
              Subscribe
            </button>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute -bottom-8 right-0 bg-gold-500 hover:bg-gold-400 text-white w-8 h-8 rounded flex items-center justify-center transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Bottom Bar Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Empty div to keep the social icons perfectly centered in the grid */}
          {/* Developed By */}
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-slate-500 text-xs font-light">
              Developed by{" : "}
              <span className="text-gold-500 font-medium">
                Planet Branding
              </span>
            </p>
          </div>

          {/* Social Icons (Centered) */}
          <div className="flex justify-center gap-3">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white hover:bg-gold-400 transition-all hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Google+ */}
            <a href="#" className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white hover:bg-gold-400 transition-all hover:-translate-y-1">
              <span className="font-bold text-[13px]">G+</span>
            </a>
            {/* Twitter */}
            <a href="#" className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white hover:bg-gold-400 transition-all hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white hover:bg-gold-400 transition-all hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Copyright (Right aligned) */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs font-light">
              {new Date().getFullYear()} <span className="text-gold-500 font-medium">© DR. MAJO'S
                Ortho & Pain Clinic.</span> All Right reserved
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;  
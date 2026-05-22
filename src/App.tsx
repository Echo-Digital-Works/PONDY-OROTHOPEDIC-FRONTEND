
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialities from './components/Specialities';
import Treatments from './components/Treatments';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-navy-950 text-slate-200 min-h-screen overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
      <Navbar />
      <Hero />
      <Specialities />
      <Treatments />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountriesShowcase from '../components/CountriesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Countries from '../components/Countries';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CountriesShowcase />
      <WhyChooseUs />
      <Services />
      <Countries />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

"use client"

import Hero from '@/components/Hero';
import Features1 from '@/components/features1';
import Features2 from '@/components/features2';
import CTA from '@/components/cta';
import Steps from '@/components/Steps';
import Contact from '@/components/contact';
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features1 />
      <CTA />
      <Features2 />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

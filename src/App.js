import React from 'react';
import Index from "./components";
import TestimonialSection from './components/TestimonialSection';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/Features';
import Saving from './Saving';
import Grow from './components/Grow';
import Screenshots from './components/Screenshots';
import Video from './components/Video';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
        <Header />
        <Hero />
      </header>
      <main>
      <Features />
      <Saving />
      <Grow />
      <Screenshots/>
      <Video />
        <TestimonialSection />
        <Pricing />
        <Blog />
        <Download />
        <Contact />
        <Navbar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


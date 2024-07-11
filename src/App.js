import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import './App.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import NavbarCustom from './NavbarCustom';
import { getInitialTheme } from './lib/themeUtils';
import CustomFooter from './CustomFooter';
import BlenderBlackImage from './lib/assets/BlendJet-2-BLACK.avif';
import BlenderWhiteImage from './lib/assets/BlendJet-2-White.avif';


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'lemonade' ? 'halloween' : 'lemonade';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'halloween') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };
  

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <nav>
        <NavbarCustom toggleTheme={toggleTheme} theme={theme} />
      </nav>
      <main className="wrapper mt-16">
        <section className="hero relative full-bleed h-[95vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary overflow-hidden">
            <div className="bg-shape1 bg-primary"></div>
            <div className="bg-shape2 bg-secondary"></div>
            <div className="bg-shape3 bg-primary"></div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center h-full w-full px-4 sm:px-16 sm:justify-around">
            <div className="text-center my-16 sm:text-left sm:my-80">
              <h1 className= "text-4xl sm:text-5xl font-bold mb-4 text-white">The Original Portable Blender</h1>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <button className="btn btn-primary mb-4 sm:mb-0">Shop Now</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <img src={BlenderBlackImage} alt="BlendJet" className="max-w-[80%] max-h-[80%] my-16 min-w-[270px] sm:my-0 sm:ml-8" />
          </div>
        </section>
        <section className="features my-16">
          <h2 className="text-2xl">Features</h2>
          <ul>
            <li>Perfect for jetting around town</li>
            <li>Powers through anything</li>
            <li>Lasts for 15+ blends</li>
            <li>Just add water, soap & blend</li>
          </ul>
        </section>
        <section className="pricing my-8">
          <h2 className="text-2xl">Pricing</h2>
          <p>Each BlendJet is available for $49.95. Custom designs may have an additional cost.</p>
        </section>
        <section className="faq my-8">
          <h2 className="text-2xl">FAQ</h2>
          <ul>
            <li><strong>Q:</strong> What colors are available?<br /><strong>A:</strong> BlendJets are available in various colors including Purple, Black, and Pink.</li>
            <li><strong>Q:</strong> How do I clean my BlendJet?<br /><strong>A:</strong> Just add water, soap, and blend.</li>
            <li><strong>Q:</strong> How long does the battery last?<br /><strong>A:</strong> The battery lasts for 15+ blends on a single charge.</li>
          </ul>
        </section>
      </main>
      <CustomFooter />
      {isPopupOpen && <PaymentForm togglePopup={togglePopup} />}
    </div>
  );
}

export default App;

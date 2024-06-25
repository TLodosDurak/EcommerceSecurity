import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import './App.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import NavbarCustom from './NavbarCustom';
import { getInitialTheme } from './lib/themeUtils';
import CustomFooter from './CustomFooter';
import BlenderBlackImage from './lib/assets/BlendJet-2-BLACK.avif'; // Add the path to your tshirt image

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
        <section className="hero relative overflow-hidden full-bleed bg-gradient-to-r from-primary to-secondary">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary rounded-full opacity-70 animate-move-circle"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary rounded-full opacity-70 animate-move-circle"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center h-full px-4 sm:px-16 sm:justify-between">
            <div className=" text-center my-16 sm:text-left sm:my-80 ">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Discover Our New Collection</h1>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <button className="btn btn-primary mb-4 sm:mb-0">Shop Now</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <img src={BlenderBlackImage} alt="T-shirt" className="w-64 h-64 sm:w-96 sm:h-96 my-16 sm:my-0 sm:ml-8" />
          </div>
        </section>
        <section className="features my-8">
          <h2 className="text-2xl">Features</h2>
          <ul>
            <li>High-quality fabric</li>
            <li>Available in multiple sizes</li>
            <li>Customizable designs</li>
            <li>Available in two colors: Red and Blue</li>
          </ul>
        </section>
        <section className="pricing my-8">
          <h2 className="text-2xl">Pricing</h2>
          <p>Each Oy Shirt is available for $25. Custom designs may have an additional cost.</p>
        </section>
        <section className="faq my-8">
          <h2 className="text-2xl">FAQ</h2>
          <ul>
            <li><strong>Q:</strong> What sizes are available?<br /><strong>A:</strong> Sizes range from S to XXL.</li>
            <li><strong>Q:</strong> How can I customize my shirt?<br /><strong>A:</strong> You can upload your design or choose from our templates during checkout.</li>
            <li><strong>Q:</strong> What are the available colors?<br /><strong>A:</strong> Oy Shirts are available in Red and Blue.</li>
          </ul>
        </section>
      </main>
      <CustomFooter />
      {isPopupOpen && <PaymentForm togglePopup={togglePopup} />}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import './App.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import NavbarCustom from './NavbarCustom';
import { getInitialTheme } from './lib/themeUtils';
import CustomFooter from './CustomFooter';

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
          <NavbarCustom toggleTheme={toggleTheme} theme={theme}/>
        </nav>
      <main className="wrapper mt-16">
        <section className="row-start-1 row-span-1  bg-gradient-to-r from-primary to-secondary full-bleed h-[400px]">
        </section>
        <section className="row-start-1 relative my-8">
          <h2 className="text-3xl text-secondary-content mb-4 text-center">Welcome to Oy Shirts!</h2>
          <div className="flex flex-grow-1 w-full justify-between row-start-2 row-span-1">
            <button className="btn btn-primary" onClick={togglePopup}>
              Buy Now
            </button>
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mt-4" />
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

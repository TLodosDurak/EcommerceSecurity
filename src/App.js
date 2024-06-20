import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import './App.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState('halloween');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'lemonade' ? 'halloween' : 'lemonade';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <main className="wrapper">
        <section className="full-bleed">
          <nav className="navbar p-4 flex justify-between row-start-1">
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="hover:underline">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">FAQ</a>
              </li>
            </ul>
            <button className="btn btn-secondary rounded-btn" onClick={toggleTheme}>
              Theme
            </button>
          </nav>
        </section>
        <section className="row-start-2 row-span-1  bg-gradient-to-r from-primary to-secondary full-bleed h-[400px]">
        </section>
        <section className="row-start-2 relative my-8 z-1">
          <h2 className="text-3xl text-secondary-content mb-4 text-center">Welcome to Our Product!!!</h2>
          <div className="flex flex-grow-1 w-full justify-between row-start-2 row-span-1"> 
            <button className="btn btn-primary" onClick={togglePopup}>
              Buy Now
            </button>
            <input type="checkbox" className="checkbox checkbox-primary mt-4" />
          </div>
        </section>

        <section className="features my-8 row-start-3">
          <h2 className="text-2xl">Features</h2>
          {/* Add feature details here */}
        </section>

        <section className="pricing my-8 row-start-4">
          <h2 className="text-2xl">Pricing</h2>
          {/* Add pricing details here */}
        </section>

        <section className="faq my-8 row-start-5">
          <h2 className="text-2xl">FAQ</h2>
          {/* Add FAQ details here */}
        </section>
      </main>
      
      <footer className="bg-base-200 py-4 text-center">
        <p>&copy; 2024 E-commerce</p>
      </footer>

      {isPopupOpen && <PaymentForm togglePopup={togglePopup} />}
    </div>
  );
}

export default App;

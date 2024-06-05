import React, { useState } from 'react';
import './App.css';
import PaymentForm from './PaymentForm';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-4xl">E-commerce Product</h1>
      </header>

      <main className="p-8">
        <section className="hero bg-blue-500 text-white p-8">
          <h2 className="text-3xl">Welcome to Our Product!</h2>
          <button className="bg-white text-blue-500 px-4 py-2 mt-4" onClick={togglePopup}>
            Buy Now
          </button>
        </section>

        <section className="features my-8">
          <h2 className="text-2xl">Features</h2>
          {/* Add feature details here */}
        </section>

        <section className="pricing my-8">
          <h2 className="text-2xl">Pricing</h2>
          {/* Add pricing details here */}
        </section>

        <section className="faq my-8">
          <h2 className="text-2xl">FAQ</h2>
          {/* Add FAQ details here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <p>&copy; 2024 E-commerce</p>
      </footer>

      {isPopupOpen && <PaymentForm togglePopup={togglePopup} />}
    </div>
  );
}

export default App;

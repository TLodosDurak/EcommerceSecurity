import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import './App.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import NavbarCustom from './NavbarCustom';
import { getInitialTheme } from './lib/themeUtils';
import CustomFooter from './CustomFooter';
import BlenderBlackImage from './lib/assets/BlendJet-2-BLACK.avif';
import BlenderWhiteImage from './lib/assets/BlendJet-2-White.avif';
import battery from './lib/assets/battery.png';
import clean from './lib/assets/clean.png';
import colors from './lib/assets/colorful.png';
import portable from './lib/assets/portable.png';
import powerful from './lib/assets/powerful.png';
import lifestyle from './lib/assets/lifestyle.png';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [cart, setCart] = useState([]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
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
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    const benefitsSectionTop = benefitsSection.offsetTop - 60;
    window.scrollTo({
      top: benefitsSectionTop,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <nav>
          <NavbarCustom toggleTheme={toggleTheme} theme={theme} togglePopup={togglePopup} />
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
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">The Original Portable Blender</h1>
                <p className="text-lg text-white mb-4 text-left">Blend anywhere, anytime with our powerful, portable blender.</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <button className="btn btn-primary mb-4 sm:mb-0" onClick={togglePopup}>Shop Now</button>
                  <button className="btn btn-secondary" onClick={scrollToBenefits}>Learn More</button>
                </div>
            </div>
            <img src={BlenderBlackImage} alt="BlendJet" className="max-w-[80%] max-h-[80%] my-16 min-w-[270px] sm:my-0 sm:ml-8" />
          </div>
      </section>


          <section className="benefits full-bleed py-16 bg-secondary" id="benefits">
            <div className="container mx-auto px-4 sm:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={portable} alt="Portability" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Portability</h2>
                        <p>Perfect for jetting around town, bringing to work, or for traveling. Compact and lightweight.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={powerful} alt="Powerful Blending" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Powerful Blending</h2>
                        <p>Powers through anything you put in it, from smoothies to frozen fruits and ice.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={battery} alt="Long-Lasting Battery" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Long-Lasting Battery</h2>
                        <p>Lasts for 15+ blends and recharges quickly with any USB port.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={clean} alt="Easy to Clean" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Easy to Clean</h2>
                        <p>Just add water, soap, and blend to clean. Dishwasher safe for easy maintenance.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={colors} alt="Variety of Colors" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Variety of Colors</h2>
                        <p>Available in multiple colors to match your style and preference.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 w-full shadow-xl">
                      <figure>
                        <img src={lifestyle} alt="Affordable" className="w-full h-40 object-cover" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Affordable</h2>
                        <p>High quality at an affordable price, making it accessible for everyone.</p>
                      </div>
                  </div>
                </div>
            </div>
          </section>


          <section className="pricing full-bleed py-16 bg-primary">
            <div className="container mx-auto px-4 sm:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Pricing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="card bg-base-200 w-full shadow-xl">
                      <figure>
                        <img src={BlenderBlackImage} alt="Black BlendJet" className=" pt-4 h-96 object-cover" />
                      </figure>
                      <div className="card-body text-center">
                        <h2 className="card-title text-3xl font-bold">Black BlendJet</h2>
                        <p className="text-2xl font-bold mb-4 text-left">$49.95</p>
                        <p>The original BlendJet, available in Black.</p>
                        <button className="btn btn-secondary" onClick={togglePopup}>Shop Now</button>
                      </div>
                  </div>
                  <div className="card bg-base-200 w-full shadow-xl">
                      <figure>
                        <img src={BlenderWhiteImage} alt="White BlendJet" className="pt-4 h-96 object-cover" />
                      </figure>
                      <div className="card-body text-center">
                        <h2 className="card-title text-3xl font-bold">White BlendJet</h2>
                        <p className="text-2xl font-bold mb-4 text-left">$49.95</p>
                        <p>The original BlendJet, available in White.</p>
                        <button className="btn btn-secondary" onClick={togglePopup}>Shop Now</button>
                      </div>
                  </div>
                </div>
            </div>
          </section>

          <section className="faq full-bleed py-16 bg-secondary">
            <div className="container mx-auto px-4 sm:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">FAQ</h2>
                <div className="grid grid-cols-1 gap-8">
                  <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" defaultChecked />
                      <div className="collapse-title text-xl font-medium">What colors are available?</div>
                      <div className="collapse-content">
                        <p>BlendJets are available in Black and White.</p>
                      </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">How do I clean my BlendJet?</div>
                      <div className="collapse-content">
                        <p>Just add water, soap, and blend. Dishwasher safe for easy cleaning.</p>
                      </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">How long does the battery last?</div>
                      <div className="collapse-content">
                        <p>The battery lasts for 15+ blends on a single charge.</p>
                      </div>
                  </div>
                </div>
            </div>
          </section>

          <section className="call-to-action bg-primary text-white py-16 full-bleed">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to get your BlendJet?</h2>
                <button className="btn btn-secondary" onClick={togglePopup}>Shop Now</button>
            </div>
          </section>
      </main>
      <CustomFooter />
      {isPopupOpen && <PaymentForm togglePopup={togglePopup} addToCart={addToCart} />}
    </div>
);
}

export default App;

import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import BlenderBlackImage from './lib/assets/BlendJet-2-BLACK.avif';
import BlenderWhiteImage from './lib/assets/BlendJet-2-White.avif';
import { ReactComponent as DiceIcon } from './lib/icons/DiceIcon.svg';

function PaymentForm({ togglePopup }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    quantity: 1,
    color: 'Black'
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleMockData = () => {
    setPaymentDetails({
      cardNumber: Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0'),
      expiry: `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/${Math.floor(Math.random() * 10 + 24)}`,
      cvv: Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
      quantity: Math.floor(Math.random() * 10) + 1,
      color: ['Black', 'White'][Math.floor(Math.random() * 2)]
    });
  };

  const incrementQuantity = () => {
    setPaymentDetails({ ...paymentDetails, quantity: paymentDetails.quantity + 1 });
  };

  const decrementQuantity = () => {
    if (paymentDetails.quantity > 1) {
      setPaymentDetails({ ...paymentDetails, quantity: paymentDetails.quantity - 1 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encryptedDetails = await encryptPaymentDetails(paymentDetails);
    setSubmittedData([...submittedData, { unencrypted: paymentDetails, encrypted: encryptedDetails }]);
  };

  return (
    <dialog open className="modal modal-open">
      <form method="dialog" className="modal-box w-full max-w-5xl" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Payment Form</h3>
          <button className="btn btn-secondary flex items-center" type="button" onClick={handleMockData}>
            <DiceIcon className="w-6 h-6 mr-2" /> Fill with Mock Data
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-8">
            <img
              src={paymentDetails.color === 'Black' ? BlenderBlackImage : BlenderWhiteImage}
              alt="BlendJet"
              className="w-48 h-48 mb-4"
            />
            <div className="flex space-x-4">
              <button
                type="button"
                className={`btn ${paymentDetails.color === 'Black' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setPaymentDetails({ ...paymentDetails, color: 'Black' })}
              >
                Black
              </button>
              <button
                type="button"
                className={`btn ${paymentDetails.color === 'White' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setPaymentDetails({ ...paymentDetails, color: 'White' })}
              >
                White
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <input
              className="input input-bordered w-full mt-4"
              name="cardNumber"
              onChange={handleChange}
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
            />
            <input
              className="input input-bordered w-full mt-4"
              name="expiry"
              onChange={handleChange}
              placeholder="Expiry Date"
              value={paymentDetails.expiry}
            />
            <input
              className="input input-bordered w-full mt-4"
              name="cvv"
              onChange={handleChange}
              placeholder="CVV"
              value={paymentDetails.cvv}
            />
            <div className="flex items-center mt-4">
              <button type="button" className="btn btn-secondary" onClick={decrementQuantity}>-</button>
              <input
                className="input input-bordered w-16 text-center mx-2"
                name="quantity"
                type="number"
                onChange={handleChange}
                value={paymentDetails.quantity}
                min="1"
                readOnly
              />
              <button type="button" className="btn btn-secondary" onClick={incrementQuantity}>+</button>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <button className="btn btn-primary" type="submit">
            Pay
          </button>
          <button className="btn" onClick={togglePopup}>
            Cancel
          </button>
        </div>
        {submittedData.length > 0 && (
          <div className="mt-4">
            <h4 className="font-bold">Submitted Data</h4>
            <table className="table-auto w-full mt-4">
              <thead>
                <tr>
                  <th>Card Number</th>
                  <th>Expiry</th>
                  <th>CVV</th>
                  <th>Quantity</th>
                  <th>Color</th>
                  <th>Bcrypt</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.unencrypted.cardNumber}</td>
                    <td>{data.unencrypted.expiry}</td>
                    <td>{data.unencrypted.cvv}</td>
                    <td>{data.unencrypted.quantity}</td>
                    <td>{data.unencrypted.color}</td>
                    <td>{data.encrypted.bcrypt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h4 className="font-bold">Encryption Methods</h4>
              <ul>
                <li><strong>Bcrypt:</strong> A key derivation function used for secure password hashing. It includes a salt to protect against rainbow table attacks. Bcrypt is computationally expensive, which helps prevent brute-force attacks.</li>
              </ul>
            </div>
          </div>
        )}
      </form>
    </dialog>
  );
}

async function encryptPaymentDetails(details) {
  // Encrypt with Bcrypt
  const bcryptSalt = bcrypt.genSaltSync(10);
  const bcryptHash = bcrypt.hashSync(details.cardNumber, bcryptSalt);

  return {
    bcrypt: bcryptHash
  };
}

export default PaymentForm;

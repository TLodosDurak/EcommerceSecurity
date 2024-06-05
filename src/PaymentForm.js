import React, { useState } from 'react';
import axios from 'axios';

function PaymentForm({ togglePopup }) {
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encryptedDetails = encryptPaymentDetails(paymentDetails); // Implement this function
    await axios.post('http://localhost:3001/api/payment', { data: encryptedDetails });
    togglePopup();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl mb-4">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-4"
            name="cardNumber"
            onChange={handleChange}
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
          />
          <input
            className="border p-2 w-full mb-4"
            name="expiry"
            onChange={handleChange}
            placeholder="Expiry Date"
            value={paymentDetails.expiry}
          />
          <input
            className="border p-2 w-full mb-4"
            name="cvv"
            onChange={handleChange}
            placeholder="CVV"
            value={paymentDetails.cvv}
          />
          <button className="bg-blue-500 text-white px-4 py-2" type="submit">
            Pay
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 ml-4" onClick={togglePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

function encryptPaymentDetails(details) {
  // Implement your encryption logic here
  return details; // Placeholder
}

export default PaymentForm;

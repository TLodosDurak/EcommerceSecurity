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
    <dialog open className="modal modal-open">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <h3 className="font-bold text-lg">Payment Form</h3>
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
        <div className="modal-action">
          <button className="btn btn-primary" type="submit">
            Pay
          </button>
          <button className="btn" onClick={togglePopup}>
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}

function encryptPaymentDetails(details) {
  // Implement your encryption logic here
  return details; // Placeholder
}

export default PaymentForm;

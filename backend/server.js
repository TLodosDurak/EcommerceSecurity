const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { encrypt, decrypt } = require('./encryption');

const app = express();
app.use(bodyParser.json());

app.post('/api/payment', (req, res) => {
  const encryptedData = req.body.data;
  const paymentDetails = decrypt(encryptedData);

  // Simulate payment processing
  const paymentSuccess = processPayment(paymentDetails); // Implement this function

  if (paymentSuccess) {
    const transaction = { ...paymentDetails, status: 'success' };
    const encryptedTransaction = encrypt(JSON.stringify(transaction));
    fs.writeFileSync('transactions.json', JSON.stringify(encryptedTransaction, null, 2));
    res.status(200).send('Payment Successful');
  } else {
    res.status(500).send('Payment Failed');
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));

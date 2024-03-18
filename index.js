const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid input. Expected an array.' });
  }

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];

  data.forEach(item => {
    if (typeof item === 'number') {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (typeof item === 'string') {
      if (/^[A-Za-z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      }
    }
  });

  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

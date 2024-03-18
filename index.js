const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const odd_numbers = data.filter(i => i % 2 !== 0);
  const even_numbers = data.filter(i => i % 2 === 0);
  const alphabets = data.filter(s => typeof s === 'string' && s.match(/^[a-zA-Z]+$/)).map(s => s.toUpperCase());

  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets
  };

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

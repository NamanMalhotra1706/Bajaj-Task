const express = require("express");
const app = express();

app.use(express.json());

const oddNumbers = [];
const evenNumbers = [];
const alphabets = [];

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (typeof item === "number") {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (typeof item === "string") {
      if (/^[A-Za-z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      }
    }
  });

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});

app.get("/", (req, res) => {
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

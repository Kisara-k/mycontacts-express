const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json([ // Not necessary, but explicitly setting 200 makes it clear
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

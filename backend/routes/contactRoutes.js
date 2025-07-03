const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json([
    // Not necessary, but explicitly setting 200 makes it clear
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
  ]);
});

module.exports = router;

const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => { ... })
// This achieves the same functionality, but the following is more useful
// when you want to handle multiple HTTP methods on the same path

router
  .route("/")

  .get((req, res) => {
    res.status(200).json([
      // Not necessary, but explicitly setting 200 makes it clear
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
      },
    ]);
  })
  .post((req, res) => {
    res.status(201).json({
      message: "Contact created successfully",
    });
  });

router
  .route("/:id")

  .put((req, res) => {
    res.status(200).json({
      message: "Contact updated successfully",
      id: req.params.id,
    });
  })
  .get((req, res) => {
    res.status(200).json({
      message: "Contact retrieved successfully",
      id: req.params.id,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      message: "Contact deleted successfully",
      id: req.params.id,
    });
  });

module.exports = router;

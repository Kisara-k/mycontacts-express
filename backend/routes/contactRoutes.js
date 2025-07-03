const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} = require("../controllers/contactController");

// router.get("/", (req, res) => { ... })
// This achieves the same functionality, but the following is more useful
// when you want to handle multiple HTTP methods on the same path
// router.route("/").get((req, res) => { ... }).post((req, res) => { ... })

router
  .route("/")

  .get(getAllContacts)
  .post(createContact);

router
  .route("/:id")

  .put(updateContact)
  .get(getContact)
  .delete(deleteContact);

module.exports = router;

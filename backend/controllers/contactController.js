//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getAllContacts = (req, res) => {
  res.status(200).json([
    // Not necessary, but explicitly setting 200 makes it clear
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
  ]);
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.status(201).json({
    message: "Contact created successfully",
  });
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
  res.status(200).json({
    message: "Contact updated successfully",
    id: req.params.id,
  });
};

// @desc Get contact by ID
// @route GET /api/contacts/:id
// @access Public
const getContact = (req, res) => {
  res.status(200).json({
    message: "Contact retrieved successfully",
    id: req.params.id,
  });
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = (req, res) => {
  res.status(200).json({
    message: "Contact deleted successfully",
    id: req.params.id,
  });
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};

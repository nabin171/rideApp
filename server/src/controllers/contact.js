const Contact = require("../models/contact");

// Controller function for saving a contact message
const saveContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const newMessage = new Contact({ name, email, phone, subject, message });
    await newMessage.save();

    // Optional: send email to admin here

    res.status(200).json({
      message: "Your message has been received. We'll get back soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  saveContactMessage,
};

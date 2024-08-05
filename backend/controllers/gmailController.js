import nodemailer from "nodemailer";

const createGmail = async (req, res) => {
  const { name, email, question, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adnan6official@gmail.com",
      pass: "dyzd vzuk pupy opgp",
    },
  });

  const mailOptionsToAdmin = {
    from: email,
    to: "adnan6official@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nQuestion: ${question}\nMessage: ${message}`,
  };

  const mailOptionsToUser = {
    from: "adnan6official@gmail.com",
    to: email,
    subject: `Thank you for your message, ${name}`,
    text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n\nQuestion: ${question}\nMessage: ${message}\n\nWe will get back to you shortly.\n\nBest regards,\nAdnan`,
  };

  try {
    // Send email to admin
    await transporter.sendMail(mailOptionsToAdmin);

    // Send email to user
    await transporter.sendMail(mailOptionsToUser);
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default createGmail;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: `"Daily Job Openings" <${process.env.EMAIL}>`,
    to,
    subject,
    html
  });
};

module.exports = sendEmail;
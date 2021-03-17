const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

//getting env vars
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

//creating the nodemailer

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    password: gmailPassword,
  },
});

async function sendWelcomeEmail(email) {
  const mailOptions = {
    from: "The Grid Notifcation <lalleaccbik@gmail.com>",
    to: email,
    subject: "Welcome Email",
    text: `Hello ${email}. Welcome to the grid! Bye Bye`,
  };

  await mailTransport.sendMail(mailOptions);
  console.log(`New Email sent to ${email}`);
  return null;
}

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  return sendWelcomeEmail(email);
}); //listening to the event
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

admin.initializeApp();

// 🔐 Replace with your real values from Twilio dashboard
const accountSid = "AC5e8a6d9c12cf7312c37434d597b9439c";
const authToken = "60121351de7c62fce9571a0a42bb5cd3";

const client = twilio(accountSid, authToken);

// 🔥 Trigger when new booking is created
exports.sendWhatsAppOnOrder = functions.firestore
  .document("orderRequests/{orderId}")
  .onCreate(async (snap, context) => {

    const data = snap.data();

    try {
      await client.messages.create({
        body: `Hi ${data.fullname} 👋
Thank you for choosing Studio97!
Your booking is under review.
We will contact you shortly.`,
        from: "whatsapp:+14155238886", // Twilio sandbox number
        to: `whatsapp:+91${data.phone}` // Make sure phone is without +91 in DB
      });

      console.log("WhatsApp message sent successfully");

    } catch (error) {
      console.error("Error sending WhatsApp:", error);
    }

    return null;
  });


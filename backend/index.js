require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

app.post('/send-otp', (req, res) => {
    const { phoneNumber, otp } = req.body;

    client.messages
        .create({
            body: `Your OTP is ${otp}`,
            to: phoneNumber, // Phone number from request body
            from: twilioPhoneNumber, // From a valid Twilio number
        })
        .then((message) => res.json({ success: true, sid: message.sid }))
        .catch((err) => res.json({ success: false, error: err.message }));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js';
import attributesRoutes from './routes/attributesRoutes.js'
import retailerRoutes from './routes/RetailerRoutes.js'; // Import retailer routes


import path from 'path'; // Import the path module

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use(bodyParser.json());
app.use('/auth', authRoutes); 
app.use('/products', productRoutes); // For product-related routes
app.use("/api", attributesRoutes);
app.use("/retailers", retailerRoutes);

app.use("/",(req,res=>{
    res.send('server is running ')
}))



// Your EKYC Hub API credentials
const EKYCHUB_USERNAME = process.env.EKYCHUB_USERNAME;
const EKYCHUB_API_TOKEN = process.env.EKYCHUB_API_TOKEN;

// Send OTP Endpoint
app.post('/send-otp', async (req, res) => {
    const { aadhaarNumber, orderid } = req.body;

    if (!aadhaarNumber || !orderid) {
        return res.status(400).json({ message: 'Aadhaar number and orderid are required' });
    }

    try {
        const ekycResponse = await axios.get('https://connect.ekychub.in/v3/verification/get_aadhaar_otp?username=7598984380&token=4d02b95e1731557716c68948638c1199&aadhaar_number=xxx&orderid=xxxx', {
            params: {
                username: EKYCHUB_USERNAME,
                token: EKYCHUB_API_TOKEN,
                aadhaar_number: aadhaarNumber,
                orderid: orderid,
            },
        });

        const { ref_id } = ekycResponse.data; // Extract ref_id from the response
        res.status(200).json({ message: 'OTP sent successfully', ref_id, orderid });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to send OTP', error: error.response?.data || error.message });
    }
});

// Verify OTP Endpoint
app.post('/verify-otp', async (req, res) => {
    const { otp, ref_id, orderid, aadhaar_number } = req.body;

    if (!otp || !ref_id || !orderid || !aadhaar_number) {
        return res.status(400).json({ message: 'OTP, ref_id, aadhaar_number, and orderid are required' });
    }

    try {
        const ekycResponse = await axios.get('https://connect.ekychub.in/v3/verification/aadhaar_verify?username=7598984380&token=4d02b95e1731557716c68948638c1199&aadhaar_number=xxx&ref_id=xxx&otp=xxxx&orderid=xxxx', {
            params: {
                username: EKYCHUB_USERNAME,
                token: EKYCHUB_API_TOKEN,
                otp: otp,
                ref_id: ref_id,
                orderid: orderid,
                aadhaar_number: aadhaar_number,
            },
        });

        // Log customer details for debugging
        console.log('Customer Aadhaar Number:', aadhaar_number);
        console.log('OTP:', otp);
        console.log('Order ID:', orderid);
        console.log('Response Data:', ekycResponse.data);

        // Send the response to the client
        res.status(200).json({ message: 'Aadhaar verification successful', data: ekycResponse.data });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to verify OTP', error: error.response?.data || error.message });
    }
});


// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on http://localhost:3000');
});

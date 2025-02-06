import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../Library/db.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Helper function to validate inputs
const validateRegisterInput = ({ name, password, address, pincode, phone, district, taluka }) => {
    if (!name || typeof name !== 'string') return 'Name is required.';
    if (!password || password.length < 6) return 'Password must be at least 6 characters.';
    if (!address || typeof address !== 'string') return 'Address is required.';
    if (!pincode || !/^\d{6}$/.test(pincode)) return 'Pincode must be a 6-digit number.';
    if (!phone || !/^\d{10}$/.test(phone)) return 'Phone number must be a 10-digit number.';
    if (!district || typeof district !== 'string') return 'District is required.';
    if (!taluka || typeof taluka !== 'string') return 'Taluka is required.';
    return null;
};

const validateLoginInput = ({ phone, password }) => {
    if (!phone || !/^\d{10}$/.test(phone)) return 'Phone number must be a 10-digit number.';
    if (!password || typeof password !== 'string') return 'Password is required.';
    return null;
};

// Register a new user
router.post('/register', async (req, res) => {
    const { name, password, address, pincode, phone, district, taluka } = req.body;

    // Manual input validation
    const validationError = validateRegisterInput(req.body);
    if (validationError) {
        return res.status(400).json({ success: false, message: validationError });
    }

    try {
        const db = await connectToDatabase();

        // Check if the phone number is already registered
        const [existingUser] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
        if (existingUser.length > 0) {
            return res.status(409).json({ success: false, message: 'User with this phone already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await db.query(
            'INSERT INTO users (name, password, address, pincode, phone, district, taluka) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, hashedPassword, address, pincode, phone, district, taluka]
        );

        return res.status(201).json({ success: true, message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error during registration:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { phone, password } = req.body;

    // Manual input validation
    const validationError = validateLoginInput(req.body);
    if (validationError) {
        return res.status(400).json({ success: false, message: validationError });
    }

    try {
        const db = await connectToDatabase();

        // Check if the user exists
        const [user] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
        if (user.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const storedPassword = user[0].password;

        // Compare passwords
        const isMatch = await bcrypt.compare(password, storedPassword);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user[0].id, phone: user[0].phone },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Exclude sensitive data
        const { password: _, ...userData } = user[0];

        return res.status(200).json({
            success: true,
            message: 'Login successful.',
            user: userData,
            token,
        });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

export default router;

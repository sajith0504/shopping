import express from 'express';
import { connectToDatabase } from '../Library/db.js'; // Database connection module

const router = express.Router();


// Register a new user
router.post('/register', async (req, res) => {
    const { name, password, address, pincode, phone, district, taluka } = req.body;
  
    // Basic validation
    if (!name || !password || !address || !pincode || !phone || !district || !taluka) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
  
    try {
        const db = await connectToDatabase();
  
        // Check if phone already exists
        const [existingUser] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
        if (existingUser.length > 0) {
            return res.status(409).json({ success: false, message: 'User with this phone already exists.' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Insert the new user into the database
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

    // Basic validation
    if (!phone || !password) {
        return res.status(400).json({ success: false, message: 'Phone and password are required.' });
    }

    try {
        const db = await connectToDatabase();

        // Fetch user details
        const [user] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
        if (user.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const storedPassword = user[0].password; // Assuming the password is stored in plain text

        // Compare passwords directly (no hashing)
        if (password !== storedPassword) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Login successful.',
            data: user[0],
        });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

export default router;

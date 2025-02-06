import express from 'express';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../Library/db.js'; // Import the database connection

const router = express.Router();

// Add a new retailer (Only distributor, admin, or superadmin can add retailers)
router.post('/submit-retailer', async (req, res) => {
  const { name, phone, address, district, taluka, pincode, password, referralId, role, shopname } = req.body;

  // Validate required fields
  if (!name || !phone || !address || !district || !taluka || !pincode || !password || !referralId || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Validate role
  const validRoles = ['distributor', 'admin', 'superadmin', 'retailer'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'Invalid role.' });
  }

  // Validate shopname for retailers
  if (role === 'retailer' && !shopname) {
    return res.status(400).json({ message: 'Shopname is required for retailers.' });
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Check if a user with the same phone number already exists
    const checkQuery = 'SELECT * FROM users WHERE phone = ?';
    const [existingUser] = await db.query(checkQuery, [phone]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'A user with this phone number already exists.' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare the query and values based on the role
    let query, values;
    if (role === 'retailer') {
      // For retailers, include shopname in the query
      query = `
        INSERT INTO users (name, phone, address, district, taluka, pincode, password, role, referralId, shopname)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      values = [name, phone, address, district, taluka, pincode, hashedPassword, role, referralId, shopname];
    } else {
      // For other roles, exclude shopname
      query = `
        INSERT INTO users (name, phone, address, district, taluka, pincode, password, role, referralId)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      values = [name, phone, address, district, taluka, pincode, hashedPassword, role, referralId];
    }

    // Insert the new user into the database
    const [result] = await db.query(query, values);
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Error adding user' });
  }
});

// Get a list of distributor ( admin, or superadmin can view retailers)
router.get('/view-distributors', async (req, res) => {
  console.log('Received GET request at /retailers/view-distributors');
  
  try {
    const db = await connectToDatabase();
    
    // Fetch distributors where role is 'distributor'
    const [distributors] = await db.query("SELECT * FROM users WHERE role = 'distributor'");
    
    if (distributors.length === 0) {
      return res.status(404).json({ message: 'No distributors found' });
    }

    // Send distributors as JSON response
    res.status(200).json({ distributors });
  } catch (error) {
    console.error('Error in /retailers/view-distributors:', error);
    res.status(500).json({ message: 'Failed to fetch distributors', error: error.message });
  }
});

// Get a list of retailers (Only distributor, admin, or superadmin can view retailers)
router.get('/view-retailers', async (req, res) => {
  console.log('Received GET request at /retailers/view-retailers');
  
  try {
    const db = await connectToDatabase();
    
    // Fetch distributors where role is 'distributor'
    const [distributors] = await db.query("SELECT * FROM users WHERE role = 'retailer'");
    
    if (distributors.length === 0) {
      return res.status(404).json({ message: 'No distributors found' });
    }

    // Send distributors as JSON response
    res.status(200).json({ distributors });
  } catch (error) {
    console.error('Error in /retailers/view-distributors:', error);
    res.status(500).json({ message: 'Failed to fetch distributors', error: error.message });
  }
});

// Get a list of admins (Only  superadmin can view retailers)
router.get('/view-admins', async (req, res) => {
  console.log('Received GET request at /retailers/view-admins');
  
  try {
    const db = await connectToDatabase();
    
    // Fetch distributors where role is 'distributor'
    const [distributors] = await db.query("SELECT * FROM users WHERE role = 'admin'");
    
    if (distributors.length === 0) {
      return res.status(404).json({ message: 'No admins found' });
    }

    // Send distributors as JSON response
    res.status(200).json({ distributors });
  } catch (error) {
    console.error('Error in /retailers/view-distributors:', error);
    res.status(500).json({ message: 'Failed to fetch distributors', error: error.message });
  }
});




export default router;

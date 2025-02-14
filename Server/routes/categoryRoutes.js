import express from 'express';
import multer from 'multer';
import { connectToDatabase } from '../Library/db.js';

const router = express.Router();

// Ensure database connection inside the route
const db = await connectToDatabase();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = file.fieldname === 'file' ? 'uploads/categories/' : 'uploads/icons/';
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ POST route to add a new category
router.post('/categories', upload.single('file'), async (req, res) => {
  try {
    const { categoryName, subcategoryName, parentCategory, selectedIcon } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    console.log('Received Data:', req.body);
    console.log('Uploaded File:', req.file);

    const result = await db.query(
      'INSERT INTO categories (category_name, subcategory_name, parent_category, icon, image) VALUES (?, ?, ?, ?, ?)',
      [categoryName, subcategoryName || null, parentCategory, selectedIcon || null, imagePath]
    );

    console.log('Database Insert Result:', result);

    if (result[0]?.affectedRows > 0) {
      return res.status(200).json({
        message: 'Category added successfully!',
        newCategory: { categoryName, subcategoryName, parentCategory, selectedIcon, imagePath },
      });
    } else {
      return res.status(500).json({ error: 'Failed to add category' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: 'Database error. Check logs.' });
  }
});






//get all category

router.get('/getcategory', async (req, res) => {
  try {
    const [categories] = await db.query('SELECT * FROM categories');

    // Ensure correct icon and image URLs
    const updatedCategories = categories.map(category => ({
      ...category,
      image: category.image ? `http://localhost:3000/uploads/categories/${category.image}` : null,
      icon: category.icon ? `/assets/svg/${category.icon}` : null, // No uploads path
    }));

    res.json({ categories: updatedCategories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});


export default router;

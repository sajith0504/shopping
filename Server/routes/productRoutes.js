import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors'; // Add CORS support
import { connectToDatabase } from '../Library/db.js';

const router = express.Router();

// Enable CORS
router.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath =
      file.fieldname === 'images'
        ? 'uploads/images/'
        : file.fieldname === 'thumbnail'
        ? 'uploads/thumbnails/'
        : 'uploads/videos/';
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Submit Product
router.post(
  '/submit-product',
  upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'thumbnail', maxCount: 1 },
    { name: 'video', maxCount: 1 },
  ]),
  async (req, res) => {
    const {
      productName,
      productType,
      category,
      subcategory,
      brand,
      unit,
      tags,
      exchangeable,
      refundable,
      description,
      videoProvider,
      videoLink,
      optionName,
      optionValue,
      weight,
      dimensions,
      price,
      comparePrice,
      costPerItem,
      sku,
      stockStatus,
      inventory,
      upsells,
      crossSells,
      pageTitle,
      metaDescription,
      urlHandle,
    } = req.body;

    const imagePaths = req.files['images']
      ? req.files['images'].map((file) => `/uploads/images/${file.filename}`).join(',')
      : '';
    const thumbnailPath = req.files['thumbnail']
      ? `/uploads/thumbnails/${req.files['thumbnail'][0].filename}`
      : '';
    const videoPath = req.files['video']
      ? `/uploads/videos/${req.files['video'][0].filename}`
      : '';

    try {
      const db = await connectToDatabase();

      const query = `
        INSERT INTO products
        (
          productName, productType, category, subcategory, brand, unit, price, exchangeable,
          optionName, optionValue, weight, stockStatus, inventory, pageTitle,
          metaDescription, urlHandle, refundable, description, tags, sku, upsells,
          crossSells, dimensions, images, thumbnail, videoLink, videoProvider, comparePrice,
          costPerItem
        )
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)
      `;

      const values = [
        productName,
        productType,
        category,
        subcategory,
        brand,
        unit,
        price,
        exchangeable,
        optionName,
        optionValue,
        weight,
        stockStatus,
        JSON.stringify(inventory),
        pageTitle,
        metaDescription,
        urlHandle,
        refundable,
        description,
        tags,
        sku,
        upsells,
        crossSells,
        JSON.stringify(dimensions),
        imagePaths,
        thumbnailPath,
        videoLink,
        videoProvider,
        comparePrice,
        costPerItem,
      ];

      console.log('SQL Query:', query);
      console.log('Values Array:', values);

      await db.query(query, values);

      res.status(201).json({ success: true, message: 'Product inserted successfully.' });
    } catch (error) {
      console.error('Error inserting product:', error);
      res.status(500).json({ success: false, message: 'Failed to insert product.' });
    }
  }
);

// Get all products
router.get('/getproducts', async (req, res) => {
  console.log('Received GET request at /products/getproducts');
  try {
    const db = await connectToDatabase();
    const [products] = await db.query('SELECT * FROM products');
    res.json({ products }); // Sending products as JSON response
  } catch (error) {
    console.error('Error in /products/getproducts:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export default router;

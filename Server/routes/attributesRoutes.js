import express from 'express';
import { connectToDatabase } from '../Library/db.js';

const router = express.Router();

// Submit Attribute
router.post('/add-attribute', async (req, res) => {
    const { name, values } = req.body;
  
    if (!name || !values) {
      return res.status(400).json({ success: false, message: "Name and values are required." });
    }
  
    try {
      const db = await connectToDatabase();
  
      // Query to insert the new attribute
      const query = `INSERT INTO attributes (name, attribute_values) VALUES (?, ?)`;
      const attributeValues = JSON.stringify(values); // Ensure it's JSON formatted
      const valuesArray = [name, attributeValues];
  
      await db.query(query, valuesArray);
  
      res.status(201).json({ success: true, message: 'Attribute added successfully!' });
    } catch (error) {
      console.error("Error adding attribute:", error);
      res.status(500).json({ success: false, message: 'Failed to add attribute.' });
    }
  });
  

// Get all attributes
// Get all attributes
router.get("/get-attributes", async (req, res) => {
    try {
      const db = await connectToDatabase();
      const [attributes] = await db.query("SELECT * FROM attributes");
  
      // Parse attribute_values to array if it's JSON string or object
      const updatedAttributes = attributes.map(attribute => {
        // If attribute_values is a string (JSON string), parse it
        if (typeof attribute.attribute_values === 'string') {
          try {
            attribute.attribute_values = JSON.parse(attribute.attribute_values);
          } catch (error) {
            console.error('Error parsing JSON for attribute values', error);
            attribute.attribute_values = []; // Set empty array if parsing fails
          }
        }
  
        return attribute;
      });
  
      res.json({ attributes: updatedAttributes });
    } catch (error) {
      console.error("Error fetching attributes:", error);
      res.status(500).json({ error: "Failed to fetch attributes" });
    }
  });
  

  
export default router;



import express from "express";
import { connectToDatabase } from '../database/db.js';
import bcrypt from "bcryptjs";
const router = express.Router();
import jwt from 'jsonwebtoken'


router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;  
  try {
    const db = await connectToDatabase(); 
    const [rows] = await db.query('SELECT * FROM signup WHERE email = ?', [email]);   
    if (rows.length > 0) {
      return res.json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    await db.query('INSERT INTO signup (name, email,viewpass, password) VALUES (?, ?,?, ?)', [name, email,password, hashedPassword]);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const db = await connectToDatabase(); 
      const [rows] = await db.query('SELECT * FROM signup WHERE email = ?', [email]);
  
      
      if (rows.length === 0) {
        return res.json({ message: "The user exists" });
      }
     const ismatch = bcrypt.compare(password,rows[0].password)
     if (!ismatch){
        return res.json({ message: "Incorrect Password" });
     }
  
     const tocken=jwt.sign({id:rows[0].id},process.env.JWT_KEY,{expiresIn:'3h'})
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   await db.query('INSERT INTO signup (name, email,viewpass, password) VALUES (?, ?,?, ?)', [name, email,password, hashedPassword]);
      res.status(201).json({ tocken: tocken });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error, please try again later" });
    }
  });

export default router;

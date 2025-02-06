import express from 'express';
import multer from 'multer';

const router = express.Router();

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/categoryroutes', upload.array('categoryimage', 10), (req, res) => {
  const { categoryname, subcategoryname, parentcategory, categoryicon } = req.body;

  console.log('Category Name:', categoryname);
  console.log('Subcategory Name:', subcategoryname);
  console.log('Parent Category:', parentcategory);
  console.log('Category Icon:', categoryicon);
  console.log('Uploaded Files:', req.files); // This will contain the files uploaded

  res.status(200).json({
    message: 'Category data received successfully.',
    data: {
      categoryname,
      subcategoryname,
      parentcategory,
      categoryicon,
      files: req.files
    }
  });
});

export default router;

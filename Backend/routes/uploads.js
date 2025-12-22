const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const upload = require('../middleware/upload');

// --- Cloudinary Configuration ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper function to upload a file buffer to Cloudinary
const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject('No file provided.');
    }

    // Upload to Cloudinary using upload_stream
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'project-portfolio', // Optional: organize files in folders
        resource_type: 'auto' // Automatically detect image/video/raw
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result.secure_url); // Returns HTTPS URL
      }
    );

    // Pipe the buffer to Cloudinary
    uploadStream.end(file.buffer);
  });
};


// --- ROUTES ---

// Route to upload a single file
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    const publicUrl = await uploadToCloudinary(req.file);
    res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    res.status(500).json({ error: 'File upload failed.' });
  }
});

// Route to upload multiple files
router.post('/upload-multiple', upload.array('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded.' });
    }

    const uploadPromises = req.files.map(uploadToCloudinary);
    const urls = await Promise.all(uploadPromises);

    res.status(200).json({ urls });
  } catch (error) {
    console.error('Cloudinary Multiple Upload Error:', error);
    res.status(500).json({ error: 'File upload failed.' });
  }
});

module.exports = router;
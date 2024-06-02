const express = require('express');
const multer = require('multer');
const { create } = require('ipfs-http-client');

const app = express();
const port = 5000;

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Initialize IPFS client
const ipfs = create('https://ipfs.infura.io:5001/api/v0');

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }

    // Upload file to IPFS
    const { path } = await ipfs.add(file.buffer);
    res.send({ message: 'File uploaded successfully', path });
  } catch (error) {
    console.error('Error uploading file to IPFS:', error);
    res.status(500).send({ message: 'Upload failed', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

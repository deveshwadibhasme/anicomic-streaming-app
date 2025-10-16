const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const upload = require('./configs/Multer');
const GameInfo = require('./models/GamesInfo');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
const PORT = 5000;

const allowedOrigin = ['http://localhost:5173']

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:3000',
            'https://anicomic.in',
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
})


// Routes

app.delete('/api/images/:public_id', async (req, res) => {
    try {
        const { public_id } = req.params;
        if (!public_id) {
            return res.status(400).json({ error: 'Public ID is required' });
        }
        
        const result = await cloudinary.uploader.destroy(public_id);
        if (result.result === 'ok') {
            res.json({ message: 'Image deleted successfully' });
        } else {
            res.status(404).json({ error: 'Image not found or already deleted' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting image', details: error.message });
    }
});


app.post('/to-studio', upload.fields([
  { name: 'imagePortrait', maxCount: 1 },
  { name: 'imageLandscape', maxCount: 1 }
]), async (req, res) => {
  const { title, description, spotifyLink, released, managingTeam, characterVoices } = req.body;
  const newSeriesInfo = new SeriesInfo({ title, description, spotifyLink, released });

  if (managingTeam) {
    newSeriesInfo.managingTeam = JSON.parse(managingTeam);
  }
  if (characterVoices) {
    newSeriesInfo.characterVoices = JSON.parse(characterVoices);
  }

  if (req.files && req.files.imagePortrait && req.files.imagePortrait[0]) {
    const portraitResult = await uploadToCloudinary(req.files.imagePortrait[0].buffer, req.files.imagePortrait[0].originalname);
    if (portraitResult && portraitResult.secure_url) {
      newSeriesInfo.imagePortrait = portraitResult.secure_url;
    }
  }

  if (req.files && req.files.imageLandscape && req.files.imageLandscape[0]) {
    const landscapeResult = await uploadToCloudinary(req.files.imageLandscape[0].buffer, req.files.imageLandscape[0].originalname);
    if (landscapeResult && landscapeResult.secure_url) {
      newSeriesInfo.imageLandscape = landscapeResult.secure_url;
    }
  }

  await newSeriesInfo.save();
  res.json(newSeriesInfo);
});

app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: err.message || 'Unexpected server error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
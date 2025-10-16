const multer = require('multer');
const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const cloudinary = require('./Cloudinary');
const path = require('path');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'anicomic',
  }
});

const upload = multer({ storage: storage });

module.exports = upload;


// const multer = require('multer');
// const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
// const cloudinary = require('./Cloudinary');

// // Storage for images
// const imageStorage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'anicomic/series-image',
//     allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
//   },
// });

// // Storage for audios
// const audioStorage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'anicomic/series-audio',
//     resource_type: 'video', // important for audio/video uploads
//     allowed_formats: ['mp3', 'wav', 'ogg', 'm4a'],
//   },
// });

// // Create two upload handlers
// const uploadImage = multer({ storage: imageStorage });
// const uploadAudio = multer({ storage: audioStorage });

// module.exports = { uploadImage, uploadAudio };

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: async (req, file) => {
//     let folder = 'anicomic/series-others';
//     if (file.mimetype.startsWith('image/')) folder = 'anicomic/series-image';
//     if (file.mimetype.startsWith('audio/')) folder = 'anicomic/series-audio';
//     return {
//       folder,
//       resource_type: file.mimetype.startsWith('audio/') ? 'video' : 'image',
//     };
//   },
// });

// const upload = multer({ storage });
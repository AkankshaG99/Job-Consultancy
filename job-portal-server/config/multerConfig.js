const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes', 
    resource_type: 'auto',
    type: 'upload',
    format: async (req, file) => file.originalname.split('.').pop(), 
    public_id: (req, file) => file.originalname.split('.')[0], 
  },
});

const upload = multer({ storage });

module.exports = upload;

import cloudinary from 'cloudinary';
import stream from 'stream';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload function
export const uploadImageToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileBuffer);

    cloudinary.uploader
      .upload_stream(
        {
          folder: 'ideas', // Optional: Organize images into folders
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
            console.error('Error uploading to Cloudinary:', error);
            return reject(new Error('Cloudinary upload failed'));
          }
          resolve(result); // resolve with result
        },
      )
      .end(bufferStream); // Pipe the buffer to Cloudinary
  });
};

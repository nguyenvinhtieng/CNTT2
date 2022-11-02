const cloudinary = require('../config/cloudinary')
async function uploadImage(file) {
    let result = await cloudinary.uploader.upload(file.path,  {folder: 'cntt2'});
    return result.secure_url
}
module.exports = uploadImage;
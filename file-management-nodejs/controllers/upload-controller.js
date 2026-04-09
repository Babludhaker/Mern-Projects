const cloudinary = require("../config/cloudinary.js");

exports.uploadImage = async (req, res, next) => {
  console.log(req.file);
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No File Uploaded" });
    }

    //convert  buffer to base64
    const fileStr = req.file.buffer.toString("base64");
    const fileUri = `data:${req.file.mimetype};base64,${fileStr}`;

    const result = await cloudinary.uploader.upload(fileUri, {
      folder: "my_files",
    });

    return res.status(200).json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

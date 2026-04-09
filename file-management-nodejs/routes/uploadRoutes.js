const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const { uploadImage } = require("../controllers/upload-controller");

router.post("/upload", upload.single("file"), uploadImage);

module.exports = router;

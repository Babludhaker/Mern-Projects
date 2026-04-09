require("dotenv").config();

const express = require("express");
const uploadRoutes = require("./routes/uploadRoutes");
const upload = require("./middleware/multer");
const app = express();

app.use(express.json());

app.use("/api", uploadRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Error Occurs", error: err });
  next();
});

app.post("/test", upload.single("file"), (req, res) => {
  console.log("FILE:", req.file);
  res.send("Check console");
});

module.exports = app;

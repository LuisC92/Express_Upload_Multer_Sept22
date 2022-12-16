const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const { UploadController } = require("./controllers");

const router = express.Router();

//* route to add file/image
router.post("/upload", upload.single("myfile"), UploadController.upload);

module.exports = router;

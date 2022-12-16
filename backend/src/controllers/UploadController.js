const fs = require("fs");

class UploadController {
  static upload = (req, res) => {
    //* rename it's a method in fs to get the file and store it in our local images folder
    fs.rename(
      req.file.path,
      `public/images/${req.file.originalname}`,
      //* error handling
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading");
        } else {
          //* send to frontend a msg and the new path/ url of the image
          res.status(203).json({
            msg: "Upload success",
            url: `http://localhost:5000/public/images/${req.file.originalname}`,
          });
        }
      }
    );
  };
}

module.exports = UploadController;

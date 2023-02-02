import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "public/assets");
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});
const uploadFile = multer({ storage });

export default uploadFile;

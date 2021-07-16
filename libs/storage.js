const multer = require("multer");
//"multer" maneja donde guardar los archivos donde le digamos

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage/imgs");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let ext = extArray[extArray.length - 1];

    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/; //Expresión regular
    const mimeType = filetypes.test(file.mimetype);
    const extFile = filetypes.test(path.extname(file.originalname));
    if( mimeType && extFile) { 
      return cb(null, true)
    }
    cb(" Error: image not valid")
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

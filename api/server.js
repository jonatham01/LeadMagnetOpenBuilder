const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());


const storage = multer.diskStorage({
    filename: function (res, file, cb) {
      
      const ext = file.originalname.split(".").pop(); //TODO pdf / jpeg / mp3
      const fileName = Date.now(); //TODO 12312321321
      cb(null, `${fileName}.${ext}`); //TODO 123123213232.pdf
    },

    destination: `../src/assets/galeria`

    /*destination: function (res, file, cb) {
      cb(null, `../src/assets/galeria`);
    },*/

  });


const upload = multer({ storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  
  console.log(req.body);

  console.log(storage.diskStorage)

  console.log(req.file);
  //console.log(file)
  res.send(req.file);
});

app.listen(port, () => {
  console.log("Listo por el puerto", port);
});
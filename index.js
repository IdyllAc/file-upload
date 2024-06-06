const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

console.log('Server Started!!!!');

app.use(fileUpload(
   {
    limits: {
         fileSize: 10000000,
      },
     abort0nLimit: true,
  }
));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send('Hello World');
    // res.sendFile(path.join(__dirname + "public", "index.html"));
});

app.post('/upload', (req, res) => {
 const { file } = (req.files);


  if (!file) return res.sendStatus(400);

    //  if (!/^image/.test(image.mimetype)) return res.sendStatus(400);


     file.mv(__dirname + '/uploads/' + file.name);


    res.sendStatus(200);

});

        app.listen(port, () => {
         console.log(`Server run on port ${port}`);
        });

         /* || FOOTER */
    

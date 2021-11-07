const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(fileUpload());
app.use(cors());

app.post('/upload-file', (req,res) => {
    if(req.files === null) {
        return res.status(400).json({ message: 'No file exist in request' })
    };
    const file = req.files.file;
    file.mv(path.join(`../my-app/src/uploads/${file.name}`), err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        };
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    })
})

app.listen('5000',() => {
    console.log('server was started')
});
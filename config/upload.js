require('dotenv').config();

const express = require('express'); 
const aws = require('aws-sdk');
const multers3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const router = express.Router();
router.use(cors());;

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY,
    Bucket: process.env.AWS_BUCKET
});

const imgUpload = multer({
    storage: multers3({
        s3: s3,
        bucket: process.env.AWS_BUCKET,
        contentType: multers3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function(req, file, cb){
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
        }       
    }),
    limits: { fileSize: 2000000 },
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('file');

function checkFileType(file, cb){
    const fileTypes = /jpeg|jpg|gif|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    } else {
        cb('Erro: Formato de imagem não compatível.')
    }
}

router.post('/single', (req, res) => {
    imgUpload(req, res, (error) => {
        console.log('request ok: ', req.file);
        console.log('error: ', error);
        if(error){
            console.log('errors', error);
            res.json({error: error});
        } else {
            if(req.file === undefined){
                console.log('Error: Nenhum arquivo selecionado');
                res.json('Error: Nenhum arquivo selecionado');
            } else {
                const imageName = req.file.key;
                const imageLocation = req.file.location;

                return res.json({
                    image: imageName,
                    location: imageLocation
                });
            }
        }
    });
});

module.exports = router;
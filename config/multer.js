const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'upload/')
    },
    filename: function(req, file, callback){
        console.log(path.extname(file.originalname));
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage: storage});
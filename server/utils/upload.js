import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:'',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg","image/jpeg"];

        if(match.indexOf(file.mime) === -1) 
            return`${Date.now()}-image-${file.originalname}`;

        return {
            bucketName: "phots",
            filename: `${Date.now()}-image-${file.originalname}`
        }
    }
})

export default multer({storage})
import multer from 'multer';
import path from 'path';
import slugify from 'slugify';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${slugify(file.originalname)}`;

      callback(null, fileName);
    },
  }),
};

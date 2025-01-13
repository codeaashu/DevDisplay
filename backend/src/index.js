import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from '../config/db.js';
// import fileUpload from 'express-fileupload';
// import multer from 'multer';

import { PORT } from '../config/server-config.js';
import apiRoutes from '../routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

//DB connection
connectDB();

//routes
app.use('/api', apiRoutes);

// app.use(fileUpload({
//   useTempFiles: true,
// }));

function setup_and_start_server() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setup_and_start_server();

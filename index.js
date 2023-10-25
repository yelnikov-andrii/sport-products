import express from 'express';
import cors from 'cors';
import expressFileupload from 'express-fileupload';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { router } from './routes/index.js';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const app = express();
app.use(express.json());
app.use(expressFileupload({}));
app.use(express.urlencoded({ extended: true} ));
app.use(express.static(path.join(currentDirPath, 'static')));
app.use(cors());
app.use(router);

const port = 2000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



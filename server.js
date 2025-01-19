import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url) // Resolvemos el path del archivo
const __dirname = path.dirname(__filename) // Obtenemos el nombre del directorio
const appName = process.env.APP_NAME

// app.use('/images', express.static(path.join(__dirname, 'images')));

// En la ruta raiz "/" nos mostrará el contenido del archivo "index.html"
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});

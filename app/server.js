import express from 'express'
import path from "path";
//import fs from 'fs';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(filename);

const app = express();
const PORT = 3000;
console.log();
app.use(express.static(__dirname + '/'));
app.get('/', async (req, res) => {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.sendFile(path.join('', 'index.html'));
    res.sendFile('index.html', { root: '.' })
});


app.listen(PORT, () => console.log(`App Listen on Por ${PORT}`))

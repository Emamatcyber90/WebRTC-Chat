import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { host, port } from '../config';
import routes from './routes/index';

let app = express();
const server = require('https').createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/', express.static(path.join(__dirname, '../dist/public')));

if (port) {
    server.listen(port, host, err => {
        const url = `http://${host}:${port}`;
        if (err) console.error(chalk.red(`==> 😱 ${err}`));
        console.info('==> 😎 ✨ Success! ');
    });
} else {
    console.error('😇😇😇');
}

module.exports = app;
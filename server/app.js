import path from 'path';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import { host, port } from '../config';
import routes from './routes/index';

let app = express();
const server = require('http').createServer(app);

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }),
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(bodyParser.json());

app.use('/login', routes);
app.use('/', express.static(path.join(__dirname, '../dist/public')));

if (port) {
    server.listen(port, host, err => {
        const url = `http://${host}:${port}`;
        if (err) console.error(chalk.red(`==> 😱 ${err}`));
        console.info(`${url} ==> 😎 ✨ Success! `);
    });
} else {
    console.error('😇😇😇');
}

module.exports = app;
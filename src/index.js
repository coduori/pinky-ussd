const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./api/index.js');

let server;
const app = express();
const SERVER_PORT = 4000;

app.set('port', SERVER_PORT);

app.use(bodyParser.json({ limit: '16mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(api);

// Routes
app.start = async () => {
    server = http.createServer(app);

    server.on('error', (error) => {
        if (error.syscall !== 'listen') {
            throw error;
        }
        console.error(`Failed to start server: ${error}`);
        process.exit(0);
    });

    server.on('listening', async () => {
        const address = server.address();
        console.log(`Server listening ${address.address}:${address.port};`);
        console.log('Kaende Kaende!\n\n');
    });
};

(async () => {
    try {
        await app.start();
    } catch (error) {
        console.error(error);
        process.exit(15);
    }
})();
server.listen(SERVER_PORT);

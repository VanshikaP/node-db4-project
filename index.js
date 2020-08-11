const server = require('./server.js');
const port = process.env.port || 9000;

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
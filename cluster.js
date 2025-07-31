const cluster = require('cluster');
const os = require('os');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

if (cluster.isMaster) {
    const cpuCount = os.cpus().length;
    console.log(`Master cluster running with ${cpuCount} workers`);

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', () => {
        console.log('Worker died. Forking another one...');
        cluster.fork();
    });
} else {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} (PID: ${process.pid})`);
    });
}

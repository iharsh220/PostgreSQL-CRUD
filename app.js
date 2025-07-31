const express = require('express');
const cors = require('cors');
const compression = require('compression');
const dataRoutes = require('./routes/dataRoutes');
const errorHandler = require('./middleware/errorHandler');
const applySecurity = require('./middleware/security');
const swaggerDocs = require('./swagger');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

applySecurity(app);
swaggerDocs(app);

app.use('/api/data', dataRoutes);

app.use(errorHandler);

module.exports = app;

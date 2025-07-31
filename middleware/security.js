const helmet = require('helmet');
const morgan = require('morgan');

module.exports = (app) => {
    app.use(helmet());
    app.use(morgan('tiny'));
};

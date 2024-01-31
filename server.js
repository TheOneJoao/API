require('dotenv').config();
const log   = require('./utils/log');

process.on('uncaughtException', err => {
    log.e('UNCAUGHT REJECTION! Shutting down...')
    console.log(err.name, err.message);
    process.exit(1); // TODO restarting tool ; handle server shutdown
});

const app   = require('./app')
const port  = process.env.PORT || 62126;

const server = app.listen(port, () => {
    if(app.get('env') === 'development') console.log(process.env);

    log.i(`Setup in ${app.get('env')} mode`);
    log.i(`Listening on port ${port}`);
});

// safety net for unexpected errors
process.on('unhandledRejection', err => {
    log.e('UNHANDLER REJECTION! Shutting down...')
    console.log(err.name, err.message);
    server.close(() => process.exit(1)); // TODO restarting tool ; handle server shutdown
});
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status : err.status,
        error : err,
        message : err.message,
        stack : err.stack
    });
}

const sendErrorProd = (err, res) => {
    if(err.isOperational) { // operational error, thrusted error
        res.status(err.statusCode).json({
            status : err.status,
            message : err.message,
        });
    } else { // unknown error; we don't want to leak details to the client
        console.error('Error! ', err);
        res.status(500).json({
            status : 'error',
            message : 'Ops! Something went wrong'
        });
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // TODO add environment configuration 
    sendErrorDev(err, res);
    //if(err.name === '')
    
    //sendErrorProd(err, res);
/* 
    if(process.env.ENV_MODE === 'development') {
        sendErrorDev(err, res);
    } else if(process.env.ENV_MODE === 'productiion') {
        sendErrorProd(err, res);
    }
*/
}
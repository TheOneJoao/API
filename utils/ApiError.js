class ApiError extends Error {
    constructor(message, statusCode) {
        super(message); // message is set

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // checks if its 4xx
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ApiError;
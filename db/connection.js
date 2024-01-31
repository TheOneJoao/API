//require('dotenv').config(); // load environment variables into the process.env

const mysql = require('mysql2');
const config = require('../config')

console.log("sss")
console.log(config)

const pool = mysql.createPool(config.database);

class DBConnection {
    constructor() {
        console.log(config.database);
        this.pool = mysql.createPool(config.database);
        this.checkConnection;
    }

    checkConnection() {
        this.pool.getConnection((err, connection) => {
            if(err) { // TODO not working
                console.log(err.code);
                let errorDict = require('./errors');
                const error = errorDict[err.code];
                console.error(error);
                //if(error) console.log(error);
                //else console.log('Undefined database error!')
            }

            if(connection)  {
                connection.release();
                console.log("connected to DB!!!");
            }
            return;
        });
    }

    query = async (sql, values, next) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if(error) {
                    reject(error);
                    return;
                }
                resolve(result);
            }
            // execute will internally call prepare and query
            this.pool.execute(sql, values, callback);
        }).catch(err => {
            // TODO needs to check for error type
            const mysqlErrorList = Object.keys(HttpStatusCodes);
            // convert mysql errors which in the mysqlErrorList list to http status code
            err.status = mysqlErrorList.includes(err.code) ? HttpStatusCodes[err.code] : err.status;
            console.log('ERROR UH OH')
            next(err);
            throw err;

            /*
              if (err instanceof Errors.BadRequest)
    return res.status(HttpStatus.BAD_REQUEST).send({ message: err.message }); // 400
  if (err instanceof Errors.Forbidden)
    return res.status(HttpStatus.FORBIDDEN).send({ message: err.message }); // 403
  if (err instanceof Errors.NotFound)
    return res.status(HttpStatus.NOT_FOUND).send({ message: err.message }); // 404
  if (err instanceof Errors.UnprocessableEntity)
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: err.message }); // 422
  console.log(err);
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: err.message });
  */

            throw err;
        });
    }
}

// like ENUM
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
});

module.exports = new DBConnection().query;
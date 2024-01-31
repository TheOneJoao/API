// https://stackify.com/node-js-error-handling/amp/ 
//throw new Error('failed database');

class NewError extends Error {
    constructor(message, statusCode) {
        super(message)

        this.name = "FAIL LOL"
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'

        Error.captureStackTrace(this, this.constructor);
    }
}

console.log(new Error('standard erorr'))
console.log(new NewError('this is new error', 501))

/*
function doF() {
    doY()
}

const a = () => {
    throw new Error('this is a cool test')
}

function init() {
    try {
        a()
    } catch(err) {
        console.log(err)
        //throw new Error('not so cool')
    }
}
init()*/
// error will appear like this:
// this.name: this.message
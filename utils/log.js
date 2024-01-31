/*
FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
*/
let DATE    = `\x1b[36m` + new Date() + `\x1b[0m`;
let ERROR   = `\x1b[31m` + '💥 ERROR! ' + `\x1b[0m`;

const i = (message) => console.log(DATE, message);
const e = (message) => console.log(ERROR + DATE + '\nDetails: ' + message);

module.exports = { i, e }
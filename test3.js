/*
const thispromise =
    new Promise(
        (resolve, reject) => {
            //resolve('i was resolved');
            reject('i was rejected');
        });

thispromise.then( (val1) => {
            console.log(val1);
            return 'yeah';
        }).catch((rejected) => {
            console.log(":(" + rejected);
            return 'yes i was';
        }).then( (val2) => {
            console.log(val2);
        }).catch( (valRejected) => {
            console.log(valRejected);
            return 3;
        }).finally( (uh) => {
            console.log("finally! " + uh);
        });

console.log(thispromise);
*/

const g = () => {
    setTimeout(()=>console.log("finished"), 500);
    return "finished!";
}
let f = async function() {
    console.log("with async (checkpoint A)")

    const i = await g();

    console.log("checkpoint B")

    return "returned value";
}
console.log(f())
console.log("checkpoint C");
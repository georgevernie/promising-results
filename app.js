let result = 0; // global variable which returns a result from the promise chains.
resolve();      //syncChain2 function call.

/* //! Old ES5 promise chaining
let syncChain1 = new Promise((resolve) => {resolve();}); 
syncChain1.then(() => {
    result = slowMath.add(2,6);
    return result;
    }).then((result) => {    
    console.log(result);    
    result = slowMath.multiply(result,2);    
    return result; 
}).then((result) => {
    console.log(result)
    result = slowMath.divide(result,4);
    return result;
}).then((result) => {
    console.log(result);
    result = slowMath.subtract(result,3);
    return result;
}).then((result) => {
    console.log(result);
    result = slowMath.add(result,98);
    return result;
}).then((result) => {
    console.log(result);
    result = slowMath.remainder(result,2);
    return result;
}).then((result) => {
    console.log(result);
    result = slowMath.multiply(result,50);
    return result;
}).then ((result) => {
    console.log(result);
    result = slowMath.remainder(result,40);
    return result;
}).then((result) => {
    console.log(result);
    result = slowMath.add(result,32);
    return result;
}).then((result) =>{
    console.log(`The final result is: ${result}`);
}).catch((err) => {
        console.log(`${err}`);
});   
*/

//? Current ES6 promise chaining
async function syncChain2(resolve) {
    return Promise.resolve();
  }
async function resolve() {
    try{
        result = await slowMath.add(2,6);
        console.log(result);
        result = await slowMath.multiply(result,2);
        console.log(result);
        result = await slowMath.divide(result,4);
        console.log(result);
        result = await slowMath.subtract(result,3);
        console.log(result);
        result = await slowMath.add(result,98);
        console.log(result);
        result = await slowMath.remainder(result,2);
        console.log(result);
        result = await slowMath.multiply(result,50);
        console.log(result);
        result = await slowMath.remainder(result,40);
        console.log(result);
        result = await slowMath.add(result,32);
        console.log(`The final result is: ${result}`);
    } catch (err){
        console.log(`${err}`);
    }
  }

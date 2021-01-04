const crypto = require('crypto')

//Example(s) that demonstrate how to execute asynchronous (promise-based) 
// code in serial or parallel 
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}

const p1 = getSecureRandoms(48)
const p2 = getSecureRandoms(40)
const p3 = getSecureRandoms(32)
const p4 = getSecureRandoms(24)

// serial execution
getSecureRandoms(16).then(data => console.log("serial 1: " + data))
getSecureRandoms(8).then(data => console.log("serial 2: " + data))

const promises = [p1,p2,p3,p4]
// parallel execution
Promise.all(promises).then(data => console.log("parallel: " + data.join(", ")))
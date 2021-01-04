const crypto = require('crypto')

function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}

getSecureRandoms(8).then(data => console.log(data))
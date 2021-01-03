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
getSecureRandoms(48)
.then(data => console.log(data))
.catch(err => console.err(err))
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}

d
const p1 = getSecureRandoms(48)
const p2 = getSecureRandoms(40)
const p3 = getSecureRandoms(32)
const p4 = getSecureRandoms(24)
const p5 = getSecureRandoms(16)
const p6 = getSecureRandoms(8)
const promises = [p1,p2,p3,p4,p5,p6]
// parallel execution
Promise.all(promises).then(data => console.log(data.join(", ")))
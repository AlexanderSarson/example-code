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
const testAsync = async () => {
  try{
    const p1 = getSecureRandoms(48);
    const p2 = getSecureRandoms(40);
    const p3 = getSecureRandoms(32);
    const p4 = getSecureRandoms(24);
    const p5 = getSecureRandoms(16);
    const p6 = getSecureRandoms(8);
    // serial execution
    const res1 = await p1;
    const res2 = await p2;
    const res3 = await p3;
    const res4 = await p4;
    const res5 = await p5;
    const res6 = await p6;

    // parallel execution
    const promises = [p1,p2,p3,p4,p5,p6]
    await Promise.all(promises).then(data => console.log("parallel: " + data.join(", ")));
    console.log("---------------------------------------------------------------------------------------------")
    console.log(res1, res2, res3, res4, res5, res6);
  } catch (err) {
    console.log(err)
  }
  
};

testAsync();
// Blocking 

const fs = require('fs'); 

const data = fs.readFileSync('/file.md'); // blocks here until file is read 

console.log(data); 

moreWork(); // will run after console.log 

 

// Non-blocking 

const fs = require('fs'); 

fs.readFile('/file.md', (err, data) => { 

  if (err) throw err; 

  console.log(data); 

}); 

moreWork(); // will run before console.log 
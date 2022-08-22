// OS Module.

const os = require('os'); 

// Info about user.
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds.
console.log(`The System Uptime is ${os.uptime()} seconds.`);

// Another Method.
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase('peter');

function handleName(name, cb) {
  const fullName = `${name} smith`
  cb(fullName)
  // Some more logic here.
}

handleName('peter', makeUppercase);

// Array methods, setTimeout, event listener etc.
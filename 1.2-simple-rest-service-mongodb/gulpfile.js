var fs = require('fs');

const gulpClass = './node_modules/@yggdrasil/devs/class.gulp.js';

try {
  if (fs.statSync(gulpClass)) {
    console.log('Using @yggdrasil gulpclass.');
    eval(fs.readFileSync(gulpClass).toString());
  }
} catch (error) {
  console.log(error);
}
var fs = require("fs")
   , test_async = process.argv[2];

// Asynchronous read
fs.readFile('test_async.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data.toString());
});
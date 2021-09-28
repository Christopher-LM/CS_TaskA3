const http = require('http')
const fs = require('fs')

// serve the html file
const server = http.createServer((req, res) => {
  let j = 2;
  for (let i = 0; i < 999; i++) {
    j = j * j;
  }
  console.log(j);
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('/var/www/index.html').pipe(res)
})

// listen on port 80
server.listen(80)


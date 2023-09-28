const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer( (request,response) => {
const path = request.url;
   if( (path == "") || (path == "/") ) {
       response.writeHead(200 , { "Content-Type" : "text/plain" })
       response.end("Home Page")
   } else if(path == "/about") {
       response.writeHead(200 , { "Content-Type" : "text/plain" })
       response.end("About Page")
   } else if(path == "/contact") {
       response.writeHead(200 , { "Content-Type" : "text/plain" })
       response.end("Contact Us")
   } else {
       response.writeHead(404 , { "Content-Type" : "text/plain" })
       response.end("Not Found")
   }
})


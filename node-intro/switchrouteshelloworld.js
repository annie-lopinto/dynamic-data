//Setup our server

//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
const http = require('http');
//Define the port the app will be access from (80,8080,8888 are usually default for domains)
//In our local environment we will use 3000,4000 or any number in between when another process is runnib on that port 
const port = process.env.PORT || 3000;
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

// Use the createServer() method to create an HTTP server:
const server = http.createServer( (request,response) => {
// Get the url 
const path = request.url;

switch(path) {
    case '':
    case '/':    
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Home Page") 
    break
case '/about':
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("About Page")
    break 
case '/contact':
    response.writeHead(200 , { "Content-Type" : "text/plain" })
    response.end("Contact Us") 
    break
default:
    response.writeHead(404 , { "Content-Type" : "Text/Plain" })
    response.end("Not Found")
    break
} 

})

//start the server 
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop" ))
const hostname = '127.0.0.1';
const port = 3000;

var http = require('http');
var fs = require("fs");
 
const server = http.createServer(function(request, response) {
	fs.readFile("index.html", function(err, data){
		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.write(data);
		response.end();
	});
}).listen(port);


//Templating example `${variable name}`
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require("http");

http.createServer(function(req, resp){
	resp.writeHead(200, {"Content-Type": "text/plain"});
	resp.write("aye");
	resp.end();
}).listen(8888);
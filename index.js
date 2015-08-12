var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.MYSQL_PORT_3306_TCP_ADDR,
  user     : 'root',
  password : 'austinishandsome',
  database : ''
});
var res;
connection.connect(function(err) {
  if (err) {
      res = "Connect to mysql failed.\nReason:" + err
      return;
    }
    res = "Connect to Mysql successfully!"
});
var port = 8080,
    http = require('http');

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(res);
  response.end();
}
http.createServer(onRequest).listen(port);
console.log("Server has started.");


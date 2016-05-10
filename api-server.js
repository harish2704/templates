var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router( __dirname + '/db.json' );
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 3000;

server.use(middlewares);
server.get( '/items*', function( req, res ){
  return res.sendFile( __dirname + '/public/index.html' );
});
server.use(router);
server.listen( port, function () {
  console.log('Server is running on http://localhost:' + port );
})

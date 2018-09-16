var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render("index.ejs");
});

app.get('*',function(request,response){
  response.send(404,"not found");
});


app.listen(app.get('port'), function() {
  console.log("Node server is running at localhost:" + app.get('port'));
});
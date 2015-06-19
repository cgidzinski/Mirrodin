var express = require('express');
var app = express();
var port = 3001;

app.set('port', process.env.PORT || port);
app.use(express.static(__dirname + "/public/"));
app.use('/public/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, function() {
    console.log('listening on port '+ port);
});
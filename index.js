const express = require('express'),
app = express();
port = process.env.PORT || 8080;

app.get('/', function(req, res){
	res.send('Hello');
});


app.listen(port, ()=>{
	console.log(`App listenting on http://localhost:${port}`);
});
var express = require('express');
var app = express();

app.get("/", (req, res) => {
	res.send("Test ");
});

app.get("/tecnologia", (req, res) => {
	res.send("Tecnologia");
});

//Porta de escuta do servidor
app.listen(3000, function() {
	console.log('Funcionando');
});
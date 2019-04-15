/*
 * Execução com docker
 * abrir o bash do container: docker-compose run node-6 sh
 * acessar o arquivo (após a entrada ao bash do container): cd $(pwd)/testes-basicos/secao-2/aula-8
 * rodar o script: node noticias-http.js 
 */

var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("<html><title>Teste com http</title><body>Teste de http com nodejs</body></html>");
});

server.listen(3001);
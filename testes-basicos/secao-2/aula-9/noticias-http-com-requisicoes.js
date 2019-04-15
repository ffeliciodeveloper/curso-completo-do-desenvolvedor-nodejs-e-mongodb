/*
 * Execução com docker
 * abrir o bash do container: docker-compose run node-6 sh
 * acessar o arquivo (após a entrada ao bash do container): cd $(pwd)/testes-basicos/secao-2/aula-9
 * rodar o script: node noticias-http-com-requisicoes.js
 * abrir o navegador e acessar as urls
 *  http://localhost:3001
 *  http://localhost:3001/tecnologia
 *  http://localhost:3001/teste  
 */

var http = require('http');

var server = http.createServer(function(req, res) {
    var urlTeste = req.url;

    console.log(urlTeste);

    if( urlTeste == '/tecnologia' ) {
        res.end("<html><body>Teste de http com nodejs - Tecnologia</body></html>");
    } else if( urlTeste == '/teste' ) {
        res.end("<html><body>Teste de http com nodejs - Teste</body></html>");
    } else {
        res.end("<html><body>Teste de http com nodejs</body></html>");
    }
    
});

server.listen(3001);
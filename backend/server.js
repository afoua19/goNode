const http = require('http');
//require est une commande qui permet d'importer
const server = http.createServer((req, res) => {
res.end('voilà la reponse du serveur')}); //createServer est une fonction qui permet de creer le server

//ecoute du server
server.listen(process.env.PORT ||3000);
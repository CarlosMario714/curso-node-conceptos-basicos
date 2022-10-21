const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("hola que mas hay pa hacer");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`el servidor esta escuchando en http://localhost:${puerto}...`);
});

const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("===> req (solicitud)");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.end("hola mundo");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`el servidor esta escuchando en http://localhost:${puerto}...`);
});

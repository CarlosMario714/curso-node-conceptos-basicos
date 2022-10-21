const http = require("http");

//se crea un servidor guardandolo en una constante, para crearlo se llama el metodo createserver de la variable http, se le pasan 2 parametros:req es request o solicitud, que va a contener la solicitud http del cliente y res es la respuesta http - esta funcion se ejecuta cada vez que se realice una solicitud al servidor
const servidor = http.createServer((req, res) => {
  //proceso
  console.log("solicitud nueva");
  //end termina el proceso y le envia la respuesta al cliente
  res.end("hola mundo");
});

const puerto = 3000;

//listen escucha las solicitudes del cliente, pero hay que especificar en que puerto va a escuchar por lo que eso se le pasa como primer argumento, y como segunto argumento  lo que se va a ejecutar cuando se escuche
servidor.listen(puerto, () => {
  console.log(`el servidor esta escuchando en http://localhost:${puerto}...`);
});

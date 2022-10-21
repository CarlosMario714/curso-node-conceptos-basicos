const http = require("http");
const { infoCursos } = require("./cursos.js");

const servidor = http.createServer((req, res) => {
  const { method } = req;

  //manejar los metodos que pida el cliente
  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      console.log(
        `el metodo  no puede ser manejado por el servidor: ${method}`
      );
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  console.log(res.statusCode);

  // "/" es el home de la pagina
  if (path === "/") {
    //configurar el header
    res.writeHead(200, { "content-type": "application/json" });
    //no hay necesidad de poner el codigo de estado en 200 por que esta se asigna por defecto, pero para otro codigo de estado si hay que configurarlo
    //res.statusCode = 200;
    return res.end(
      "bienvenidos a mi primer servidor y API creados con node.js"
    );
  } else if (path === "/cursos") {
    //res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos));
  } else if (path === "/cursos/programacion") {
    //res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.progranacion));
  }

  //cuando la ruta no existe
  res.statusCode = 404;
  res.end("el recurso solicitado no existe");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === "/cursos/programacion") {
    //modificar el cuerpo de la solicitud

    let cuerpo = "";

    //on es un evento que se llama cuando se recibe la informacion, luego se añade esa info a la variable cuerpo
    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
    });

    //cuando se termine el proceso de recibir la info y convertita a string
    req.on("end", () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      //convertir a un objeto de js
      cuerpo = JSON.parse(cuerpo);

      console.log(typeof cuerpo);

      console.log(cuerpo.titulo);

      return res.end(
        "el servidor recibio una solicitud post para /cursos/programacion"
      );
    });

    //res.statusCode = 200;
    //return res.end("el servidor recibio una solicitud post para /cursos/programacion");
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en el puerto ${PUERTO}`);
});

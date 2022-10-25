//fs/promises retorna metodos que retornan promesas
// const { writeFile } = require("fs/promises");

// //streams sirve para mandar un archivo muy grande por partes, para no enviarlo todo de una vez y que se quede cargando

// //crear un archivo grande
// const createBigFile = async () => {
//   await writeFile("./data/bigfile.txt", "hello world".repeat(1000000));
// };

// createBigFile();

//createreadstream maneja eventos
const { createReadStream } = require("fs");

//trae un objeto con manejadores de evento, dentro de este se le pueden especificar varias cosas
const stream = createReadStream("./data/bigfile.txt", {
  encoding: "utf-8",
});

//ocurre este event listener cuando se empiecen a enviar los datos - chunk le indica que lea el archivo por partes
stream.on("data", (chunk) => {
  console.log(chunk);
});

//el evento end se llama cuando se terminen de leer todo el archivo
stream.on("end", () => {
  console.log("ya termine de leer el archivo");
});

stream.on("error", () => {
  console.log(error);
});

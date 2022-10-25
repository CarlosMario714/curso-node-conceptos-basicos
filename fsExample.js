const fs = require("fs");

//todas las funciones de este modulo son asincronas, por lo que enciertos casos es mejor trabajar con sus versiones sincronas poniendole sync al final

//leer un archivo de forma sincrona, el primer argumento es la ruta del archivo y el segundo es la codificacion de caracteres para mostrarlo como string sino leeria un dato buffer
const first = fs.readFileSync("./data/first.txt", "utf-8");

//leer de forma asincrona
fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data);
});

console.log(first);

//crear un archivo - primer parametro el nombre del archivo a crear y el segundo es el contenido que este va a tener - si el archivo ya existe lo va a borrar y va a poner el nuevo
fs.writeFileSync("./data/third.txt", "este es un tercer archivo", {
  //esta opcion sifnifica append, es para añadir el contenido del segundo argumento al archivo
  flag: "a",
});

//

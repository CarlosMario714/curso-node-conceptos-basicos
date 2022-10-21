//retorna una promesa por que eso es lo que ocurre cuando se hace la peticion a una api, y por eso la promesa esta dentro de la funcion para que la funcion espere a que se cumpla la promesa poniendole a la funcion async, no lo tiene por que solo es ejemplo
function ordenarProducto(producto) {
  //resolve una funcion que se ejecuta cuando la promesa se cumple bien, reject es al contrario
  return new Promise((resolve, reject) => {
    console.log(`ordenando: ${producto} de freecodecamp`);
    //set timeout para simular la espera de la respuesta
    setTimeout(() => {
      if (producto === "taza") {
        resolve("ordenando una taza con el logo de fcc");
      } else {
        reject("este producto no esta disponible");
      }
    }, 2000);
  });
}

//retorna una promesa igual que la anterior
function procesarPedido(respuesta) {
  //reject no se usa, en este caso no es necesario
  return new Promise((resolve) => {
    console.log("procesando respuesta...");
    console.log(`la respuesta fue: ${respuesta}`);
    //simula la espera de la respuesta de la promesa
    setTimeout(() => {
      resolve("gracias por tu compra.");
    }, 4000);
  });
}

//no se puede procesar el pedido antes de ordenar el producto, para hacer las peticiones en orden toca encadenar las promesas:

//esta comentado por que es mejor hacerlo con async y await

// ordenarProducto("taza")
//   //then se ejecuta cuando se complete la promesa asincrona y pasa la respuesta de la promesa al primer parametro
//   .then((respuesta) => {
//     console.log("respuesta recibida");
//     console.log(respuesta);
//     //despues de todo esoto se llama al siquiente proceso, pero esto devuelte una promesa
//     return procesarPedido(respuesta);
//   })
//   //respuesta procesada es la respuesta de la ultima promsa que se ha hecho que es la de procesar pedido
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//con async y await se puede hacer esto pero de forma mas concisa y se escribe el codigo como si fuera sincrono

//todas las funciones con async retornan una promesa
async function realizarPedido(producto) {
  //dentro de try se pone todo el codigo que se quiere ejecutar y que puede dar algun error
  try {
    //await sirve para indicarle al programa que espere a que la promesa se cumpla o se rechace, y hasta que alguna de las 2 ocurra no continua ejecutando el codigo de la funcion, await debe ir dentro de una funcion asincrona
    const respuesta = await ordenarProducto(producto);
    console.log("respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    //catch atrapa el error
    console.log(error);
  }
}

realizarPedido("taza");

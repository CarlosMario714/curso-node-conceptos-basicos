const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on escucha al evento response, el nombre de ese evento se lo pone uno
customEmitter.on("response", (data) => {
  console.log("received");
  console.log(data);
});

//emite un evento, como primer parametro el nombre del evento y el segundo son los datos que uno quiere transmitir en el evento
customEmitter.emit("response", "hello world");

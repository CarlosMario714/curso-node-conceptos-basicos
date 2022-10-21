function saludar(nombre) {
  return `hola ${nombre}`;
}

function saludarHolaMundo() {
  return "hola mundo";
}

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
};

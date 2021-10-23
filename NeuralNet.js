//importar brain.js
const brain = require('brain.js').brain 
//contruccion de red neuonral
const net = new brain.NeuralNetwork()
//entrenar red neuronal
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ]);

var output = net.run([0, 1]);
//sera 1 cuando el output 
console.log(output);
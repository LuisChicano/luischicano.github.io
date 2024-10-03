const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index', // Cambia esto según el archivo de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  plugins: [
    new Dotenv(),
  ],
  mode: 'development', // O 'production' según necesites
};

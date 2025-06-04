const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Mi Proyecto Node',
    description: 'Documentación automática generada con Swagger Autogen',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/UsuarioRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js');
});

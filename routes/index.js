const comidasRouter = require('./comidas.router')
const bebidasRouter = require('./bebidas.router')

function routerApi(app) {
  app.use('/comidas', comidasRouter)
  app.use('/bebidas', bebidasRouter)
}

module.exports = routerApi
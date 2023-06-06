const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

routerApi(app)


// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params
//   res.json({
//     categoryId,
//     productId
//   })
// })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
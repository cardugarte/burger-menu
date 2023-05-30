const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'alvorguesa',
      price: 1000
    },
    {
      name: 'arepa',
      price: 800
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    name: 'product 2',
    price: 2000,
    id
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
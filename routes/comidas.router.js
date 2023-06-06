const express = require('express')
//faker
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const food = []
  const { size } = req.query
  const limit = size || 10
  for(let index = 0; index < limit; index++) {
    food.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
  res.json(food)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    name: 'product 2',
    price: 2000,
    id
  })
})

router.get('/filter', (req, res) => {
  res.send('soy un filter')
})

module.exports = router
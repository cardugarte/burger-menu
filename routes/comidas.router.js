const express = require('express')
const ComidasService = require('../services/comidas.service')

const router = express.Router()
const service = new ComidasService()

router.get('/', (req, res) => {
  const food = service.find()
  res.json(food)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.get('/filter', (req, res) => {
  res.send('soy un filter')
})

module.exports = router
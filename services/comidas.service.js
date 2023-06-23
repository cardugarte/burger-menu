//faker
const { faker } = require('@faker-js/faker')


class ComidasService {

  constructor() {
    this.food = []
    this.generate()
  }

  generate() {
    const limit = 100
    for(let index = 0; index < limit; index++) {
      this.food.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  }

  create() {
    //
  }
  
  find() {
    return this.food
  }

  findOne(id) {
    return this.food.find(item => item.id === id)
  }

  update() {
    //
  }

  delete() {
    //
  }

}

module.exports = ComidasService
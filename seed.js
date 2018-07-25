const {db} = require('./server/db')
const Product = require('./server/db/models/product')

const grasses = [
  {
    name: 'Grasp Grass',
    price: 2.5,
    imageUrl:
      'https://previews.123rf.com/images/nataliafedorenko/nataliafedorenko0905/nataliafedorenko090500053/4867643-a-male-hand-with-its-fingers-picking-up-the-grass-.jpg'
  },
  {
    name: 'Dead grass',
    prie: 1,
    imageUrl:
      'https://forums.unrealengine.com/filedata/fetch?id=1211751&d=1487743042'
  }
]

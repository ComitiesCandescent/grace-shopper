const {db} = require('./server/db')
const Product = require('./server/db/models/product')

const grasses = [
  {
    name: 'Grasp Grass',
    price: 2.5,
    imageUrl:
      'https://previews.123rf.com/images/nataliafedorenko/nataliafedorenko0905/nataliafedorenko090500053/4867643-a-male-hand-with-its-fingers-picking-up-the-grass-.jpg',
    description: 'Grass that grabs you'
  },
  {
    name: 'Dead grass',
    prie: 1,
    imageUrl:
      'https://forums.unrealengine.com/filedata/fetch?id=1211751&d=1487743042',
    description:
      'Tired of smelling the dew. Well you can buy dead grass now and just smell burnt plants'
  },
  {
    name: 'Dead Grass on fire',
    price: 0.5,
    imageUrl:
      'http://mediad.publicbroadcasting.net/p/wnmu/files/styles/medium/public/201805/grass_fire.jpg',
    description:
      'Ok if you got tired of smelling grass and dead grass, how about now you just smell grass thats on fire. Must be 18 or older to purchase.'
  }
]
const seed = () => Promise.all(grasses.map(grass => Product.create(grass)))

const main = () => {
  console.log('Syncing db...')
  db
    .sync({force: true})
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()

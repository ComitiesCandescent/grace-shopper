const db = require(`../server/db`)
const {Product, User, Review, Cart} = require(`../server/db/models`)

const grasses = [
  {
    name: `Grasp Grass`,
    price: 2.5,
    imageUrl: `https://previews.123rf.com/images/nataliafedorenko/nataliafedorenko0905/nataliafedorenko090500053/4867643-a-male-hand-with-its-fingers-picking-up-the-grass-.jpg`,
    description: `Grass that grabs you`
  },
  {
    name: `Dead grass`,
    price: 1,
    imageUrl: `https://forums.unrealengine.com/filedata/fetch?id=1211751&d=1487743042`,
    description: `Tired of smelling the dew. Well you can buy dead grass now and just smell burnt plants`
  },
  {
    name: `Dead Grass on fire`,
    price: 0.5,
    imageUrl: `http://mediad.publicbroadcasting.net/p/wnmu/files/styles/medium/public/201805/grass_fire.jpg`,
    description: `Ok if you got tired of smelling grass and dead grass, how about now you just smell grass thats on fire. Must be 18 or older to purchase.`
  }
]

const users = [
  {
    name: `Kenneth Lai`,
    street: `hood`,
    city: `Rack City`,
    state: `FL`,
    zipcode: 51134,
    email: `knthslai@gmail.com`
  },
  {
    name: `Ali Aftab`,
    street: `hooder`,
    city: `Hooder City`,
    state: `MI`,
    zipcode: 58008,
    email: `itisaftab@geocities.com`
  }
]

const reviews = [
  {
    title: `G is for Grass`,
    body: `H is for happyness. - Will Smith`,
    userId: 1,
    productId: 2
  },
  {
    title: `My house is on fire ...`,
    body: `I should not have boughten "Dead Grass on fire"...`,
    userId: 2,
    productId: 3
  }
]

const carts = [
  {
    userId: 1
  },
  {
    userId: 2
  }
]

// const seed = () => Promise.all(users.map(user => User.create(user))).then(() => Promise.all(grasses.map(grass => Product.create(grass)))).then(() => Promise.all(reviews.map(review => Review.create(review))))

async function seed() {
  await db.sync({force: true})
  const usersP = await Promise.all(users.map(user => User.create(user)))
  const grassesP = await Promise.all(
    grasses.map(grass => Product.create(grass))
  )
  const reviewsP = await Promise.all(
    reviews.map(review => Review.create(review))
  )
  const cartsP = await Promise.all(carts.map(cart => Cart.create(cart)))
}

const main = () => {
  console.log(`Syncing DB...`)
  db
    .sync({force: true})
    .then(() => {
      console.log(`DB synced`)
    })
    .then(() => {
      console.log(`Seeding DB...`)
      return seed()
    })
    .catch(err => {
      console.log(`Error while seeding`)
      console.log(err.stack)
    })
    .then(() => {
      console.log(`Seeded successfully`)
      db.close()
      return null
    })
}
if (module === require.main) {
  main()
}

module.exports = seed

const db = require(`../server/db`)
const {Product, User, Review, Cart} = require(`../server/db/models`)

const grasses = [
  {
    name: `Grasp grass`,
    price: 2.5,
    imageUrl: `https://previews.123rf.com/images/nataliafedorenko/nataliafedorenko0905/nataliafedorenko090500053/4867643-a-male-hand-with-its-fingers-picking-up-the-grass-.jpg`,
    description: `Grass that grabs you back!`
  },
  {
    name: `Rainbow grass`,
    price: 10,
    imageUrl: `https://previews.123rf.com/images/gongzstudio/gongzstudio1208/gongzstudio120800272/14918360-rainbow-grass.jpg`,
    description: `Probably not great for the environment, but at least now you have all of the colors you could possibly imagine.`
  },
  {
    name: `Dead grass`,
    price: 1,
    imageUrl: `https://forums.unrealengine.com/filedata/fetch?id=1211751&d=1487743042`,
    description: `Tired of smelling the dew? Well, you can buy dead grass now and just smell burnt plants!`
  },
  {
    name: `Dead grass on fire`,
    price: 0.5,
    imageUrl: `http://mediad.publicbroadcasting.net/p/wnmu/files/styles/medium/public/201805/grass_fire.jpg`,
    description: `Okay if you got tired of smelling grass and dead grass, how about now you just smell grass that's on fire? *Must be 18 or older to purchase.*`
  },
  {
    name: `Blue grass`,
    price: 10,
    imageUrl: `https://www.nowplayingnashville.com/wp-content/uploads/sites/www.nowplayingnashville.com/images/2016/04/back-80.jpg`,
    description: `Bluegrass music is a form of American roots music named after Kentucky mandolin player and songwriter Bill Monroe's band, the Bluegrass Boys 1939-96, and furthered by musicians who played with him.`
  },
  {
    name: `Angelina Jolie grass`,
    price: 5.7,
    imageUrl: `http://funnypicture.org/wallpaper/2015/03/funny-cute-celebrities-7-background.jpg`,
    description: `Angelina Jolie is an American actress, filmmaker, and humanitarian. She has received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards, and has been cited as Hollywood's highest-paid actress.`
  },
  {
    name: `Kentucky bluegrass`,
    price: 3.6,
    imageUrl: `https://www.turfmagazine.com/wp-content/uploads/2017/06/Kentucky-Bluegrass_iStock.jpg`,
    description: `Poa pratensis, commonly known as Kentucky bluegrass, smooth meadow-grass, or common meadow-grass, is a perennial species of grass native to practically all of Europe, northern Asia and the mountains of Algeria and Morocco.`
  },
  {
    name: `Wheatgrass`,
    price: 7.1,
    imageUrl: `https://cdn1.medicalnewstoday.com/content/images/hero/320/320210/320210_1100.jpg`,
    description: `Wheatgrass is the freshly sprouted first leaves of the common wheat plant, used as a food, drink, or dietary supplement. Wheatgrass is served freeze dried or fresh, and so it differs from wheat malt, which is convectively dried.`
  },
  {
    name: `Bermuda grass`,
    price: 4.91,
    imageUrl: `https://www.bamertseed.com/wp-content/uploads/2017/07/Bermuda-Grass-Common-01.jpg?x44435`,
    description: `Cynodon dactylon, also known as Vilfa stellata, Bermuda grass, Dhoob, dūrvā grass, dubo, dog's tooth grass, Bahama grass, devil's grass, couch grass, Indian doab, arugampul, grama, wiregrass and scutch grass, is a grass that originated in Africa.`
  },
  {
    name: `Grass with dog`,
    price: 1000,
    imageUrl: `https://iheartdogs.com/wp-content/uploads/2014/03/shutterstock_160880213.jpg`,
    description: `Not everyone loves grass, but who doesn't love dogs?`
  },
  {
    name: `The Grass Roots`,
    price: 8.37,
    imageUrl: `https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Grass_Roots.png`,
    description: `The Grass Roots are an American rock band that charted frequently between 1966 and 1975. The band was originally the creation of Lou Adler and songwriting duo P. F. Sloan and Steve Barri.`
  },
  {
    name: `Cow-chewed grass`,
    price: 2.7,
    imageUrl: `https://fateclick.com/images/article/20170302141711055.jpg`,
    description: `Straight from the mouth of the cow.`
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
    stars: 4,
    userId: 1,
    productId: 2
  },
  {
    title: `My house is on fire ...`,
    body: `I should not have boughten "Dead Grass on fire"...`,
    stars: 1,
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

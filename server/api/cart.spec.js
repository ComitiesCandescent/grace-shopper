// /* global describe beforeEach it */

// const {expect} = require(`chai`)
// const request = require(`supertest`)
// const db = require(`../db`)
// const app = require(`../index`)
// const Cart = db.model(`cart`)

// describe(`Product routes`, () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe(`/api/cart/`, () => {
//     beforeEach(() => {
//       return Cart.create({
//         'Dead grass': {
//           name: `Dead grass on fire`,
//           price: 0.5,
//           imageUrl: `http://mediad.publicbroadcasting.net/p/wnmu/files/styles/medium/public/201805/grass_fire.jpg`,
//           description: `Okay if you got tired of smelling grass and dead grass, how about now you just smell grass that's on fire? *Must be 18 or older to purchase.*`
//         }
//       })
//     })

//     it(`GET /api/cart`, async () => {
//       const res = await request(app)
//         .get(`/api/cart`)
//         .expect(200)
//       console.log(res.body)
//       expect(res.body).to.be.an(`array`)
//       expect(res.body[0].description).to.be.equal(
//         `Grass that you test if you are passing your specs`
//       )
//     })
//   }) // end describe('/api/cart')
// }) // end describe('Product routes')

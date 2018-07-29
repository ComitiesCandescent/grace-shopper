// /* global describe beforeEach it */

// const { expect } = require(`chai`)
// const request = require(`supertest`)
// const db = require(`../db`)
// const app = require(`../index`)
// const Product = db.model(`product`)

// describe(`Product routes`, () => {
//   beforeEach(() => {
//     return db.sync({ force: true })
//   })

//   describe(`/api/products/`, () => {
//     const codysEmail = `cody@puppybook.com`

//     beforeEach(() => {
//       return User.create({
//         name: `Kenneth Lai`,
//         street: `hood`,
//         city: `Rack City`,
//         state: `Rack State`,
//         zipcode: 51134,
//         email: `knthslai@gmail.com`,
//       })
//     })

//     it(`GET /api/users`, async () => {
//       const res = await request(app)
//         .get(`/api/users`)
//         .expect(200)

//       expect(res.body).to.be.an(`array`)
//       expect(res.body[0].email).to.be.equal(`knthslai@gmail.com`)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')

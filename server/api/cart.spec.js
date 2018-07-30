/* global describe beforeEach it */

const {expect} = require(`chai`)
const request = require(`supertest`)
const db = require(`../db`)
const app = require(`../index`)
const Cart = db.model(`cart`)

describe(`Product routes`, () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe(`/api/products/`, () => {
    beforeEach(() => {
      return Cart.create({
        name: `Test Grass`,
        price: 1,
        imageUrl: ``,
        description: `Grass that you test if you are passing your specs`
      })
    })

    it(`GET /api/producs`, async () => {
      const res = await request(app)
        .get(`/api/products`)
        .expect(200)

      expect(res.body).to.be.an(`array`)
      expect(res.body[0].description).to.be.equal(
        `Grass that you test if you are passing your specs`
      )
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')

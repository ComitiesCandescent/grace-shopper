/* global describe beforeEach it */

const {expect} = require(`chai`)
const db = require(`../index`)
const Product = db.model(`product`)

describe(`Product model`, () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe(`beforeCreate`, () => {
    describe(`if no image is given, our default should work`, () => {
      beforeEach(async () => {
        newProduct = await Product.create({
          name: `Test Grass`,
          price: 1,
          imageUrl: ``,
          description: `Grass that you test if you are passing your specs`
        })
      })

      it(`default image works`, () => {
        expect(newProduct.imageUrl).to.be.equal(
          'https://previews.123rf.com/images/digitalgenetics/digitalgenetics1112/digitalgenetics111200025/11350545-3d-colorful-grass-on-white-background.jpg'
        )
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')

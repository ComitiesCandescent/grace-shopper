/* global describe beforeEach it */

const {expect} = require(`chai`)
const db = require(`../index`)
const User = db.model(`user`)

describe(`User model`, () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe(`instanceMethods`, () => {
    describe(`correctPassword`, () => {
      beforeEach(async () => {
        newUser = await User.create({
          name: `Kenneth Lai`,
          street: `hood`,
          city: `Rack City`,
          state: `Rack State`,
          zipcode: 51134,
          email: `knthslai@gmail.com`,
          password: `bones`
        })
      })

      it(`returns true if the password is correct`, () => {
        expect(newUser.correctPassword(`bones`)).to.be.equal(true)
      })

      it(`returns false if the password is incorrect`, () => {
        expect(newUser.correctPassword(`bonez`)).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')

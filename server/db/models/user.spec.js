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
  describe('Validations', () => {
    it('requires name', async () => {
      const newUser = User.build()

      try {
        await newUser.validate()
        throw Error(
          'validation was successful but should have failed without `name`'
        )
      } catch (err) {
        expect(err.message).to.contain('name cannot be null')
      }
    })

    it('requires name to not be an empty string', async () => {
      const newUser = User.build({
        name: ''
      })

      try {
        await newUser.validate()
        throw Error(
          'validation was successful but should have failed if name is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    })
  })
})

// }) // end describe('User model')

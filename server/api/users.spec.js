/* global describe beforeEach it */

const {expect} = require(`chai`)
const request = require(`supertest`)
const db = require(`../db`)
const app = require(`../index`)
const User = db.model(`user`)

describe(`User routes`, () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe(`/api/users/`, () => {
    beforeEach(() => {
      return User.create({
        name: `Kenneth Lai`,
        street: `hood`,
        city: `Rack City`,
        state: `Rack State`,
        zipcode: 51134,
        email: `knthslai@gmail.com`
      })
    })

    it(`GET /api/users`, async () => {
      const res = await request(app)
        .get(`/api/users`)
        .expect(200)

      expect(res.body).to.be.an(`array`)
      expect(res.body[0].email).to.be.equal(`knthslai@gmail.com`)
    })
    describe('GET /api/users/:id', () => {
      it('serves up a single User by its id', async () => {
        const res = await request(app)
          .get('/api/users/1')
          .expect(200)
        expect(res.body.zipcode).to.equal(51134)
      })
    })
    describe('POST /users/ route', () => {
      it('should create a user', async () => {
        const res = await request(app)
          .post('/api/users')
          .send({
            name: `Kenneth Lai`,
            street: `hood`,
            city: `Rack City`,
            state: `Rack State`,
            zipcode: 51134,
            email: `knthslai1@gmail.com`,
            password: `bones`
          })
          .expect(201)
        const newStudent = await User.findById(res.body.id)
        expect(newStudent.name).to.be.equal('Kenneth Lai')
      })
    })
  })
}) // end describe('User routes')

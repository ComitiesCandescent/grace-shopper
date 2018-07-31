const Sequelize = require(`sequelize`)
const db = require(`../db`)

const Promo = db.define(`promo`, {
  name: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.FLOAT
  },
  used: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})
Promo.useCoupon = async function(name) {
  const onePromo = await Promo.findOne({
    where: {
      name: name
    }
  })
  if (!onePromo || onePromo.used === true) {
    return 'Promo cannot be found or has been used already'
  }
  onePromo.used = true
  await onePromo.save()
  return onePromo.amount
}
module.exports = Promo

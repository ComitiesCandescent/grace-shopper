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
Promo.useCoupon = async function(name, total) {
  const onePromo = await Promo.findOne({
    where: {
      name: name
    }
  })
  if (!onePromo || onePromo.used === true) {
    return 'Promo cannot be found or has been used already'
  } else if (onePromo.amount > total) {
    return `You must do a purchase of atleast ${
      onePromo.amount
    } to use this deal!`
  }
  onePromo.used = true
  await onePromo.save()
  return onePromo.amount
}
module.exports = Promo

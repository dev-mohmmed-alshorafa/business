const { sequelize,Main,About ,Services,Blog,Contact} = require('./index')
const environment = require('../config/enviroment')
const data = require('./seeds.json')

const buildDB = async () => {
  await sequelize.sync({ force: true })
  await Main.bulkCreate(data.Main);
  await About.bulkCreate(data.About);
  await Services.bulkCreate(data.Services);
  await Blog.bulkCreate(data.Blog);
  await Contact.bulkCreate(data.Contact);
  // await Product.bulkCreate(data.Animal.reverse());
  // await Cart.bulkCreate(data.Cart);
}

if (environment.nodeEnv !== 'test') {
  buildDB()
}

module.exports = buildDB

const { Storage } = require('megajs')
module.exoprts = new Storage({
  email: process.env.MEGA_CONFIG_EMAIL,
  password: process.env.MEGA_CONFIG_PASSWORD,
  userAgent: 'ExampleClient/1.0'
})


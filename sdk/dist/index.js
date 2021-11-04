
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./fswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./fswap-sdk.cjs.development.js')
}

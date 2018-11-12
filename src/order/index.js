const rulesOrder = require('./rulesOrder')
const propertiesOrder = require('./propertiesOrder')

module.exports = {
  'order/order': [rulesOrder, { unspecified: 'bottom' }],
  'order/properties-order': [propertiesOrder, { unspecified: 'bottomAlphabetical' }]
}

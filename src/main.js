const _ = require('lodash')

function component () {
  var element = document.createElement('p')
  element.innerHTML = _.join(['Hello', 'from', 'Webpack'], ' ')
  return element
}

document.body.appendChild(component())

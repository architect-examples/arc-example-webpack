function component () {
  var element = document.createElement('p')
  element.innerHTML = 'Hello Webpack'
  return element
}

document.body.appendChild(component())

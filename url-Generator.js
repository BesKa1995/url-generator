function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}


const comUrl = urlGenerator('com')

const google = comUrl('google')
console.log(google)
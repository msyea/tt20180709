
const { listPrimes } = require('./utils')

const tokenize = (input) => {
  // remove apostrophes and hyphens as they're part of the word
  let output = input.replace(/['-]/g, '')
  // turn anything that isn't a word into a single space
  output = output.replace(/\W+/g, ' ')
  // split by whitespace
  return output.trim().toLowerCase().split(' ')
}

exports.concordance = (input) => {
  const count = {}
  const list = []
  const words = tokenize(input)
  let maxCount = 0
  words.forEach((word) => {
    if (list.indexOf(word) === -1) {
      count[word] = 1
      list.push(word)
    } else {
      // eslint-disable-next-line no-plusplus
      count[word]++
    }
    maxCount = count[word] > maxCount ? count[word] : maxCount
  })
  // sort the list
  list.sort()
  // list the min number of primes as finding them is expensive
  const primesNumbers = listPrimes(maxCount)
  const primes = []
  list.forEach((word) => {
    // if count of word is a prime, add to primes
    if (primesNumbers.indexOf(count[word]) !== -1) {
      primes.push(word)
    }
  })

  return {
    count,
    list,
    primes
  }
}

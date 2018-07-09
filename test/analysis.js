
require('should')

const { concordance } = require('../analysis')

const input = `They were not railway children to begin with. I don't suppose they had
ever thought about railways except as a means of getting to Maskelyne
and Cook's, the Pantomime, Zoological Gardens, and Madame Tussaud's.`

describe('text analysis', () => {
  it('should output the individual words that appear in the book', () => {
    const { list } = concordance(input)
    list.should.be.Array()
    list.should.containEql('they')
    list.should.containEql('were')
    list.should.containEql('not')
    list.should.containEql('railway')
    list.should.containEql('zoological')
    list.should.containEql('gardens')
  })
  it('should list how many times that a word appears', () => {
    const { count } = concordance(input)
    count.should.be.Object()
    count.they.should.equal(2)
    count.to.should.equal(2)
    count.railway.should.equal(1)
    count.children.should.equal(1)
    count.zoological.should.equal(1)
    count.gardens.should.equal(1)
  })
  it('should identify if the occurances of a word is a prime number', () => {
    // low primes: 2, 3, 5, 7, 11
    const { primes } = concordance(input)
    primes.should.be.Array()
    primes.should.containEql('they')
    primes.should.containEql('to')
    primes.should.containEql('and')
    primes.should.not.containEql('railway')
    primes.should.not.containEql('children')
  })
})

const { listPrimes } = require('../utils')
describe('utilities', () => {
  it('should return prime numbers between 1 and 12', () => {
    const primes = listPrimes(12)
    primes.should.be.Array()
    primes.should.containEql(2)
    primes.should.containEql(3)
    primes.should.containEql(5)
    primes.should.containEql(7)
    primes.should.containEql(11)
    primes.should.not.containEql(1)
    primes.should.not.containEql(4)
    primes.should.not.containEql(6)
    primes.should.not.containEql(8)
    primes.should.not.containEql(10)
    primes.should.not.containEql(12)
  })
})
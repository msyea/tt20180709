
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
  it('should list how many times that a word appears')
  it('should identify if the occurances of a word is a prime number')
})
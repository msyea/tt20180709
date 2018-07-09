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
  words.forEach((word) => {
    if (list.indexOf(word) === -1) {
      count[word] = 1
      list.push(word)
    } else {
      // eslint-disable-next-line no-plusplus
      count[word]++
    }
  })
  // sort the list
  list.sort()
  return {
    count,
    list
  }
}

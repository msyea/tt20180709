const fetch = require('node-fetch')
const { concordance } = require('./analysis')
const Table = require('cli-table')
const colors = require('colors');

(async () => {
  const url = 'http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt'
  const res = await fetch(url)

  const text = await res.text()

  const { list, count, primes } = concordance(text)

  const table = new Table({
    head: ['Word', 'Count', 'Word', 'Count', 'Word', 'Count']
  })

  let row = []
  list.forEach((word) => {
    if (row.length === 6) {
      table.push(row)
      row = []
    }
    if (primes.indexOf(word) !== -1) {
      row.push(colors.red(word), colors.red(count[word]))
    } else {
      row.push(word, count[word])
    }
  })
  table.push(row)

  console.log(`
Below is a table of unqiue words and their count from ${url}. 
${colors.red(`Prime numbers are highlighted in red.`)}
`)
  console.log(table.toString())

})()
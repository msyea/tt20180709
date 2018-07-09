exports.listPrimes = (max) => {
  const primes = []
  // nb. 1 is not a prime
  for (let i = 2; i <= max; i++) {
    let j
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break
      }
    }
    // if for loop completed, no divisor found
    if (j === i) {
      primes.push(i)
    }
  }
  return primes
}

maiorOuIgual = (a, b) => {
  if (typeof a != typeof b) return false
  return a >= b
}

console.log(maiorOuIgual(0, 1))

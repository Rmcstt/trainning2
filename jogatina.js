jogatina = x => {
  sorte = Math.floor(Math.random() * (11 - 1) + 1)
  return x === sorte
    ? console.log(`parabens o numero é ${sorte}`)
    : console.log(`que pena, o numero é ${sorte}`)
}
jogatina(7)

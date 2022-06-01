//estudar mais "entryes" e "fromEntryes"

inverter = objeto => {
  const paresDeChaveValorInvertidos = Object.entries(objeto).map(
    parChaveValor => parChaveValor.reverse()
  )
  return console.log(Object.fromEntries(paresDeChaveValorInvertidos))
}

inverter({ 1: 'a', 2: 'b', 3: 'c' }) /// { a: '1', b: '2', c: '3' }

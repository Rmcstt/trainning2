menorÉ = numeros => {
  return console.log(Math.min(...numeros))
}

menorÉ([2, 3, 4, 5, 6, 7, 8]) ///2

menorÉ2 = numeros2 => {
  return console.log(
    numeros2.reduce(
      (
        acumulador,
        atual //nesse caso aqui o reduce muda o contexto de acumulador!!!
      ) => (acumulador < atual ? acumulador : atual)
    )
  )
}

menorÉ2([2, 3, 4, 5, 6, 7, 8]) ///2

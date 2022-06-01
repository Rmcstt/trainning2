segundoMaior = numeros => {
  const maiorNumero = Math.max(...numeros)
  numeros = numeros.filter(numero => numero != maiorNumero)
  const segundoMaior = Math.max(...numeros)
  return console.log(segundoMaior)
}

segundoMaior([1, 2, 3, 4, 5, 6, 7, 8, 9])

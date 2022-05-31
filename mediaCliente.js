mediaCliente = numCLiente => {
  const total = numCLiente.reduce((acumulador, atual) => acumulador + atual)
  const totalNumeros = numCLiente.length
  return console.log(Math.floor(total / totalNumeros))
}

mediaCliente([4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 10, 10, 10, 10])

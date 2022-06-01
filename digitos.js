//essa função pega uma array e so vai mostrar os numeros cujo a quantitade foi espessificada.

Digitos = (numeros, quantidadeDesejada) => {
  return console.log(
    numeros.filter(numero => {
      const quantidadeDeDigitos = String(numero).length
      return quantidadeDeDigitos === quantidadeDesejada
    })
  )
}
Digitos([1, 12, 123, 1234, 12345], 4) ///[ 1234 ]

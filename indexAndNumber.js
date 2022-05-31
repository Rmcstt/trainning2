function indexAndNumber(numeros) {
  return numeros.filter((numero, index) => {
    //o primeiro parametro do filter é o elemento, o segundo seria o index!! o terceiro seria o proprio array
    const numeroPar = numero % 2 === 0
    const indicePar = index % 2 === 0
    return numeroPar && indicePar
  })
}

console.log(indexAndNumber([10, 70, 22, 43, 6, 9, 56, 76]))

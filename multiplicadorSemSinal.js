mult = (numb, vezes) => {
  if (numb === 0 || vezes === 0) return 0
  return vezes === 1 ? numb : numb + mult(numb, vezes - 1)
}

console.log(mult(5, 9)) ///45

//uma pequena função, mas de tamanha complexidade!!!

//peguei um raciocinio de uma funçåo posterior e eis aqui uma funçåo de multiplicacåo sem o operador "*",
//pode ate ser maior mas elaborei sozinho
meuMult = (numero, vezes) => {
  if (vezes === 0 || numero === 0) {
    return 0
  } else {
    return Array(vezes)
      .fill(numero)
      .reduce(function (acumulador, atual) {
        return acumulador + atual
      })
  }
}

console.log(meuMult(9, 2)) ///18

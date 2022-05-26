symbol = quantidade => {
  let resultado = ''
  for (let i = 0; i < quantidade; i++) resultado += '+'
  return resultado
}

console.log(symbol(9))

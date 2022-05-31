contar = (caracterBusca, frase) => {
  return console.log(
    [...frase].filter(caractere => caractere === caracterBusca).length
  )
}

contar(
  'r',
  'Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas'
)

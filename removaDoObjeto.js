remover = (objeto, atributo) => {
  const copia = { ...objeto } //faz uma copia do objeto
  delete copia[atributo]
  return copia
}
carro = { nome: 'civic', motor: 2, cor: 'prata' }

console.log(remover(carro, 'cor'))

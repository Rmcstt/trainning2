objetoParaArray = objeto => {
  return Object.entries(objeto)
}
console.log(objetoParaArray({ nome: 'luna', idade: 1 })) ///[ [ 'nome', 'luna' ], [ 'idade', 1 ] ]

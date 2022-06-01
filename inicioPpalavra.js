buscarSemelhantes = (inicio, palavras) => {
  return console.log(palavras.filter(palavra => palavra.includes(inicio)))
}
buscarSemelhantes('pro', ['programação', 'mobile', 'profissional']) ///[ 'programação', 'profissional' ]

minha = ['JS', 1, , 2, '3', '4', '5', 'Web', '2.0', 20]

filtrar = (a, b) => {
  return console.log(a.filter(item => typeof item === b))
}

//o mais dificil de aprender acaba sendo a abstração!!!

filtrar(minha, 'string') ///[ 'JS', '3', '4', '5', 'Web', '2.0' ]

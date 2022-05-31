bissexto = ano => {
  if (ano <= 0) {
    console.log('invalido')
  } else if (ano % 100 == 0) {
    console.log('nao')
  } else if (ano % 400 == 0) {
    console.log('sim')
  } else if (ano % 4 == 0) {
    console.log('sim')
  } else {
    console.log('nao')
  }
}
bissexto(2022) /// não

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
  return new Date(ano, 1, 29).getDate() === 29
    ? console.log('bissexto')
    : console.log('não bissexto')
}

checarAnoBissexto(2022) ///não bissexto

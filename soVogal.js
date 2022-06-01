semVogal = frase => {
  return console.log(frase.replace(/[aeiou]/gi, ''))
  /*replace serve para substituir, sendo que "/   /g" é para mais de uma string e "/    /gi" mais de uma string e sem distinguir maiuscula de minuscula*/
}

semVogal('renato mota costa') ///rnt mt cst

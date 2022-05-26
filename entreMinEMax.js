acerto = (a, b, c, d = false) => {
  if (a > b && a < c) {
    console.log('true')
  } else if ((a == b || a == c, d == true)) {
    console.log('true')
  } else if (a < b) {
    console.log('false')
  } else if (a > c) {
    console.log('false')
  } else {
    console.log('false')
  }
}

acerto(31, 10, 31)

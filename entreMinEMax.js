acerto = (a, b, c) => {
  if (a > b && a < c) {
    console.log('true')
  } else if (a == b || a == c) {
    console.log('true')
  } else if (a < b) {
    console.log('false')
  } else if (a > c) {
    console.log('false')
  }
}
// preciso terminar
acerto(30, 10, 30)

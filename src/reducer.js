const reducer = (state, action) => {
  switch (action.type) {
    case 'OBLICZ':
      return { ...state }
    case 'DODAJ':
      const suma = state.liczba1
      return { ...state, wynik: suma }
    case 'GENERUJ_L1': {
      let tab = []
    }
    case 'GENERUJ_L2':
      return 0

    default:
      throw new Error()
  }
}
//   if (action.type === 'OBLICZ') {
//     console.log('oblicz')
//   }
//   if (action.type === 'DODAJ') {
//     const suma = state.
//     console.log('dodaj')
//   }
// }
export default reducer

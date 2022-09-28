const reducer = (state, action) => {
  switch (action.type) {
    case 'OBLICZ':
      return { ...state, wynik: action.payload }
    case 'CLEAR':
      return { ...state, wynik: 0, liczba1: '', liczba2: '', operator: '' }
    case 'SHOW_L1':
      return { ...state, liczba1: action.payload }
    case 'SHOW_L2':
      return { ...state, liczba2: action.payload }
    case 'SHOW_OPERATOR':
      return { ...state, operator: action.payload }
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

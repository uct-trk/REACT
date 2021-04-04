

export const reducer = (state, action) => {
  switch(action.type){
    case "FETCH_START": // API den verinin alınmaya basladıgı zaman
      return {...state, data: "", loading: true, error:""};
    case "FETCH_SUCCESS": // Basarılı olarak alındıgı zaman
      return {...state, loading: false, data: action.payload};
    case "FETCH_ERROR": // Hatalı olarak alındıgı zaman
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
}
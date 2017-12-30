import { GET_GAINERS_PENDING, GET_GAINERS_SUCCESS } from '../actions/topgainers';

export default (state = [], action) => {
  switch(action.type){
    case GET_GAINERS_PENDING:
      return state;
    case GET_GAINERS_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}

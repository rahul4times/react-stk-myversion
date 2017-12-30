import axios from 'axios';

export const GET_GAINERS_PENDING = 'GET_GAINERS_PENDING'
export const GET_GAINERS_SUCCESS = 'GET_GAINERS_SUCCESS'

export const getTopGainers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_GAINERS_PENDING })
    let gainers = await
    axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
    dispatch({
      type: GET_GAINERS_SUCCESS,
      payload: gainers
    })
  }
}

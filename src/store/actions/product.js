import http from '../../utils/http'
import * as ACTIONS from './actionTypes'

export const getProduct = () => async (dispatch) => {
	try {
		const response = await http.get('/product/6781')
		dispatch({ type: ACTIONS.GETPRODUCT, payload: response })
	} catch (error) {
		console.log('error', error)
	}
}

import { put, call, all, takeLatest } from 'redux-saga/effects'
import api from '../services/api'
import { setWeather, setLoading } from './actions'

/**
 *Function responsible for making the request, receiving the name of the city as a parameter 
 * @param CityName
 */
function* getWeather({ payload }) {
	const key = '93bdc35702e22c1148753c7ce16e615f'
	const weather = yield call(api.get, `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${key}`)
	yield put(setWeather(weather))
	yield put(setLoading(false))
}

/**
 * Function that hears the triggered action and invokes the function that makes the request
 */
export default function* root() {
	return yield all([
		takeLatest('GET_WEATHER', getWeather)
	])
}


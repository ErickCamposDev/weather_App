export function getWeather(payload) {
	return {
		type: 'GET_WEATHER',
		payload
	}
}

export function setWeather(payload) {
	return {
		type: 'SET_WEATHER',
		payload
	}
}

export function setLoading(payload) {
	return {
		type: 'SET_LOADING',
		payload
	}
}

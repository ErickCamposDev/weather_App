const INITIAL_STATE = {
	weather: {},
	loading: true
}
export default function Weather(state = INITIAL_STATE, action) {
	switch (action.type) {

		case 'SET_WEATHER':
			return { ...state, weather: action.payload.data, loading: true }

		case 'SET_LOADING':
			return { ...state, loading: action.payload }

		default:
			return state
	}
}

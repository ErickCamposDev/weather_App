import { createStore, applyMiddleware} from 'redux'
import combineReducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import root from './sagas'

const sagaMiddleware= createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(root)
export default store
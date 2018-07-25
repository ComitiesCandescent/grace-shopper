import {createStore, combineReducers, applyMiddleware} from '../../../../Library/Caches/typescript/2.9/node_modules/redux'
import createLogger from '../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

const reducer = combineReducers({user})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'

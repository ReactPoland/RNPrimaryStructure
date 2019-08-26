import { applyMiddleware, compose } from 'redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import logger from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState = {}) => {
  const enhancer = compose(applyMiddleware(thunk, logger))
  return createStore(persistedReducer, initialState, enhancer)
}

export const store = configureStore()
export const persistor = persistStore(store)

import React, { useEffect } from 'react'
import AppNavigator from './screens'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { initServices } from './serviceprovider'

const initializeApp = () => {
  const listenersRemover = initServices()
  return listenersRemover
}

const App = () => {
  useEffect(() => initializeApp(), [])
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App

import React, { useEffect } from 'react'
import AppNavigator from 'appscreens'
import { Provider } from 'react-redux'
import { store, persistor } from 'appredux/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { initServices } from 'appserviceprovider'

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

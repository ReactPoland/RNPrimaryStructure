import React, { Fragment } from "react";
import AppNavigator from './screens';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';
import { getCocktails } from './redux/reducers/session/actions';

const onBeforeLift = () => {
  store.dispatch(getCocktails())
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;

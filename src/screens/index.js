import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import HomeScreen from './Home'
import TestsScreen from './Tests'

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Tests: TestsScreen 
}, {
  navigationOptions: {
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#1D213C'
    }
  }
})

const App = createAppContainer(MainNavigator);

export default App
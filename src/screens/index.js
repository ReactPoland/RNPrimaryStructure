import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import HomeScreen from './Home'

const MainNavigator = createStackNavigator({
  Home: HomeScreen
}, {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: {
        title: 'TITLE',
        titleStyle: {
          color: 'black',
          align: 'center',
          textAlign:'center',
          fontFamily: 'MuseoSansRounded-300',
          fontWeight: '500'
        }
      }
    }
  }
})

const App = createAppContainer(MainNavigator);

export default App
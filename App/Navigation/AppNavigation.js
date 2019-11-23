import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import SplashScreen from '../Containers/SplashScreen'
import GameScreen from '../Containers/GameScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  SplashScreen: { screen: SplashScreen },
  GameScreen: { screen: GameScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)

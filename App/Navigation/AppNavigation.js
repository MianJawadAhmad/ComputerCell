import { createStackNavigator, createAppContainer } from 'react-navigation'
import TeamScreen from '../Containers/TeamScreen'
import EventsScreen from '../Containers/EventsScreen'
import HomeScreen from '../Containers/HomeScreen'
import SplashScreen from '../Containers/SplashScreen'
import GameScreen from '../Containers/GameScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TeamScreen: { screen: TeamScreen },
  EventsScreen: { screen: EventsScreen },
  HomeScreen: { screen: HomeScreen },
  SplashScreen: { screen: SplashScreen },
  GameScreen: { screen: GameScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TeamScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)

import { createStackNavigator, createAppContainer } from 'react-navigation'
import PartnersScreen from '../Containers/PartnersScreen'
import GalleryScreen from '../Containers/GalleryScreen'
import QuizScreen from '../Containers/QuizScreen'
import LocationScreen from '../Containers/LocationScreen'
import TeamScreen from '../Containers/TeamScreen'
import EventsScreen from '../Containers/EventsScreen'
import HomeScreen from '../Containers/HomeScreen'
import SplashScreen from '../Containers/SplashScreen'
import GameScreen from '../Containers/GameScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  PartnersScreen: { screen: PartnersScreen },
  GalleryScreen: { screen: GalleryScreen },
  QuizScreen: { screen: QuizScreen },
  LocationScreen: { screen: LocationScreen },
  TeamScreen: { screen: TeamScreen },
  EventsScreen: { screen: EventsScreen },
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

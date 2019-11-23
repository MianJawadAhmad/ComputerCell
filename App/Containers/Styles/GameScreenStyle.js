import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  oval: {
    width: 2 * 90/100,
    borderRadius: 20,
    backgroundColor: 'green'
    },
    container: {
      flex: 1,
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      margin: 15,
      color: "black"
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
})

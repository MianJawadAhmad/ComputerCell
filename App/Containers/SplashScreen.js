import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import LinearGradient from 'react-native-linear-gradient';
// Styles
import {Images, Metrics} from '../Themes'
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends Component {
  componentDidMount(){

    setTimeout(()=>{
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
    },2000)
  }
  render () {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <View style={{flex:1}}>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={Images.computercell} style={{width: Metrics.screenWidth-50}} resizeMode={'contain'}/>
      </View>
      <View style={{ marginBottom : 50, flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
        <Image source={Images.computercell} style={{ width: Metrics.screenWidth/2-20, height : 50}} resizeMode={'contain'}/>
        <Image source={Images.computercell} style={{ width: Metrics.screenWidth/2-20, height : 50}} resizeMode={'contain'}/>
      </View>
    </View>
    </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)

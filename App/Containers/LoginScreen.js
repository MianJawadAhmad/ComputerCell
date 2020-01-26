import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View, Button  } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import firebase from 'react-native-firebase';
// Styles
import styles from './Styles/LoginScreenStyle'
import { then } from 'ramda';


// componentDidMount() {
   
// }

class LoginScreen extends Component {

  onCreateUserClick= () =>{
    firebase.auth().createUserWithEmailAndPassword('test5321@gmail.com','123456')  
        .then((user)=>{
            alert(JSON.stringify(user))
        }).catch((error)=>{
            alert(error)
        })

  };

  render () {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Button title={"create test user on firebase"} onPress={this.onCreateUserClick}>
        </Button>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

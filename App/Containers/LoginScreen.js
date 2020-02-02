import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,View, Button  } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import firebase from 'react-native-firebase';
//import database from '@react-native-firebase/database';
// Styles
import styles from './Styles/LoginScreenStyle'
import { then } from 'ramda';
import { Container, Body, Left, Right, Title, Content, Header, ListItem, List,Text} from 'native-base';

// componentDidMount() {
   
// }

class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : []
      
    }
  }

  componentDidMount(){
    console.log('jawad2')
    firebase.database().ref('/Names').once('value').then((snapshot)=>{
      console.log(snapshot);
      console.log(this.state.data);
      console.log(snapshot.val());
      if(snapshot !== null){
        console.log('jawad'+snapshot.val())

        this.setState({
          data : Object.keys(snapshot.val())
        })
       

        //   items=[];
        //  snapshot.forEach((child) => {
        //   items.push({
        //      name: child.val().name,
        //     description: child.val().description,
        //     _key: child.key
        //    });
        //  });
  
        // this.setState({
        //   dataSource: this.state.dataSource.cloneWithRows(items)
        // });
      }
      console.log('array=='+this.state.data);

    })

  //   firebase.database().ref('/computercell-7da08').set('jawad','ahmad').then((snapshot)=>{
  //     //success callback
  //     console.log('data ' , snapshot)
  // }).catch((error)=>{
  //     //error callback
  //     console.log('error ' , error)
  // })

    
  }

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
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'red'}}>
        {/* <Button title={"create test user on firebase"} onPress={this.onCreateUserClick}>
        </Button> */}
        <Text>jawad1</Text>
        <List dataArray={this.state.data} renderRow={(dataItem)=>{
            return(
              <ListItem>

                <Text>{dataItem}</Text>
                
              </ListItem>
            )
          }}>
          </List>
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

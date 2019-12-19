import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, ImageBackground,Image,Linking } from 'react-native'
import { connect } from 'react-redux'
import {Container,Header, Content,Card,CardItem, Text,Icon,Left, Body, Right} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Styles
import styles from './Styles/LocationScreenStyle'
import {Images, Metrics} from '../Themes'
class LocationScreen extends Component {
  render () {
    return (

// 
//       

<Container style={{flex:1,backgroundColor:'#FEF6E6'}}>
        <Header style={{backgroundColor:'#FEF6E6'}}>
          <Left>
            <Icon style={{fontSize:hp('3')}} onPress={()=> this.props.navigation.navigate('HomeScreen')} name='md-arrow-round-back'>
            </Icon>
          </Left>
          <Body/>
          <Right/>
        </Header>
        <Content style={{flex:1}}>
        <Card style={{flex:1,height: hp('90%')}}>
                    <CardItem cardBody button onPress={this.location}>
                      {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/> */}
                      <Image source={Images.map} style={{flex:1,height: hp('70%')}}
                       resizeMode={'cover'}/>
                    </CardItem>
                    <CardItem button onPress={this.location} >
                  <Text style={{fontWeight:'bold',fontSize:hp('2%')}}>Location</Text>
                    </CardItem>
                    <CardItem>
                  <Text style={{fontSize:hp('2')}}>University of Engineering and Technology, Peshawar.
                        University Rd, University campus, Peshawar, Khyber Pakhtunkhwa
                      (091) 9216493
                      </Text>
                    </CardItem>
                  </Card>
        </Content>
      </Container>
    )
  }
  location = () => {
    Linking.openURL('https://goo.gl/maps/nF2zsvjes5p49sKJ6')
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)

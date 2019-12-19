import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ImageBackground,TouchableOpacity,Image,FlatList } from 'react-native'
import {Container, Content,Header, Button, View,Right,Left,Body,Icon} from 'native-base'
import { connect } from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Add Actions - replace 'Your' with whatever your reducer is called :)

// Styles
import {Images, Metrics} from '../Themes'

const quizdata =[
  {
    id: 1,
    image: Images.partner1,
  },
  {
    id: 2,
    image: Images.partner2,
  },

]
class PartnersScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      data : quizdata
    }
  }

  render () {
    return (
<Container style={{flex:1,backgroundColor:'#FEF6E6'}}>
        <Header  style={{backgroundColor:'#FEF6E6'}}>
          <Left>
            <Icon style={{fontSize:hp('3')}} onPress={()=> this.props.navigation.navigate('HomeScreen')} name='md-arrow-round-back'>

            </Icon>
          </Left>
          <Body/>
          <Right/>
        </Header>
        <Content style={{flex:1}}>
        <FlatList
                  data={this.state.data
                  }
                  renderItem={({ item }) => (

          <TouchableOpacity  style={{ height: hp('40%'),width: wp('100%'),margin:20,
                backgroundColor:'white', alignSelf:'center', justifyContent:'center', alignContent:'center', borderRadius:hp('10')}}>

          <Image source={item.image} style={{height: hp('50%'),width: wp('100%')
             ,justifyContent:'center',alignItems:'center', borderRadius:hp('10')}}
             resizeMode={'contain'} >
          </Image>
          
          </TouchableOpacity>
          
                              )}
                              //Setting the number of column
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                            />
        </Content>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnersScreen)

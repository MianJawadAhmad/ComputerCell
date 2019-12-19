import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ImageBackground,TouchableOpacity,Image,FlatList } from 'react-native'
import { connect } from 'react-redux'
import {Container, Content,Header, Button, View,Right,Left,Body,Icon} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GalleryScreenStyle'
import {Images, Metrics} from '../Themes'

const quizdata =[
  {
    id: 1,
    image: Images.team1,
  },
  {
    id: 2,
    image: Images.team2,
  },
  {
    id: 3,
    image: Images.team3,
  },
  {
    id: 4,
    image: Images.team4,
  },
  {
    id: 5,
    image: Images.team5,
  },
]

class GalleryScreen extends Component {

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

        <TouchableOpacity  style={{ height: hp('15%'),width: wp('30%'),margin:2,
              backgroundColor:'white', alignSelf:'center', justifyContent:'center', alignContent:'center', borderRadius:hp('1%')}}>

        <Image source={item.image} style={{height: hp('15%'),width: wp('30%')
           ,justifyContent:'center',alignItems:'center', borderRadius:hp('1%')}}
              >
        </Image>
        
        </TouchableOpacity>
        
                            )}
                            //Setting the number of column
                            numColumns={3}
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen)

import React, { Component } from 'react'
import { Image,Linking,FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TeamScreenStyle'
import {Images, Metrics} from '../Themes'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const team =[
  {
    id: 1,
    image: Images.team1,
    name: 'DR. NASRU MINALLAH',
    title: 'Advisor',
    color:'orange'
    
  },
  {
    id: 2,
    image: Images.team2,
    name: 'Mian Jawad Ahmad',
    title: 'President',
    color:'green'
    },
  {
    id: 3,
    image: Images.team3,
    name: 'Asif Taj',
    title: 'President',
    color:'orange'
    // facebook: Linking.openURL('https://www.facebook.com/mainjawadahmad1')
  },
  {
    id: 4,
    image: Images.team4,
    name: 'Ayesha Noor',
    title: 'President',
    color:'green'
    // facebook: Linking.openURL('https://www.facebook.com/mainjawadahmad1')
  },
  {
    id: 5,
    image: Images.team5,
    name: 'Zarak Khan',
    title: 'Director Media',
    color:'orange'
    // facebook: Linking.openURL('https://www.facebook.com/mainjawadahmad1')
  },
]


class TeamScreen extends Component {

  constructor(props){
    super(props);
    this.state ={
      team : team
      
    }
  }

  render () {
    return (
      <Container style={{flex:1,backgroundColor:'#FEF6E6'}}>
              <Header>
          <Left>
            <Icon onPress={()=> this.props.navigation.navigate('HomeScreen')} name='md-arrow-round-back'>

            </Icon>
          </Left>
        </Header>
      <Content style={{flex:1}}>
        <FlatList
              
              data={this.state.team}
              renderItem={({ item }) => (
                
        <Card style={{flex:1,flexDirection:'row', height: hp('17%')}}>
          <CardItem cardBody >
            <Image source={item.image} style={{width: wp('30%'),height: hp('15%'), marginLeft:5}}/>
          </CardItem>
          <CardItem cardBody style={{flex:1,flexDirection:'column', alignItems:'flex-start', marginLeft:15, marginTop:6}}>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            <Text style={{fontWeight:'bold',fontSize:hp('2%'), color:item.color}}>______________</Text>
            <Text style={{}}>{item.title}</Text>
            
            <CardItem style={{flex:1,flexDirection:'row', alignItems:'flex-start', marginLeft:5, marginTop:5,width: wp('60%')}}>
              <Left style={{justifyContent:'center'}}>
                <Button full transparent 
                onPress={()=> this.linkFace(item)}>
                  <Icon style={{color:'black',fontSize:hp('3%')}} active name="logo-facebook" />
                </Button>
              </Left>
              <Body style={{ justifyContent:'center'}}>
                <Button full transparent
                onPress={()=> this.linkTwitter(item)}>
                  <Icon style={{color:'black',fontSize:hp('3%')}}  active name="logo-twitter" />
                </Button>
              </Body>
              <Right style={{justifyContent:'center'}}>
                <Button full transparent
                onPress={()=> this.linkgithub(item)}>
                  <Icon style={{color:'black',fontSize:hp('3%')}}  active name="logo-github" />
                </Button>
              </Right>
            </CardItem>
          </CardItem>

        </Card>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
    )
  }
  linkFace = (item) => {
    if (item.id === 1){
      Linking.openURL('https://www.facebook.com/nminallah')
    }else if(item.id === 2){
      Linking.openURL('https://www.facebook.com/mainjawadahmad1')
    }else if(item.id === 3){
      Linking.openURL('https://www.facebook.com/aaxiftaj')
    }else if(item.id === 4){
      Linking.openURL('https://www.facebook.com/computercellofficial')
    }else if(item.id === 5){
      Linking.openURL('https://www.facebook.com/zrk11khan')
    }
  }

  linkTwitter = (item) => {
    if (item.id === 1){
      Linking.openURL('https://www.facebook.com/nminallah')
    }else if(item.id === 2){
      Linking.openURL('https://twitter.com/MianJawadAhmad1')
    }else if(item.id === 3){
      Linking.openURL('https://twitter.com/axiftaj')
    }else if(item.id === 4){
      Linking.openURL('https://www.facebook.com/computercellofficial')
    }else if(item.id === 5){
      Linking.openURL('https://www.facebook.com/zrk11khan')
    }
  }

  linkgithub = (item) => {
    if (item.id === 1){
      Linking.openURL('https://github.com/ComputerCell')
    }else if(item.id === 2){
      Linking.openURL('https://github.com/MianJawadAhmad')
    }else if(item.id === 3){
      Linking.openURL('https://github.com/axiftaj')
    }else if(item.id === 4){
      Linking.openURL('https://github.com/ComputerCell')
    }else if(item.id === 5){
      Linking.openURL('https://github.com/zarakk')
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamScreen)

import React, { Component } from 'react'
import {View,Image,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container,Header,Content,Button,Text, Icon, Footer, Left, Body, Right } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Images, Metrics} from '../Themes'
// Styles
import styles from './Styles/HomeScreenStyle'

const Data = [  
  {
      id: 1,
      title: 'Events',
      icon: 'ios-list-box',

  },
  {
    id: 2,
    title: 'Gallery',
    icon: 'md-images',
    },
    {
      id: 3,
      title: 'Team',
      icon: 'md-people',
    },
    {
    id: 4,
    title: 'Quizzes',
    icon: 'md-checkmark-circle-outline',
    },
    {
      id: 5,
      title: 'About Us',
      icon: 'md-hand',
    },
    {
    id: 6,
    title: 'Location',
    icon: 'md-locate',
    }
    ]




class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data : Data
    }
  }
  render () {
    return (
      <Container style={styles.Container}>
        <Header style={{backgroundColor:'#FEF6E6'}}>
          <Left>

          </Left>
          <Body>

          </Body>
          <Right>

          </Right>

        </Header>

            <Content style={{flex:1}}>
              <Image source={Images.computercell} style={{width: wp('100%'),height: hp('30%'),alignSelf:'center', marginTop:20}} resizeMode={'contain'}/>

              <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:hp('3%'),height: hp('5%'),width: wp('50%'),textAlign: "center"}}>
                Computer Cell
              </Text>
              <Text style={{alignSelf:'center', height: hp('16%'),width: wp('90%'), fontSize:hp('2%'),textAlign: "center" }}>
              Computer Cell is a society that is founded by the Computer Science and Information 
              Technology Department of UET Peshawar. Computer Cell - UET Peshawar aims to bring 
              out the talented geeks, to polish their technical skills and to push them out to 
              market.
              </Text>
             
                <FlatList
                contentContainerStyle={{marginLeft:20, marginRight:20 }}
                  data={this.state.Data}
                  renderItem={({ item }) => (
                    <Button light style={{ flex: 1, flexDirection: 'column',height: hp('10%'),width: wp('90%') , margin:5, justifyContent:'center', backgroundColor:'white',borderRadius:6}}
                    onPress={()=> this.Select(item)}>  
                      <Icon name= {item.icon} style={{flex: 1, color:'black',fontSize:hp('3%')}}/>
                      <Text style={{ fontSize:hp('2%'), color:'black'}}>{item.title}</Text>
                    </Button> 
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                  />
              </Content>
      </Container>
    )
  }
  Select = (item) => {
    if (item.id === 1){
      this.props.navigation.navigate('EventsScreen')
    }else if (item.id === 2){
      this.props.navigation.navigate('EventsScreen')
    }else if (item.id === 3){
      this.props.navigation.navigate('TeamScreen')
    }else if (item.id === 4){
      this.props.navigation.navigate('EventsScreen')
    }else if (item.id === 5){
      this.props.navigation.navigate('EventsScreen')
    }else if (item.id === 6){
      this.props.navigation.navigate('EventsScreen')
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

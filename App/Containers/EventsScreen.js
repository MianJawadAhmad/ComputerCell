import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,Image,FlatList,View } from 'react-native'
import { connect } from 'react-redux'
import { Container,Header,Content,Button, Icon,
   Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EventsScreenStyle'
import {Images, Metrics} from '../Themes'

const upevent =[
  {
    id: 1,
    image: Images.event1,
    title: 'Igniting Peshawar',
    dec : 'Igniting Peshawar is a two-days event of sessions, Coding competition and expo'
  }
]


const paevent =[
  {
    id: 1,
    image: Images.event2,
    title: 'C++ WORKSHOP',
    dec : ' This workshop is planned for the young gems. All students need to have the passion and devotion to learning and a spirit of never giving up. Students learn how to write programs.'
  },
  {
    id: 2,
    image: Images.event3,
    title: 'GRAPHIC DESIGINING, UX/UI',
    dec : ' Computer Cell is organizing workshop on Graphic designing, which is a great opportunity for all the students to learn practical skills. These trainings will give a specific skill to our students so they can use it for personal development or career advancement.'
  },
  {
    id: 3,
    image: Images.event4,
    title: 'COMMONWEALTH SCHOLARSHIP',
    dec : ' A Session presented by our very own Dr. Izhar Ullah (Assistant Professor, CS&IT) regarding Commonwealth Scholarship to pursue a Masters Degree in the U.K.'
  },
  {
    id: 4,
    image: Images.event5,
    title: 'COMPUTER SCIENCE CLINIC',
    dec : ' Its getting much better than ever !! Computer Cell UET Peshawar has managed to initiate a platform where newbies in the field of technology are assisted to learn a much needed skill of Programming. "Computer Science Clinic" - an initiative by CC to provide relevant guidelines & workshops where young passionate students of Computer Science & IT can learn certain skills and have them equipped with the best an individual can ever think of. We hope to provide the best so that every passionate individual can find themselves at a better stage to brighten there future.!'
  },
  {
    id: 5,
    image: Images.event6,
    title: 'STATE-OF-THE-ART RESEARCH IN DATA SCIENCE',
    dec : ' Department of Computer Science and Information Technology, in collaboration with Data Analytics Lab (National Center of Big Data and Cloud Computing, UET Peshawar) has invited Dr. Imdad Ullah Khan from LUMS as guest speaker to present state-of-the-art research in data science conducted at data science lab at LUMS.!'
  },
]

class EventsScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      upeventData : upevent,
      upeventColor : 'black',
      paeventColor : '#FEF6E6',
      upColortext: 'white',
      paColortext: 'black'
      
    }
  }
  render () {
    return (
      <Container style={{backgroundColor:'#FEF6E6', flex:1}}>
        <Header>
          <Left>
            <Icon onPress={()=> this.props.navigation.navigate('HomeScreen')} name='md-arrow-round-back'>

            </Icon>
          </Left>
        </Header>
        <Content>
          <CardItem style={{flex:1, flexDirection:'row', backgroundColor:'#FEF6E6'}}>
            
              <Button  transparent style={{flex:1, margin:2, borderRadius:5, borderWidth:2, justifyContent:'center', backgroundColor:this.state.upeventColor, opacity:0.5, borderColor:'black'}}
              onPress={this.upEvents}>
                <Text style={{color: this.state.upColortext}}>Up Comming Events</Text>
              </Button>
           
              <Button  transparent style={{flex:1, margin:2, borderRadius:5, borderWidth:2, justifyContent:'center', backgroundColor:this.state.paeventColor, opacity:0.5, borderColor:'black'}}
              onPress={this.paEvents}>
                <Text style={{color: this.state.paColortext}}>Past Events</Text>
              </Button>
            
          </CardItem>
        <FlatList
                  data={this.state.upeventData}
                  renderItem={({ item }) => (
                    <Card>
                    <CardItem cardBody>
                      {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/> */}
                      <Image source={item.image} style={{flex:1,height: hp('30%')}}
                       resizeMode={'contain'}/>
                    </CardItem>
                    <CardItem>
                  <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                    </CardItem>
                    <CardItem>
                  <Text>{item.dec}</Text>
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
  upEvents = () => {
    this.setState({ upeventColor : 'black', paeventColor: '#FEF6E6', upeventData:upevent,upColortext: 'white',paColortext: 'black'  })
  }
  paEvents = () => {
    this.setState ({upeventColor : '#FEF6E6', paeventColor: 'black', upeventData:paevent, paColortext: 'white',upColortext: 'black'})
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)

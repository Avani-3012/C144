import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import {Header,Icon,AirbnbRating,Card} from 'react-native-elements'
import {RFValue} from 'react-native-responsive-fontsize'
import React from 'react'

export default class Recommended extends Component{
  constructor(props){
      super(props)
      this.state={
             data:[],

      }
  }
  componentDidMount(){
     this.get_data()
  }

  timeConvert(num){
    var hours = Math.floor(num/60)
    var minutes = num%60
    return `${hours} hrs ${minutes} mins`
 
   }

  get_data=()=>{
    const url = "http://localhost:5000/recommended-movies"
    axios
    .get(url)
    .then(async response=>{
      this.setState({
        data:response.data.data

      })
      .catch(error=>{
        console.log(error.message)
      })
    })
   keyExtractor=(item,index)=>index.toString()
   renderItems=({item,index})=>{
       return(
         <Card 
          key={`card-${index}`}
          image={{uri:item.poster_link}}
          imageProps={{resizeMode:"cover"}}
          featuredTitle={item.title}
          containerStyle={styles.cardConatiner}
          featuredTitleStyle={styles.title}
          featuredSubTitle={`${item.release_date.split("-")[0]} | ${this.timeConvert(item.duration)}`}
          featuredSubTitleStyle={styles.subtitle}
         >

         </Card>
       )
   }
    

 }
  render(){
      const{data}=this.state
      return(
          <View style={styles.container}>
              <Flatlist
                data={data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItems}
              />

          </View>
      )
  }
}
const styles = StyleSheet.create({ 
    container: { flex: 1, backgroundColor: "#fff" },
     title: { color: "#fff", alignSelf: "flex-start",
      paddingLeft: RFValue(15), 
      fontSize: RFValue(25), marginTop: RFValue(65) }, 
      subtitle: { fontWeight: "bold", alignSelf: "flex-start", paddingLeft: RFValue(15), 
      fontSize: RFValue(15) }, 
      cardContainer: { flex: 1, borderRadius: RFValue(10), 
        justifyContent: "center", 
        height: RFValue(110),
         marginBottom: RFValue(20) 
        } });
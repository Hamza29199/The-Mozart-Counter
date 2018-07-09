import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';

// importing from local files
import Asset from './components/Asset';

// importing a pure javascript module available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json


class CounterButt extends Component{
   state = {
     
     count:0,
     
   }
   render(){
   return(
  <TouchableOpacity style={{backgroundColor:'orange'}}
  onPress={()=> this.setState({count: this.state.count + 10})} >
  
  <Text style = {styles.paragraph}>
  
  {this.state.count}
  </Text>
  </TouchableOpacity>
  );}
  
}
export default class App extends Component {
  
  render(){
    return (
      
      <View style={styles.container}>
      <View style = {{flexDirection:'row'}}>
      <CounterButt/>
      <CounterButt/>
      <CounterButt/>
      
      </View>
      
        <Card title="THE MOZART COUNTER">
          <Asset/>
        </Card>
      </View>
    );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#450000',
  },
  paragraph: {
    margin: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

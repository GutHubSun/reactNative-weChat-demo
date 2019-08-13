/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Dimensions, View,TouchableOpacity,StatusBar} from 'react-native';


export default class Header extends Component {
      constructor (props) {
      super (props);
      console.log(this.props)
    }
  render() {
       const {props,title} = this.props;
    return (
      <View style={styles.header}>
         <View>
          <Text style={styles.headerText}>{title}</Text>
         </View>
           <TouchableOpacity onPress={() => props.navigate ('camera')}>
         <View><Text style={styles.headerText}>添加</Text></View>
         </TouchableOpacity>
      </View>
    );
  }
}
const width = Dimensions.get ('window').width;
const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    height: 50 + StatusBar.currentHeight,
    width: width,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f8f8f8',
    paddingRight: 15,
     paddingLeft: 15,
  },
  headerText:{
 color: 'black',
 fontSize: 17
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Dimensions, View,TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Header extends Component<Props> {
      constructor (props) {
      super (props);
    }
  render() {
       const {props} = this.props;
    return (
      <View style={styles.header}>
         <View>
          <Text style={styles.headerText}>微信(15)</Text>
         </View>
           <TouchableHighlight underlayColor="#f5f5f5" onPress={() => props.navigate ('camera')}>
         <View><Text style={styles.headerText}>添加</Text></View>
         </TouchableHighlight>
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
    height: 50,
    width: width,
    backgroundColor: '#f8f8f8',
    paddingRight: 15,
     paddingLeft: 15,
  },
  headerText:{
 color: 'black',
 fontSize: 17
  }
});

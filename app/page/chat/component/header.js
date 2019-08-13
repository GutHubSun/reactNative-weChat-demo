/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const instructions = Platform.select ({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Header extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    const {props} = this.props;
    return (
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor="#F5FCFF"
          onPress={() => {
            props.goBack ();
          }}
        >
          <View style={styles.name}>
            <Image
              source={require ('../../../image/left.png')}
              style={styles.icon}
            />
            <Text style={styles.headerText}>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
        <View>
          <Image
            source={require ('../../../image/shen.png')}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}
const width = Dimensions.get ('window').width;
const styles = StyleSheet.create ({
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#323232',
  },
});

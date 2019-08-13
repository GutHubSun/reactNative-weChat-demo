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
  View,
  SectionList,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../component/header';
export default class App extends Component<Props> {
  constructor (props) {
    super (props);
    console.log(this.props,"this.props")
    this.state = {
      list: [
        {
          name: '朋友圈',
          icon: require ('../../image/circle.png'),
          url: 'addCircle'
        },
         {
          name: '扫一扫',
          icon: require ('../../image/sweep.png'),
        },
         {
          name: '摇一摇',
          icon: require ('../../image/rock.png'),
        },
         {
          name: '附近的人',
          icon: require ('../../image/nearby.png'),
        },
      ],
    };
  }
  render () {
    let {list} = this.state;
        const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#f8f8f8'} barStyle={'dark-content'} />
          <Header props={this.props.navigation} title="发现"/>
        {list.map ((item,index)=> {
          return (
            <TouchableOpacity key={index} onPress={() => navigate (item.url)}>
              <View style={styles.listItem}>
                <Image source={item.icon} style={styles.headimg} />
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const width = Dimensions.get ('window').width;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  listItem:{
      width: width,
      height: 60,
      paddingLeft: 10,
      paddingRight: 10,
         flexDirection: 'row',
          backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: "#e4e4e4",
        borderBottomWidth: 1,
        marginBottom: 10
  },
    headimg: {
    width: 30,
    height: 30,
  },
    itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#222',
  },
});

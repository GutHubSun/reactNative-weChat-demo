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
  PermissionsAndroid
} from 'react-native';
import Header from '../../component/header';
import DeviceInfo from 'react-native-device-info';
const getUniqueID = DeviceInfo.getPhoneNumber();
console.log(getUniqueID,"getUniqueID")
export default class App extends Component<Props> {
  constructor (props) {
    super (props);
     this._navListener = this.props.navigation.addListener('didFocus', () => {
         StatusBar.setBackgroundColor ('rgba(0,0,0,0)', false)
        StatusBar.setBarStyle('dark-content');
       StatusBar.setTranslucent(true)
        console.log(StatusBar.currentHeight )
    });
    this.state = {
      list: [
        {
          name: '支付',
          icon: require ('../../image/circle.png'),
          url: 'addCircle',
        },
        {
          name: '相册',
          icon: require ('../../image/sweep.png'),
        },
        {
          name: '收藏',
          icon: require ('../../image/rock.png'),
        },
        {
          name: '设置',
          icon: require ('../../image/nearby.png'),
        },
      ],
    };
  }
  componentDidMount() {
    this.requestCameraPermission()
  }
  requestCameraPermission () {
    const granted = PermissionsAndroid.request (
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        title: '申请摄像头权限',
        message: '一个很牛逼的应用想借用你的摄像头，' + '然后你就可以拍出酷炫的皂片啦。',
        buttonNeutral: '等会再问我',
        buttonNegative: '不行',
        buttonPositive: '好吧',
      }
    );
    console.log (granted, PermissionsAndroid.RESULTS.GRANTED);
    if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
      const num = DeviceInfo.getPhoneNumber();
console.log(num,"num")
    } else {
      console.log ('用户并不屌你');
    }
  }
  render () {
    let {list} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <StatusBar  backgroundColor={'black'}  barStyle={'dark-content'} /> */}
        <View style={styles.meContent}>
          <View style={styles.meContentLeft}>
            <Image
              source={require ('../../image/zhou.jpg')}
              style={styles.headimg}
            />
            <View style={styles.userData}>
             <Text style={styles.name}>周星星</Text>
             <Text>微信号: T123456789</Text>
            </View>
          </View>
          <View style={styles.code} />
        </View>
        {list.map ((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigate (item.url)}>
              <View style={styles.listItem}>
                <Image source={item.icon} style={styles.icon} />
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
    backgroundColor: '#efefef',
  },
  listItem: {
    width: width,
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  meContent: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingLeft: 20,
    paddingTop: 30 + StatusBar.currentHeight,
    paddingBottom: 30,
    marginBottom: 10,
    fontSize: 0
  },
  meContentLeft:{
        flexDirection: 'row',
  },
  userData:{
      justifyContent: 'space-around',
      height: 70,
      marginLeft: 20
  },
  name:{
      fontSize: 19,
      color: 'black'
  },
  headimg: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#222',
  },
});

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
  Button,
  Text,
  View,
  SectionList,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
  Dimensions,
  CameraRoll,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Header from '../../component/header';
var ws = new WebSocket('ws://192.168.101.50:9099/ws');
ws.onopen = () => {
  var data = {"type":"REGISTER","message":"项目地址","userId":"123456"}
  ws.send(JSON.stringify(data)); // send a message
  // setTimeout(() => {
  //   var data2 = {"type":"SINGLE_SENDING","message":"天气","to":"123456","from":"123"}
  //    ws.send(JSON.stringify(data2)); // send a message
  // }, 1000);
};
// ws.addEventListener('open', function (event) {
//     ws.send('Hello Server!');
// });
ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};
export default class App extends Component<Props> {
  constructor (props) {
    super (props);
    console.log (this.props, 'this.props');
    this.state = {
      photos: [],
      next: true,
      end_cursor: ""
    };
  }
  requestCameraPermission () {
    const granted = PermissionsAndroid.request (
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
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
      console.log(this,"指向")
      this._handleButtonPress();
    } else {
      console.log ('用户并不屌你');
    }
  }
  _handleButtonPress = () => {
    CameraRoll.getPhotos ({
      first: 50,
      assetType: 'Photos',
      after: '1565620045392'
    })
      .then (r => {
        console.log (r);
        this.setState ({
          photos: r.edges,
          next: r.page_info.has_next_page,
          end_cursor: r.page_info.end_cursor
          });
      })
      .catch (err => {
        console.log (err);
        //Error Loading Images
      });
  };
  onEndReached(){
    console.log("可以调用了")
  }
  render () {
    return (
      <View>
       <Header props={this.props.navigation} title="发布"/>
        <Button title="添加图片" onPress={this._handleButtonPress.bind(this)} />
            <View style={styles.imgbox}>
        <FlatList
          data={this.state.photos}
          numColumns={3}
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached}
          renderItem={({item, i}) => (
              <Image
                key={i}
                style={styles.img}
                source={{uri: item.node.image.uri}}
              />
          )}
        />
            </View>
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
  imgbox: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: width / 3,
    height: width / 3,
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

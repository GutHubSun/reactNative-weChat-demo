/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,FlatList,Dimensions,Image,TouchableHighlight} from 'react-native';
import Header from '../../component/header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
     this._navListener = this.props.navigation.addListener('didFocus', () => {
         StatusBar.setBackgroundColor ('rgba(0,0,0,0)', false)
        StatusBar.setBarStyle('dark-content');
       StatusBar.setTranslucent(true)
    });
  }
    list(item,index){
      console.log(item)
          const {navigate} = this.props.navigation;
        return(
             <TouchableHighlight underlayColor="#f5f5f5" key={item.index} onPress={() => navigate ('chat',{name: item.item.name,icon:item.item.icon})}>
            <View style={styles.item} key={item.index} >
              <View style={styles.itemImg}>
                <Image source={item.item.icon} style={styles.headimg} />
              </View>
              <View style={styles.itemRight}>
                <View style={styles.rightData}>
                  <View style={styles.rightTop}>
                    <Text style={styles.name}>{item.item.name}</Text>
                    <Text style={styles.time}>下午2:53</Text>
                  </View>
                 <Text style={styles.msg} ellipsizeMode='tail' numberOfLines={1}>{item.item.msg}</Text>
                </View>
               
              </View>
            </View>
              </TouchableHighlight>

        )
    }
  render() {
    return (
      <View style={styles.container}>
        <Header  props={this.props.navigation} title={'微信'}/>
         <FlatList
            keyExtractor={(item, index) => index.toString()}
          data={[
              {
                  name:'周杰伦',
                  icon: require('../../image/20140826185020_AhitK.jpeg'),
                  msg:'今晚一起吃饭吗？'
              },
               {
                  name:'周星驰',
                  icon: require('../../image/zhou.jpg'),
                  msg:'收到货发动机福利卡多少积分立刻是考虑金石可镂建安费立刻就分开了氨基酸的风口浪尖sad付款了'
              },
               {
                  name:'迪丽热巴',
                  icon: require('../../image/20181117143625_fvxri.jpg'),
                  msg:'阿斯利康的积分拉克丝打飞机立刻'
              },
               {
                  name:'前端同事',
                  icon: require('../../image/icon.jpg'),
                  msg:'工作怎么样？'
              },
          ]}
          renderItem={(item,index)=>this.list(item,index)}
        />
      </View>
    );
  }
}
const width = Dimensions.get ('window').width;
const styles = StyleSheet.create({
  container: {
   paddingBottom: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item:{
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: '#f7f7f7',
      borderTopWidth:1,
  },
  itemImg:{
      width: 55,
      height: 55,
      borderRadius: 5,
      marginRight: 8
  },
  headimg:{
     width: 55,
      height: 55, 
       borderRadius: 5, 
  },
  name:{
      fontSize: 18,
      color: 'black',
  },
  time:{
      color: '#a9a9a9',
      fontSize: 11
  },
  itemRight: {
       flex: 1,
    overflow: 'hidden'
  },
  rightTop:{
         flexDirection: 'row',
         justifyContent: 'space-between',
  },
  msg:{
      fontSize: 13,
      color:'#a9a9a9',
      marginTop: 7
  }
});

import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import StackViewStyleInterpolator
  from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator.tsx';
import home from '../page/home/home';
import chat from '../page/chat/chat'; //聊天界面
import message from '../page/message/message'; //聊天列表
import person from '../page/person/person'; //通讯录
import find from '../page/find/find'; //发现
import addCircle from '../page/circle/addCircle'; //发布朋友圈
import circle from '../page/circle/circle'; //朋友圈列表
import me from '../page/me/me'; //个人中心
import {
  Text,
  View,
  Image,
  StyleSheet,
  Easing,
  Animated,
  Platform,
  StatusBar,
} from 'react-native';

export const AppTabNavigator = createMaterialTopTabNavigator (
  {
    Page1: {
      screen: message,
      navigationOptions: {
        tabBarLabel: '信息',
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <View>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require ('../image/message-active.png')
                    : require ('../image/message.png')
                }
              />
              <View style={styles.jiao}>
                <Text
                  style={[{fontSize: 10, color: '#fff', textAlign: 'center'}]}
                >
                  2
                </Text>
              </View>
            </View>
          );
        },
      },
    },
    Page2: {
      screen: person,
      navigationOptions: {
        tabBarLabel: '通讯录',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <View>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require ('../image/person-active.png')
                    : require ('../image/person.png')
                }
              />
              <View style={styles.jiao}>
                <Text
                  style={[{fontSize: 10, color: '#fff', textAlign: 'center'}]}
                >
                  2
                </Text>
              </View>
            </View>
          );
        },
      },
    },
    Page3: {
      screen: find,
      navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <View>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require ('../image/find-active.png')
                    : require ('../image/find.png')
                }
              />
            </View>
          );
        },
      },
    },
    Page4: {
      screen: me,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <View>
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require ('../image/me-active.png')
                    : require ('../image/me.png')
                }
              />
            </View>
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Page4',
    tabBarPosition: 'bottom',
    backBehavior: 'none',
    inactiveTintColor: '#111111',
    lazy: true,
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      indicatorStyle: {
        height: 0,
        backgroundColor: 'red',
      },
      activeTintColor: '#0ebe6b',
      inactiveTintColor: 'black',
      showIcon: true, // 是否显示图标, 默认为false
      showLabel: true, // 是否显示label
      labelStyle: {
        fontSize: 12,
        marginTop: 3,
        padding: 0,
      },
      tabStyle: {
        height: 50,
        padding: 0,
        margin: 0,
      },
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  }
);

const main = createStackNavigator (
  {
    page: {
      screen: AppTabNavigator,
      navigationOptions: {
        header: null, //可以通过header：null来禁用StackNavigator默认的Navigation
      },
    },
    chat: {
      screen: chat,
      navigationOptions: {
        header: null,
      },
    },
    addCircle: {
      screen: addCircle,
      navigationOptions: {
        header: null,
      },
    },
    circle: {
      screen: circle,
      navigationOptions: {
        header: null,
      },
    },
    page: {
      screen: AppTabNavigator,
      navigationOptions: {
        header: null, //可以通过header：null来禁用StackNavigator默认的Navigation
      },
    },
  },
  {
    headerMode: 'screen',
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out (Easing.poly (4)),
        timing: Animated.timing,
      },
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  }
);
export default createAppContainer (
  createSwitchNavigator ({
    // welcomeMain: welcomeMain,
    main: main,
  })
);
const styles = StyleSheet.create ({
  icon: {
    width: 24,
    height: 24,
  },
  jiao: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 9,
    backgroundColor: '#FB3768',
    borderRadius: 9,
    right: -8,
    top: -2,
  },
});

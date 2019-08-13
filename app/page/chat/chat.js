import React, {Component} from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import Header from '../../component/header';
export default class App extends Component {
  //构造函数
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      isMy: true,
      height_comments: '',
      showSendBtn: false,
      chatData: [{type: 1, text: '1'}, {type: 1, text: '1111'},{type: 2, text: '1111'},{type: 1, text: '1111'}],
    };
  }
  onChange (text) {
    this.setState (
      {
        text_comments: text,
      },
      () => {
        if (this.state.text_comments) {
          setTimeout (() => {
            this.setState ({
              showSendBtn: true,
            });
          }, 0);
        } else {
          setTimeout (() => {
            this.setState ({
              showSendBtn: false,
            });
          }, 0);
        }
      }
    );
  }
  onContentSizeChange (event) {
    this.setState ({
      height_comments: event.nativeEvent.contentSize.height,
    });
  }
  sendMessgesFn2 () {
    let obj = {
      type: 1,
      text: this.state.text_comments,
    };
    this.setState (
      {
        chatData: [...this.state.chatData, obj],
      },
      () => {
        setTimeout (() => {
            this.setState ({
              text_comments: ""
            })
          this.refs.scrollView.scrollToEnd ();
          setTimeout(() => {
          this.sendMessgesFn3()
          }, 1000);
        }, 0);
      }
    );
  }
  sendMessgesFn3(){
      let obj = {
      type: 2,
      text: "今晚一起吃饭吗？",
    };
    this.setState (
      {
        chatData: [...this.state.chatData, obj],
      },
      () => {
        setTimeout (() => {
          this.refs.scrollView.scrollToEnd ();
        }, 0);
      }
    );
  }
  chatListItem (item,index) {
    return (
      <View style={item.type == 1 ? styles.chatItem : styles.chatItem2} key={index}>
        {item.type == 1 ?  <Image
          source={require ('../../image/zhou.jpg')}
          style={styles.headImg}
        /> :   <Image
          source={this.props.navigation.state.params.icon}
          style={styles.headImg}
        />}
        <View style={item.type == 1 ? styles.trangle : styles.trangle2} />
        <View>
          <Text style={item.type == 1 ? styles.chatText : styles.chatText2}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  }
  componentDidMount () {
    this.refs.scrollView.scrollToEnd ();
  }
  //渲染

  render () {
    let {chatData} = this.state;
    return (
      <View style={styles.container}>
        <Header
          title={this.props.navigation.state.params.name}
          props={this.props.navigation}
        />
        <View style={styles.chatContent}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={chatData}
            ref="scrollView"
            renderItem={({item,index}) => this.chatListItem (item,index)}
          />
        </View>
        <View style={styles.footer}>
          <Image source={require ('../../image/yu.png')} style={styles.icon} />
          <View style={styles.input}>
            <TextInput
              style={[{height: Math.max (30, this.state.height_comments)}]}
              onChangeText={text => this.onChange (text)}
              multiline={true}
              onContentSizeChange={this.onContentSizeChange.bind (this)}
              value={this.state.text_comments}
            />
          </View>
          <Image
            source={require ('../../image/biao.png')}
            style={styles.icon}
          />
          {this.state.showSendBtn
            ? <Text
                style={styles.sendBtn}
                onPress={() => this.sendMessgesFn2 ()}
              >
                发送
              </Text>
            : <Image
                source={require ('../../image/add.png')}
                style={styles.icon2}
              />}
        </View>
      </View>
    );
  }
}
const width = Dimensions.get ('window').width;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  toolBar: {
    width: 200,
    margin: 40,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    width: width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopColor:'#f9f9f9',
    borderTopWidth: 1
  },
  icon: {
    width: 25,
    height: 25,
  },
  icon2: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 0,
    flex: 1,
    color: '#515151',
    marginLeft: 10,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#09c66c',
    color: 'white',
    width: 55,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    borderRadius: 3,
    marginLeft: 10,
  },
  chatContent: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 60,
  },
  headImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  chatItem: {
    width: width,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  chatItem2: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  chatText2: {
    backgroundColor: 'white',
    color: '#0b2500',
    padding: 10,
    borderRadius: 5,
    borderColor: '#f6f6f6',
    lineHeight: 20,
    borderWidth: 1,
    maxWidth: 300,
  },
  chatText: {
    backgroundColor: '#9def71',
    color: '#0b2500',
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    maxWidth: 300,
  },
  trangle: {
    width: 0,
    height: 0,
    borderWidth: 5,
    borderLeftColor: '#9def71',
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderRightColor: 'rgba(0,0,0,0)',
  },
  trangle2: {
    width: 0,
    height: 0,
    borderWidth: 5,
    borderRightColor: 'white',
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderLeftColor: 'rgba(0,0,0,0)',
  },
});

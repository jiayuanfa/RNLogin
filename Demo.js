/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Test2 extends Component<{}> {
  render() {
    return (
      <View style={styles.container} >
            <Text style = {styles.textStyle} numberOfLines = {3}>我是Demo</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center', // 上下居中
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

  textView:{
    backgroundColor: 'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:150,
  },

  textStyle:{
    backgroundColor:'red',
    // height: 150,
    // 行高
    // lineHeight: 30,
    // 垂直居中显示
    textAlign:"center",
    // 想要水平方向也居中显示，就需要行高和总高度一样高才行了
    // lineHeight:150,
    // textAlignVertical:'center', // iOS没用  Android有用
    // 有人会想到使用felx布局，主轴方向设置为横向，侧轴方向设置为竖向，然后设置主轴方向居中，测轴方向居中，就可以了，但是，
    // 这是不行的，因为flex布局针对的只是自己的子组件，并不能对组件内的text进行居中
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',

    paddingTop:75,
    paddingBottom:75,

  },
});

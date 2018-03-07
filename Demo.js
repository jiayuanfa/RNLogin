






/**
/**
 * 九宫格
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
  Image,
  ImageBackground
} from 'react-native';

// 引入数据源
var data = require('./Data.json');

// 定义一些全局变量 来约束九宫格
var Dimensions = require('Dimensions');

// 获取屏幕宽度
var {width} = Dimensions.get('window');

// 每行有多少个
var col = 3;

// 每个元素的宽度
var boxW = 100;

// 横向外边距
var vMargin = (width - col * boxW) / (col + 1);

// 纵向边距
var hMargin = 40;

// 这种语法是 ES6的语法，这样的语法来适配移动端是没有问题的，但是现在的前端大部分使用的是 ES5的语法，为了适配更多的浏览器，我们也可以使用ES5的语法
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container} >
        <View style = {styles.viewStyle}>
          {this.renderAllBaobao()} 
        </View>
      </View>
    );
  }

  // 返回View中所有的包包函数
  renderAllBaobao(){
    console.log(data.length);
    // 定义一个包包的数组
    var imagesArr = [];
    // 遍历数据 
    for (var i = 0; i < data.length; i++) {

        // 取出Data中的JSON
        var dataItem = data[i];

        // 创建组建 装组建 添加数组 Image一定要给宽高 不然不会显示 View需要一个唯一的key用来标识这个组件 不然会警告
        imagesArr.push(
          <View key={i} style = {styles.outViewStyles}>
            <Image source={{uri:dataItem['icon']}} style = {styles.imageStyle}></Image>
            <Text>{dataItem['name']}</Text>
          </View>
        );
    }

    return imagesArr;
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  viewStyle: {
    // height: 
    // 确定主轴的朝向
    flexDirection:'row',
    // 换行
    flexWrap:'wrap'
  },

  imageStyle: {
    width:80, 
    height:80
  },

  outViewStyles: {
    backgroundColor: 'red',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin,
  }

});

*/


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

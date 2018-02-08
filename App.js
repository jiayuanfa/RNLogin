/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * TextInput组件的使用
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

// 引入这个类库 修改app.js
var Dimensions = require('Dimensions');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container} >
        <Text>当前屏幕宽度：{Dimensions.get('window').width}</Text>
        <Text>当前屏幕高度：{Dimensions.get('window').height}</Text>
        <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
      </View> 
    );
  }
}

/*
* TextInput的用法
*/
// 这种语法是 ES6的语法，这样的语法来适配移动端是没有问题的，但是现在的前端大部分使用的是 ES5的语法，为了适配更多的浏览器，我们也可以使用ES5的语法
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container} >
//         <TextInput style = {styles.inputStyle}
//         // value={'我是默认文字！'}
//         // 可以换行 多行显示 会冲掉密码*号的设置
//         // multiline={true}
//         // 占位置的文字
//         // placeholder={'我是占位置的'}
//         // 密码安全
//         secureTextEntry={true}
//         />
//       </View> 
//     );
//   }
// }
 
const styles = StyleSheet.create({
  container: {

    // 水平垂直居中
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
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

  inputStyle: {
    width:300,
    height:60,
    borderWidth:1,
    borderColor:'#dddddd'
  }

});

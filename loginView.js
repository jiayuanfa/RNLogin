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
  Image,
} from 'react-native';

// 引入这个类库 修改app.js
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


export default class loginView extends Component<{}> {
  render() {
    return (
      <View style={styles.container} >

        {/*头像*/}
        <Image source={require('./Images/icon.png')} style={styles.headImageStyle} ></Image>

        {/*账户密码输入框*/}
        <TextInput placeholder={'请输入账号'} style={styles.testInputStyle}/>
          
        <TextInput placeholder={'请输入密码'}
        secureTextEntry={true}
        style={styles.testInputStyle}
        />

        {/*登录*/}
        <View style={styles.loginInStyle}>
          <Text style={{color:'white'}}>登录</Text>
        </View>

        {/*忘记密码 注册*/}
        <View style={styles.settingStyle}>
            <Text>无法登陆</Text>
            <Text>新用户</Text>
        </View>

      {/*三方登录*/}
        <View style={styles.otherStyles}>
          <Text>其他登录方式</Text>

          <Image source={require('./Images/icon3.png')} 
          style={styles.otherImageStyles}
          />

          <Image source={require('./Images/icon7.png')}
                    style={styles.otherImageStyles}
          />

          <Image source={require('./Images/icon8.png')}
                    style={styles.otherImageStyles}

          />

        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {

    // 水平垂直居中
    flex: 1,
    backgroundColor: '#F5FCFF',

    // 主轴居中
    // justifyContent: 'center',

    // 测轴居中
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
  },

  headImageStyle:{
    width:80,
    height:80,
    marginTop:50,
    borderRadius:40,
    borderWidth:2,
    borderColor:'orange',
    marginBottom:30
  },

  testInputStyle:{
    backgroundColor:'white',
    height:40,
    // 
    width:width*0.8,
    // marginHorizontal:30,
    marginLeft:30,
    marginRight:30,

    // 设置间距
    marginBottom:2,
    textAlign:'center'
  },

  loginInStyle:{
    height:40,

    // 宽度乘以0.8即可 
    width:width*0.8,
    backgroundColor:'blue',

    // 文字居中 主轴 侧轴居中
    alignItems:'center',
    justifyContent:'center',

    marginTop:30,
    marginBottom:30,

    borderRadius:10
  },

  settingStyle:{
    flexDirection:'row',
    width:300,

    // 两端对齐
    justifyContent:'space-between',
  },

  otherStyles:{
    // 横向排布
    flexDirection:'row',
    // 侧轴上下居中对齐
    alignItems:'center',
    position:'absolute',
    bottom:10,
    left:30,
  },

  otherImageStyles:{
    width:50,
    height:50,

    borderRadius:25,
    marginLeft:10,
  }

});

// 输出一个类
module.exports = loginView;

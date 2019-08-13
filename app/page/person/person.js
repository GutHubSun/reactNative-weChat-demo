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
  TouchableOpacity,
} from 'react-native';
import Header from '../../component/header';
let num = 0;
export default class App extends Component<Props> {
  constructor (props) {
    super (props);
    this.state = {
      isOk: false,
      num: 0,//好友总数
      layoutList: [],
      textActive: '无',
      personList: [
       {
    title: '',
    data: [
      {
        name: '新的朋友',
        icon: require ('../../image/guan.png'),
      },
    ],
  },
  {
    title: '',
    data: [
      {
        name: '群聊',
        icon: require ('../../image/qun.png'),
      },
    ],
  },
  {
    title: 'A',
    data: [
      {
        name: '阿信',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'C',
    data: [
      {
        name: '陈道明',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'D',
    data: [
      {
        name: '大S',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '大S',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '大S',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '大S',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '大S',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'F',
    data: [
      {
        name: '范玮琪',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'G',
    data: [
      {
        name: '宫本武藏',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'H',
    data: [
      {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
   {
    title: 'I',
    data: [
      {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
   {
    title: 'P',
    data: [
      {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '华晨宇',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'Y',
    data: [
      {
        name: '袁霸天',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
   {
    title: 'J',
    data: [
      {
        name: '袁霸天',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
  {
    title: 'Z',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
    {
    title: 'B',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
    {
    title: 'E',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },  {
    title: 'K2',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
   {
    title: 'K1',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },{
    title: 'KK',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
   {
    title: 'WE',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
      {
    title: 'K',
    data: [
      {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
       {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
        {
        name: '周杰伦',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
      {
        name: '周星驰',
        icon: require ('../../image/20140826185020_AhitK.jpeg'),
      },
    ],
  },
      ],
    };
  }
  _setItemLayout (list) {
    let itemHeight = 65;  //这是一个item的高度
    let layoutList = [];  //这是一个数组 用来放处理好的高度总和
    let layoutIndex = 0; //索引
    let layoutOffset = 0; //偏移量
    let header = 35;  //这是每个item盒子最上面的header高度
    let num = 0 //好友总数
    //数组的第一条偏移量肯定是0的 所以直接push
    layoutList.push ({
      index: layoutIndex,
      length: 65,
      offset: layoutOffset,
    });
    //开始list数据循环
    list.forEach (section => { 
      //先循环里面的数据
      section.data.forEach (() => {
         //总偏移量加上各项item高度
         num += 1
        layoutOffset += itemHeight;
      });
      layoutIndex += 1; //索引加1
      layoutList.push ({
        index: layoutIndex,
        length: 65,
        offset: layoutOffset + layoutIndex * 35 - 70,
        //这个地方-70是因为我有两个item没有header 群 和新朋友
      });
    });
    this.layoutList = layoutList;
    // 所有数据处理完 通知页面可以渲染了
    this.setState ({
      isOk: true,
      num: num
    });
  }
  listItem = ({item}) => {
    let {data, title} = item;
    return (
      <View>
        <View style={title != '' ? styles.listheader : styles.listheader2}>
          <Text>{title}</Text>
        </View>
        {data.map ((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <View style={styles.listItem}>
                <Image source={item.icon} style={styles.headimg} />
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  sidebar () {
    let {personList} = this.state;
    return (
      <View style={styles.sidebarView}>
        {personList.map ((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this._onSectionselect (index, item.title);
              }}
            >
              <Text
                style={
                  item.title != '' ? styles.englishText : styles.englishText2
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  _onSectionselect (k, title) {
    this.setState ({
      textActive: title,
    });
    this.sectionList.scrollToIndex ({
      index: k,
    });
  }
  _getItemLayout (data, index) {
    let layout = this.layoutList.filter (n => n.index == index)[0];
    return layout;
  }

  componentDidMount () {
    this._setItemLayout (this.state.personList);
  }
  _createListFooter = () => {
        return (
            <View style={styles.footerView}>
                <Text style={styles.footerViewText}>
                   {this.state.num}位联系人
                </Text>
            </View>
        )
    }
    nodata(){
      return(
        <Text>加载中</Text>
      )
    }
  _keyExtractor = (item, index) => index;
  render () {
    let {personList, isOk} = this.state;
    return (
      <View style={styles.container}>
      
          <Header props={this.props.navigation} title="通讯录"/>
        <View style={styles.sidebar}>
          {this.sidebar ()}
        </View>
        {isOk
          ? <FlatList
          ListEmptyComponent={this.nodata}
              ListFooterComponent={this._createListFooter.bind(this)}
              ref={ref => {
                this.sectionList = ref;
              }}
              keyExtractor={this._keyExtractor}
              data={personList}
              getItemLayout={this._getItemLayout.bind (this)}
              renderItem={this.listItem}
            />
          : <Text>加载中</Text>}

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingBottom: 50,
  },
  listheader: {
    height: 35,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  listheader2: {
    height: 0,
  },
  headimg: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#222',
  },
  sidebar: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
    justifyContent: 'center',
    height: '100%',
  },
  englishText: {
    fontSize: 15,
    width: 50,
    textAlign: 'center',
    height: 30,
  },
  englishText2: {
    fontSize: 0,
    marginTop: 0,
  },
  sidebarView: {
    alignItems: 'center',
  },
  activeText: {
    width: 100,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    position: 'absolute',
    top: 10,
    left: '50%',
    marginLeft: -50,
    zIndex: 100,
    color: 'white',
  },
  footerView:{
    height: 50,
    textAlign: 'center',
       flexDirection: 'row',
        alignItems: 'center',
           justifyContent: 'center',
  },
  footerViewText:{

  }
});

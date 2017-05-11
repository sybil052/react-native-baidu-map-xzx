/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import BaiduMapDemo from './BaiduMapDemo';

export default class BaiDuMapDemo extends Component {
  render() {
    return (
      <BaiduMapDemo/>
    );
  }
}

AppRegistry.registerComponent('BaiDuMapDemo', () => BaiDuMapDemo);

/**
 * Created by xizhixin on 2017/5/3.
 */

import {
    requireNativeComponent,
    NativeModules,
    Platform,
    DeviceEventEmitter
} from 'react-native';

import React, {
    Component,
    PropTypes
} from 'react';

const _module = NativeModules.BaiduPoiSearchModule;

export default {
    searchNearbyProcess(keyword, centerLat, centerLng, radius, pageNum) {
        return new Promise((resolve, reject) => {
            try {
                alert("searchNearbyProcess"+_module);
                _module.searchNearbyProcess(keyword, centerLat, centerLng, radius, pageNum);
            }
            catch (e) {
                reject(e);
                return;
            }
            DeviceEventEmitter.once('onGetPoiResult', resp => {
                resolve(resp);
            });
        });
    },
    searchInCityProcess(city, keyword, pageNum) {
        return new Promise((resolve, reject) => {
            try {
                alert("searchInCityProcess"+_module);
                _module.searchInCityProcess(city, keyword, pageNum);
            }
            catch (e) {
                reject(e);
                return;
            }
            DeviceEventEmitter.once('onGetPoiResult', resp => {
                resolve(resp);
            });
        });
    },

};
/**
 * @author lovebing
 */

import React, {
  Component,
  PropTypes
} from 'react';

import {
  MapView,
  MapTypes,
  Geolocation,
    PoiSearch,
    MapModule,
    GetDistance

} from 'react-native-baidu-map';

import {
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
    Dimensions
} from 'react-native';


export default class BaiduMapDemo extends Component {

  constructor() {
    super();

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 116.400,
        latitude: 39.929
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
          longitude: 116.4005,
          latitude: 39.929,
          title: "北京"
      },{
        longitude: 116.400,
        latitude: 39.929,
        title: "张家口"
      }]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>



        <MapView 
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          style={styles.map}
          onMarkerClick={(e) => {
            console.warn(JSON.stringify(e));
          }}
          onMapClick={(e) => {
          }}
        >

        </MapView>

        <View style={styles.row}>
          <Button title="Normal" onPress={() => {
            this.setState({
              mapType: MapTypes.NORMAL
            });
          }} />
          <Button style={styles.btn} title="Satellite" onPress={() => {
              //39.915, 116.404,38.915, 117.404
              //39.914935,116.404269,40.781063,114.89914
              //39.915,116.404,38.915,115.404

              GetDistance.getDistance(39.929,116.401,39.929,116.4005)
                      .then((data)=>{
                          //alert('distance:'+JSON.stringify(data));
                          let distance = Math.round(data.distance);
                          //let distance = 10000;
                          //alert('distance:'+distance);
                          let arr = ["2000000", "1000000", "500000", "200000", "100000", "50000", "25000", "20000", "10000", "5000", "2000", "1000", "500", "200", "100", "50", "20", "10", "5"];
                          for (var j = 0; j < arr.length; j++) {
                              if (j + 1 < arr.length) {
                                  if (distance < arr[j] && distance > arr[j + 1]) {
                                      this.setState({
                                          zoom:j+5
                                      });
                                      //alert(this.state.zoom);
                                      break;
                                  }
                              }
                          }
                  }).catch((e)=>{
                      console.warn(e, 'error');
                  })}

          } />

          <Button style={styles.btn} title="Locate" onPress={() => {
            console.warn('center', this.state.center);
            Geolocation.getCurrentPosition()
              .then(data => {
                console.warn(JSON.stringify(data));
                this.setState({
                  zoom: 15,
                  marker: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    title: 'Your location'
                  },
                  center: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    rand: Math.random()
                  }
                });
              })
              .catch(e =>{
                console.warn(e, 'error');
              })
          }} />
        </View>

        <View style={styles.row}>
          <Button title="Zoom+" onPress={() => {
              this.setState({
                  zoom: this.state.zoom + 1
              });
          }} />
          <Button title="Zoom-" onPress={() => {
              if(this.state.zoom > 0) {
                  this.setState({
                      zoom: this.state.zoom - 1
                  });
              }

          }} />
        </View>

        <View style={styles.row}>
          <Button title="Traffic" onPress={() => {
            this.setState({
              trafficEnabled: !this.state.trafficEnabled
            });
          }} />

          <Button title="Baidu HeatMap" onPress={() => {
            this.setState({
              baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
            });
          }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
    marginBottom: 16
  }
});
